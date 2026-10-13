import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
  type Timestamp,
} from "firebase/firestore";
import { getDb } from "./firebase";

export interface EventVenue {
  name: string;
  address: string;
  city: string;
  country: string;
  mapUrl?: string;
}

export interface EventTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  youtube?: string;
  facebook?: string;
  web?: string;
}

export interface PublicEvent {
  id: string;
  slug: string;
  name: string;
  edition: number;
  startDate: Date;
  endDate: Date;
  timezone: string;
  tagline: string;
  description: string;
  primaryVenue: EventVenue | null;
  externalUrl: string;
  registrationUrl?: string;
  socialUrls: SocialLinks;
  logoUrl: string;
  coverImageUrl: string;
  theme: EventTheme;
}

export interface PublicParticipant {
  id: string;
  personId: string;
  type: "speaker" | "mentor" | "panelist" | "organizer" | "lead" | "volunteer";
  role?: string;
  talkTitle?: string;
  bioOverride?: string;
  order: number;
}

export interface PublicPerson {
  id: string;
  name: string;
  bio?: string;
  photoUrl?: string;
  socials: SocialLinks;
}

export interface PublicSponsor {
  id: string;
  name: string;
  logoUrl: string;
  url: string;
  tier: "platinum" | "gold" | "silver" | "bronze" | "community" | "media";
  order: number;
}

export interface PopulatedParticipant {
  participant: PublicParticipant;
  person: PublicPerson;
}

function toEvent(id: string, data: Record<string, unknown>): PublicEvent {
  const start = data.startDate as Timestamp | undefined;
  const end = data.endDate as Timestamp | undefined;
  return {
    id,
    slug: (data.slug as string) ?? "",
    name: (data.name as string) ?? "",
    edition: (data.edition as number) ?? 0,
    startDate: start ? start.toDate() : new Date(),
    endDate: end ? end.toDate() : new Date(),
    timezone: (data.timezone as string) ?? "America/La_Paz",
    tagline: (data.tagline as string) ?? "",
    description: (data.description as string) ?? "",
    primaryVenue: (data.primaryVenue as EventVenue | null) ?? null,
    externalUrl: (data.externalUrl as string) ?? "",
    registrationUrl: data.registrationUrl as string | undefined,
    socialUrls: (data.socialUrls as SocialLinks) ?? {},
    logoUrl: (data.logoUrl as string) ?? "",
    coverImageUrl: (data.coverImageUrl as string) ?? "",
    theme: (data.theme as EventTheme) ?? {
      primaryColor: "#0f7c67",
      secondaryColor: "#2480f0",
    },
  };
}

export async function getEventBySlug(slug: string): Promise<PublicEvent | null> {
  const db = getDb();
  // Slug == doc ID in our seed; direct fetch avoids the collection query that
  // Firestore rejects unless explicitly constrained by status.
  const byId = await getDoc(doc(db, "events", slug));
  if (byId.exists()) return toEvent(byId.id, byId.data());

  // Fallback: query with status constraint so it's a "constrained" query.
  const snap = await getDocs(
    query(
      collection(db, "events"),
      where("slug", "==", slug),
      where("status", "in", ["upcoming", "live", "past"]),
    ),
  );
  const docSnap = snap.docs[0];
  if (!docSnap) return null;
  return toEvent(docSnap.id, docSnap.data());
}

export async function getEventSpeakers(eventId: string): Promise<PopulatedParticipant[]> {
  const db = getDb();
  const partSnap = await getDocs(
    query(
      collection(db, "events", eventId, "participants"),
      where("type", "in", ["speaker", "mentor", "panelist"]),
      orderBy("order", "asc"),
    ),
  );
  const personIds = [...new Set(partSnap.docs.map((d) => d.data().personId as string))];
  if (personIds.length === 0) return [];

  const peopleSnaps = await Promise.all(
    personIds.map((id) => getDoc(doc(db, "people", id))),
  );
  const peopleMap = new Map<string, PublicPerson>();
  for (const snap of peopleSnaps) {
    if (!snap.exists()) continue;
    const data = snap.data();
    peopleMap.set(snap.id, {
      id: snap.id,
      name: (data.name as string) ?? "",
      bio: data.bio as string | undefined,
      photoUrl: data.photoUrl as string | undefined,
      socials: (data.socials as SocialLinks) ?? {},
    });
  }

  return partSnap.docs
    .map((d) => {
      const data = d.data();
      const personId = data.personId as string;
      const person = peopleMap.get(personId);
      if (!person) return null;
      const participant: PublicParticipant = {
        id: d.id,
        personId,
        type: data.type,
        role: data.role,
        talkTitle: data.talkTitle,
        bioOverride: data.bioOverride,
        order: (data.order as number) ?? 0,
      };
      return { participant, person };
    })
    .filter((x): x is PopulatedParticipant => x !== null);
}

export async function getEventSponsors(eventId: string): Promise<PublicSponsor[]> {
  const db = getDb();
  const snap = await getDocs(
    query(
      collection(db, "events", eventId, "sponsors"),
      orderBy("order", "asc"),
    ),
  );
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      name: (data.name as string) ?? "",
      logoUrl: (data.logoUrl as string) ?? "",
      url: (data.url as string) ?? "",
      tier: (data.tier as PublicSponsor["tier"]) ?? "community",
      order: (data.order as number) ?? 0,
    };
  });
}

const SHORT_DATE = new Intl.DateTimeFormat("es-BO", {
  day: "numeric",
  month: "long",
});

const TIME_FMT = new Intl.DateTimeFormat("es-BO", {
  hour: "2-digit",
  minute: "2-digit",
});

export function formatEventDate(e: PublicEvent): string {
  const sameDay = e.startDate.toDateString() === e.endDate.toDateString();
  if (sameDay) return SHORT_DATE.format(e.startDate);
  return `${SHORT_DATE.format(e.startDate)} – ${SHORT_DATE.format(e.endDate)}`;
}

export function formatEventTime(e: PublicEvent): string {
  return `${TIME_FMT.format(e.startDate)}`;
}

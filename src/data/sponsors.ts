export interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

export interface SponsorTier {
  name: string;
  color: string; // Color del título
  accentColor: string; // Color de la línea decorativa
  bgColor: string; // Color de fondo de las tarjetas
  iconColor: string; // Color del ícono
  icon: "medal" | "star" | "heart";
  sponsors: [Sponsor[], Sponsor[], Sponsor[]];
  textColor: string;
}

// Tier Oro
export const goldSponsors: SponsorTier = {
  name: "Patrocinadores Oro",
  color: "text-[#A65F00]",
  accentColor: "bg-amber-500",
  bgColor: "bg-gradient-to-b from-[#FEFCE8] to-[#FEF9C2]",
  iconColor: "text-[#A65F00]",
  icon: "medal",
  textColor: "text-[#A65F00]",
  sponsors: [
    // Array 1 - visible en móvil y superiores
    [
      {
        name: "GP4Tech",
        logo: "/src/assets/images/community organizers/gp4tech.png",
        url: "https://www.facebook.com/GP4TechJala",
      },
      {
        name: "Women Techmakers",
        logo: "/src/assets/images/sponsors/wtmLogo.png",
        url: "https://developers.google.com/womentechmakers",
      },
    ],
    // Array 2 - visible en tablet y superiores
    [
      {
        name: "Fundación del Saber",
        logo: "/src/assets/images/sponsors/fdsLogo.webp",
        url: "https://fundaciondelsaber.org/",
      },
    ],
    // Array 3 - visible solo en desktop
    [],
  ],
};

// Tier Plata
export const silverSponsors: SponsorTier = {
  name: "Patrocinadores Plata",
  color: "text-gray-700",
  accentColor: "bg-gray-500",
  bgColor: "bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]",
  iconColor: "text-gray-500",
  icon: "star",
  textColor: "text-[#364153]",
  sponsors: [
    [
      {
        name: "Michi Cósmico",
        logo: "/src/assets/images/sponsors/michiCosmicoLogo.jpeg",
        url: "https://www.instagram.com/impresiones_michicosmico/",
      },
    ],
    [
      {
        name: "Beauty Truck",
        logo: "/src/assets/images/sponsors/beautyLogo.jpeg",
        url: "https://www.facebook.com/thebeautytruckbolivia",
      },
    ],
    [],
  ],
};

// Tier Bronce
export const bronzeSponsors: SponsorTier = {
  name: "Patrocinadores Bronce",
  color: "text-orange-700",
  accentColor: "bg-orange-500",
  bgColor: "bg-orange-50",
  iconColor: "text-orange-600",
  icon: "heart",
  textColor: "text-[#CA3500]",
  sponsors: [[], [], []],
};

export const allTiers = [goldSponsors, silverSponsors, bronzeSponsors];

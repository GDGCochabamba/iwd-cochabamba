export interface Role {
  label: string;
  color: string;
}

export interface TeamMember {
  name: string;
  photo: ImageMetadata;
  roles?: Role[];
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

// Role presets
export const R = {
  STAFF:            { label: "Staff",            color: "#1A3E38" },
  LEAD_SPONSORS:    { label: "Sponsors",    color: "#F6B918" },
  LEAD_VIDEO:       { label: "Video",       color: "#F59E0B" },
  LEAD_DISENO:      { label: "Diseño",      color: "#47B4FD" },
  LEAD_MARKETING:   { label: "Marketing",   color: "#70D981" },
  LEAD_LOGISTICA:   { label: "Logística",   color: "#FC53C9" },
  LEAD_SPEAKERS:    { label: "Speakers",    color: "#63DDD0" },
  LEAD_DECORACION:  { label: "Decoración",  color: "#63DDD0" },
  LEAD_WEB:         { label: "Web",         color: "#1DE9B6" },
  LEAD_REGISTRO:    { label: "Registro",    color: "#9359FF" },
  LEAD_DINAMICAS:   { label: "Dinámicas",   color: "#FF8C42" },
} as const satisfies Record<string, Role>;

// Team photos live in src/assets/team/<slug>.jpg.
const photos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/team/*.jpg",
  { eager: true },
);

function photo(slug: string): ImageMetadata {
  const file = photos[`../assets/team/${slug}.jpg`];
  if (!file) throw new Error(`Missing photo src/assets/team/${slug}.jpg`);
  return file.default;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Lizbeth Salinas",
    photo: photo("lizbeth-salinas"),
    roles: [R.LEAD_SPONSORS],
    instagram: "https://www.instagram.com/liliumlizbeth",
    facebook: "https://www.facebook.com/Dhilaj",
    linkedin: "https://www.linkedin.com/in/pattysalinas",
  },
  {
    name: "Jessica Angulo",
    photo: photo("jessica-angulo"),
    roles: [R.LEAD_WEB, R.LEAD_MARKETING],
    instagram: "https://www.instagram.com/jessii.li",
    facebook: "https://www.facebook.com/share/1K3s3XadaA/",
    linkedin: "https://www.linkedin.com/in/jessica-angulo-candia",
  },
  {
    name: "Jhael Kuno Bustos",
    photo: photo("jhael-kuno-bustos"),
    roles: [R.LEAD_WEB],
    instagram: "https://www.instagram.com/kunobustosjhael",
    facebook: "https://www.facebook.com/share/1XV1nZc5eC/",
    linkedin: "https://www.linkedin.com/in/kuno-bustos-jhael-8432b8324",
  },
  {
    name: "Marvin Dayson",
    photo: photo("marvin-dayson"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/dayson.issa",
  },
  {
    name: "Clara Soria Lopez",
    photo: photo("clara-soria-lopez"),
    roles: [R.LEAD_MARKETING],
  },
  {
    name: "Ives Alfaro",
    photo: photo("ives-alfaro"),
    roles: [R.LEAD_LOGISTICA],
    instagram: "https://www.instagram.com/ives_alfaro",
  },
  {
    name: "Alejandra Palza",
    photo: photo("alejandra-palza"),
    roles: [R.LEAD_DINAMICAS, R.LEAD_SPONSORS],
  },
  {
    name: "Leandro Soliz",
    photo: photo("leandro-soliz"),
    roles: [R.LEAD_VIDEO],
  },
  {
    name: "Yanina Quispe",
    photo: photo("yanina-quispe"),
    roles: [R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/nina.requi",
    linkedin: "https://www.linkedin.com/in/yaninapaola",
  },
  {
    name: "Luis Fernando Arce",
    photo: photo("luis-fernando-arce"),
    roles: [R.LEAD_WEB, R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/louferati",
    linkedin: "https://www.linkedin.com/in/luis-fernando-a-806811352",
  },
  {
    name: "Rodrigo Illanes",
    photo: photo("rodrigo-illanes"),
    roles: [R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/rodriillanes",
    linkedin: "https://www.linkedin.com/in/rodrigo-illanes-b0174714a",
  },
  {
    name: "Pablo Pardo",
    photo: photo("pablo-pardo"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/pabloux_darkmind",
    facebook: "https://www.facebook.com/PablouxDarkmind",
    linkedin: "https://www.linkedin.com/in/pablopardoalcocer",
  },
  {
    name: "Edelfrida Lima",
    photo: photo("edelfrida-lima"),
    roles: [R.LEAD_REGISTRO],
    instagram: "https://www.instagram.com/limaedel_",
  },
  {
    name: "Nicole Herbas",
    photo: photo("nicole-herbas"),
    roles: [R.LEAD_SPONSORS],
    instagram: "https://www.instagram.com/nicole_herbas",
    facebook: "https://www.facebook.com/nicole.herbas.75",
    linkedin: "https://www.linkedin.com/in/nicole-katherin-herbas-fuentes",
  },
  {
    name: "Sofia Issa",
    photo: photo("sofia-issa"),
    roles: [R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/Serontologico_",
  },
  {
    name: "Jose Jonatan Zambrana",
    photo: photo("jose-jonatan-zambrana"),
    roles: [R.STAFF],
  },
  {
    name: "Dayana Rodriguez",
    photo: photo("dayana-rodriguez"),
    roles: [R.LEAD_WEB, R.LEAD_DINAMICAS],
    instagram: "https://www.instagram.com/day.com_momo",
    facebook: "https://www.facebook.com/share/18UGGPy6NW/",
    linkedin: "https://www.linkedin.com/in/dayanarf",
  },
  {
    name: "Alison Orellana",
    photo: photo("alison-orellana"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/sonny_orellana",
    linkedin: "https://www.linkedin.com/in/alison-or",
  },
  {
    name: "Valentina Salinas",
    photo: photo("valentina-salinas"),
    roles: [R.LEAD_DISENO],
    instagram: "https://www.instagram.com/val_salinasdm",
    facebook: "https://www.facebook.com/valentina.salinas.758399",
    linkedin: "https://www.linkedin.com/in/valentinasalinasdoriamedina",
  },
  {
    name: "Kevin Aguilar",
    photo: photo("kevin-aguilar"),
    roles: [R.LEAD_WEB],
    instagram: "https://www.instagram.com/aguilarkevin123",
    facebook: "https://www.facebook.com/AguilarKevin123",
    linkedin:
      "https://www.linkedin.com/in/kevin-erick-aguilar-arispe-a10975218",
  },
  {
    name: "Enix Cartagena",
    photo: photo("enix-cartagena"),
    roles: [R.LEAD_LOGISTICA],
    instagram: "https://www.instagram.com/enix.x_",
    linkedin: "https://www.linkedin.com/in/enix-cartagena-421025328",
  },
  {
    name: "Benghabel Borda",
    photo: photo("benghabel-borda"),
    roles: [R.LEAD_LOGISTICA],
    instagram: "https://www.instagram.com/_benghazzz_",
  },
  {
    name: "Doria Garcia",
    photo: photo("doria-garcia"),
    roles: [R.LEAD_SPEAKERS],
    instagram: "https://www.instagram.com/doria_cg",
  },
  {
    name: "Melvy Ancieta",
    photo: photo("melvy-ancieta"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/melvyancieta",
    facebook: "https://www.facebook.com/melvyrocio.ancieta",
    linkedin: "https://www.linkedin.com/in/melvydesign",
  },
  {
    name: "Leonardo Eguino",
    photo: photo("leonardo-eguino"),
    roles: [R.LEAD_WEB],
    instagram: "https://www.instagram.com/Leoeguino",
  },
  {
    name: "Paola Gutierrez",
    photo: photo("paola-gutierrez"),
    roles: [R.LEAD_DISENO],
    instagram: "https://www.instagram.com/paolitagutierrez",
    facebook: "https://www.facebook.com/share/1ECE2BQ14p/",
    linkedin: "https://www.linkedin.com/in/paolagutierrezduran",
  },
  {
    name: "Angel Flores",
    photo: photo("angel-flores"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/angel1102flores",
  },
  {
    name: "Irvin Cossio",
    photo: photo("irvin-cossio"),
    roles: [R.STAFF],
  },
  {
    name: "Dayana Ledezma",
    photo: photo("dayana-ledezma"),
    roles: [R.STAFF],
  },
  {
    name: "Brian Vega",
    photo: photo("brian-vega"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/brian_vega_212",
    facebook: "https://www.facebook.com/BrianDennisVega",
    linkedin: "https://www.linkedin.com/in/brian-dennis-vega-hidalgo",
  },
  {
    name: "Vania Catorceno",
    photo: photo("vania-catorceno"),
    roles: [R.STAFF],
  },
  {
    name: "Carlos Collazos",
    photo: photo("carlos-collazos"),
    roles: [R.STAFF],
  },
  {
    name: "Esther Romero",
    photo: photo("esther-romero"),
    roles: [R.LEAD_SPEAKERS],
  },
  {
    name: "Gabriela Torrico",
    photo: photo("gabriela-torrico"),
    roles: [R.LEAD_DECORACION],
  },
  {
    name: "Verónica Cuéllar",
    photo: photo("veronica-cuellar"),
    roles: [R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/diandra_cuellar_mendieta",
  },
  {
    name: "Daniela Vela",
    photo: photo("daniela-vela"),
    roles: [R.LEAD_DISENO],
    instagram: "https://www.instagram.com/danielita.vo/?hl=en",
  },
];

export interface CoreTeamMember extends TeamMember {
  role: string;
}

const coreRoles: { match: string; role: string }[] = [
  { match: "Nicole Herbas", role: "Lead Sponsors" },
  { match: "Gabriela Torrico", role: "Lead Decoración" },
  { match: "Esther Romero", role: "Lead Speakers" },
  { match: "Verónica Cuéllar", role: "Lead Video" },
  { match: "Clara Soria", role: "Lead Marketing" },
  { match: "Valentina Salinas", role: "Lead Diseño" },
  { match: "Daniela Vela", role: "Lead Diseño" },
  { match: "Enix", role: "Lead Logística" },
  { match: "Alejandra Palza", role: "Lead Dinámicas" },
  { match: "Dayana Rodriguez", role: "Lead Web" },
  { match: "Jessica Angulo", role: "Lead Web" },
  { match: "Edelfrida", role: "Lead Registro" },
];

export const coreTeamMembers: CoreTeamMember[] = coreRoles
  .map(({ match, role }) => {
    const member = teamMembers.find((m) =>
      m.name.toLowerCase().includes(match.toLowerCase()),
    );
    return member ? { ...member, role } : null;
  })
  .filter((m): m is CoreTeamMember => m !== null);

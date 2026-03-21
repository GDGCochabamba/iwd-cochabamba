export interface Role {
  label: string;
  color: string;
}

export interface TeamMember {
  name: string;
  photo: string;
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

function drivePhoto(id: string): string {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w300`;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Lizbeth Salinas",
    photo: drivePhoto("1r7EPd_X3k5iX7nCTpYcu6VXuZQ4uq-z3"),
    roles: [R.LEAD_SPONSORS],
    instagram: "https://www.instagram.com/liliumlizbeth",
    facebook: "https://www.facebook.com/Dhilaj",
    linkedin: "https://www.linkedin.com/in/pattysalinas",
  },
  {
    name: "Jessica Angulo",
    photo: drivePhoto("1leSLC5U0sxZRG6Ey5YovWu3q0svyG3NP"),
    roles: [R.LEAD_WEB, R.LEAD_MARKETING],
    instagram: "https://www.instagram.com/jessii.li",
    facebook: "https://www.facebook.com/share/1K3s3XadaA/",
    linkedin: "https://www.linkedin.com/in/jessica-angulo-candia",
  },
  {
    name: "Jhael Kuno Bustos",
    photo: drivePhoto("15No-SCRTuzICz3MCqspSGxl7BMZ5OslC"),
    roles: [R.LEAD_WEB],
    instagram: "https://www.instagram.com/kunobustosjhael",
    facebook: "https://www.facebook.com/share/1XV1nZc5eC/",
    linkedin: "https://www.linkedin.com/in/kuno-bustos-jhael-8432b8324",
  },
  {
    name: "Marvin Dayson",
    photo: drivePhoto("1qQ7M1Si2TPLyoP8GNmUOLZSLnt-uO-MX"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/dayson.issa",
  },
  {
    name: "Clara Soria Lopez",
    photo: drivePhoto("1PtE3hF4Ig-gSpoA--I0LLuehvaMAIu4o"),
    roles: [R.LEAD_MARKETING],
  },
  {
    name: "Ives Alfaro",
    photo: drivePhoto("1NgBHlaBGLXPIfjuaYmW8XcUH4QZC1sGb"),
    roles: [R.LEAD_LOGISTICA],
    instagram: "https://www.instagram.com/ives_alfaro",
  },
  {
    name: "Alejandra Palza",
    photo: drivePhoto("1w8OjGcVI5NqYmYOQSu_RTmmDcaBcYSSm"),
    roles: [R.LEAD_DINAMICAS, R.LEAD_SPONSORS],
  },
  {
    name: "Leandro Soliz",
    photo: drivePhoto("1zfPBHBvjuNUedlVSrO2WWJKqLr-NjtDd"),
    roles: [R.LEAD_VIDEO],
  },
  {
    name: "Yanina Quispe",
    photo: drivePhoto("1jR5k8RYJsHpsQda64-61aA2I80DMvurN"),
    roles: [R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/nina.requi",
    linkedin: "https://www.linkedin.com/in/yaninapaola",
  },
  {
    name: "Luis Fernando Arce",
    photo: drivePhoto("1mSkvIO88fYaHwQyNcOsPgu5S0ICRZZRi"),
    roles: [R.LEAD_WEB, R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/louferati",
    linkedin: "https://www.linkedin.com/in/luis-fernando-a-806811352",
  },
  {
    name: "Rodrigo Illanes",
    photo: drivePhoto("1ClNu0Qt3-91fGNWXuZO3nQRsYMvxysNq"),
    roles: [R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/rodriillanes",
    linkedin: "https://www.linkedin.com/in/rodrigo-illanes-b0174714a",
  },
  {
    name: "Pablo Pardo",
    photo: drivePhoto("1kHMCEZqfCX5bPSkHTeeayU-FDb6pl4s6"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/pabloux_darkmind",
    facebook: "https://www.facebook.com/PablouxDarkmind",
    linkedin: "https://www.linkedin.com/in/pablopardoalcocer",
  },
  {
    name: "Edelfrida Lima",
    photo: drivePhoto("1-4YGHqWet4hvz51eDSX50T__RSApUmBs"),
    roles: [R.LEAD_REGISTRO],
    instagram: "https://www.instagram.com/limaedel_",
  },
  {
    name: "Nicole Herbas",
    photo: drivePhoto("1v1xnDdvD5mpH71uUbyb0UUOFYcUJi_DK"),
    roles: [R.LEAD_SPONSORS],
    instagram: "https://www.instagram.com/nicole_herbas",
    facebook: "https://www.facebook.com/nicole.herbas.75",
    linkedin: "https://www.linkedin.com/in/nicole-katherin-herbas-fuentes",
  },
  {
    name: "Sofia Issa",
    photo: drivePhoto("1qPK2rgkjCNRfSeC_ohRBisPe5Y0sEKJG"),
    roles: [R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/Serontologico_",
  },
  {
    name: "Jose Jonatan Zambrana",
    photo: drivePhoto("1qnLtW-tcCycIQk1AGy4_T5Y7VF9NLBnN"),
    roles: [R.STAFF],
  },
  {
    name: "Dayana Rodriguez",
    photo: drivePhoto("1qQ7tEuRJmpqtQnA-pGepeBafqD7kFNId"),
    roles: [R.LEAD_WEB, R.LEAD_DINAMICAS],
    instagram: "https://www.instagram.com/day.com_momo",
    facebook: "https://www.facebook.com/share/18UGGPy6NW/",
    linkedin: "https://www.linkedin.com/in/dayanarf",
  },
  {
    name: "Alison Orellana",
    photo: drivePhoto("1zv-853949mjzTmzEDQHgkmAsbZOWk_Lx"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/sonny_orellana",
    linkedin: "https://www.linkedin.com/in/alison-or",
  },
  {
    name: "Valentina Salinas",
    photo: drivePhoto("1svG_6qVdtzeQM3r-rw4njkVUVyzLfx4k"),
    roles: [R.LEAD_DISENO],
    instagram: "https://www.instagram.com/val_salinasdm",
    facebook: "https://www.facebook.com/valentina.salinas.758399",
    linkedin: "https://www.linkedin.com/in/valentinasalinasdoriamedina",
  },
  {
    name: "Kevin Aguilar",
    photo: drivePhoto("11YYKDE9yJOsUd-qKuMDrrqIXcvaZ6Aur"),
    roles: [R.LEAD_WEB],
    instagram: "https://www.instagram.com/aguilarkevin123",
    facebook: "https://www.facebook.com/AguilarKevin123",
    linkedin:
      "https://www.linkedin.com/in/kevin-erick-aguilar-arispe-a10975218",
  },
  {
    name: "Enix Cartagena",
    photo: drivePhoto("1KpqNHU0asw5iXi0GoJVMXRbnK_68w7tn"),
    roles: [R.LEAD_LOGISTICA],
    instagram: "https://www.instagram.com/enix.x_",
    linkedin: "https://www.linkedin.com/in/enix-cartagena-421025328",
  },
  {
    name: "Benghabel Borda",
    photo: drivePhoto("1lXDR3M1nqK0PKVo7XGtGMCjC4o9j5zzm"),
    roles: [R.LEAD_LOGISTICA],
    instagram: "https://www.instagram.com/_benghazzz_",
  },
  {
    name: "Doria Garcia",
    photo: drivePhoto("1CkOU124ppU26AH0efZWWPHuCvdWoOUO5"),
    roles: [R.LEAD_SPEAKERS],
    instagram: "https://www.instagram.com/doria_cg",
  },
  {
    name: "Melvy Ancieta",
    photo: drivePhoto("1IP2QEQ-9gSST2bimlSy0y_kuWA5FiM3P"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/melvyancieta",
    facebook: "https://www.facebook.com/melvyrocio.ancieta",
    linkedin: "https://www.linkedin.com/in/melvydesign",
  },
  {
    name: "Leonardo Eguino",
    photo: drivePhoto("1qR7G1b4ft3wB6Pa6F00JRzgOzTWpW3_K"),
    roles: [R.LEAD_WEB],
    instagram: "https://www.instagram.com/Leoeguino",
  },
  {
    name: "Paola Gutierrez",
    photo: drivePhoto("1K9LApSfGO3lGVveZzcQRrr14lhIx3LEI"),
    roles: [R.LEAD_DISENO],
    instagram: "https://www.instagram.com/paolitagutierrez",
    facebook: "https://www.facebook.com/share/1ECE2BQ14p/",
    linkedin: "https://www.linkedin.com/in/paolagutierrezduran",
  },
  {
    name: "Angel Flores",
    photo: drivePhoto("1now_Zj24TDZQ7QfJUfSHeHTZAyk6Dqdf"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/angel1102flores",
  },
  {
    name: "Irvin Cossio",
    photo: drivePhoto("1yZoJ3y7WAozHic-d_N4KxTGQgGuWY55C"),
    roles: [R.STAFF],
  },
  {
    name: "Dayana Ledezma",
    photo: drivePhoto("1d-vXRrIngLwjrjPfODPABa5soQ2F1esJ"),
    roles: [R.STAFF],
  },
  {
    name: "Brian Vega",
    photo: drivePhoto("1Fsvp6v5HldVNv3uCHmUnjVR21fH7_Ffm"),
    roles: [R.STAFF],
    instagram: "https://www.instagram.com/brian_vega_212",
    facebook: "https://www.facebook.com/BrianDennisVega",
    linkedin: "https://www.linkedin.com/in/brian-dennis-vega-hidalgo",
  },
  {
    name: "Vania Catorceno",
    photo: drivePhoto("1pwutlSV8lnXfoOTisnsfWE8P_WHgHG8x"),
    roles: [R.STAFF],
  },
  {
    name: "Carlos Collazos",
    photo: drivePhoto("1y0XQVfnFWO4NfCn5xZ4MKFsocVoWRrqS"),
    roles: [R.STAFF],
  },
  {
    name: "Esther Romero",
    photo: drivePhoto("1tIQ7n5VPQNaFpOl_rPFwkTJfif0EuWdG"),
    roles: [R.LEAD_SPEAKERS],
  },
  {
    name: "Gabriela Torrico",
    photo: drivePhoto("1kcBAkVxfHg0AxJp-Eyji1cbn5bxOQbFR"),
    roles: [R.LEAD_DECORACION],
  },
  {
    name: "Verónica Cuéllar",
    photo: drivePhoto("1Yrimramq1Eogo8dNmFplGC5PxqrOOL0c"),
    roles: [R.LEAD_VIDEO],
    instagram: "https://www.instagram.com/diandra_cuellar_mendieta",
  },
  {
    name: "Daniela Vela",
    photo: drivePhoto("1bXxDAqBd3zA1FNC3odP3Mbt7ggImY96I"),
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

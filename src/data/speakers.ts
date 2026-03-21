import logoWeb from "../assets/images/social/web.svg";
import logoLinkedin from "../assets/images/social/linkedin.svg";
import logoFacebook from "../assets/images/social/facebook.svg";
import logoInstagram from "../assets/images/social/instagram.svg";
import logoTwitter from "../assets/images/social/twitter.svg";
import logoGithub from "../assets/images/social/github.svg";
import logoYoutube from "../assets/images/social/youtube.svg";

const drivePhoto = (id: string) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w300`;

export const speakers = [
  {
    img: drivePhoto("1Yx1rZTK0d8TOrog4cyrQFZh4iPl0l6Zt"),
    name: "Maria Alejandra Mamani Cordero",
    speakerTopic: "Enseñar a ser valientes, no perfectas",
    bio: "Especialista en educación y tecnología, actualmente cursando una maestría en Seguridad Informática e IA.",
    category: "Educación",
    time: "09:00 - 09:45",
    social: [
      {
        social_img: logoLinkedin,
        src: "https://linkedin.com/in/maria-alejandra-mamani-cordero-65628a12a",
      },
    ],
  },
  {
    img: drivePhoto("1oWlTHNKWUgiPWyzkB6-ZyLG3O5oW8man"),
    name: "Basilia Patzi Choqueticlla",
    speakerTopic: "Más allá del baile",
    bio: "Directora de Bhangare Dance Studio con 11 años de trayectoria formando bailarines en Cochabamba.",
    category: "Cultura",
    time: "09:00 - 10:00",
    social: [
      {
        social_img: logoFacebook,
        src: "https://www.facebook.com/share/1DFoBt8pHy/",
      },
    ],
  },
  {
    img: drivePhoto("1udlzgIhnQaQ05rfdslCulORTgArxSyRw"),
    name: "Odaliz Nicol",
    speakerTopic:
      "¿Los limites mentales y fisicos realmente existen cuando se trata de crecer?",
    bio: "Ex-Presidenta Nacional de AIESEC en Bolivia, enfocada en bienestar personal y gestión del Burnout.",
    category: "Storytelling",
    time: "09:45 - 10:00",
    social: [
      {
        social_img: logoLinkedin,
        src: "https://www.linkedin.com/in/odaliz-rojas-roldan/",
      },
    ],
  },
  {
    img: drivePhoto("1ZATfcjQiaMSjZgo_tqaxG1_bOxzyhADk"),
    name: "LILIANA VALENTINA LARRAZABAL",
    speakerTopic:
      "Romper patrones invisibles: salud mental y liderazgo femenino en tecnología",
    bio: "Psicóloga clínica especializada en TCC y EMDR, enfocada en liderazgo sostenible y humano.",
    category: "Salud Mental",
    time: "10:00 - 10:45",
    social: [
      {
        social_img: logoInstagram,
        src: "https://www.instagram.com/psico__valentina",
      },
    ],
  },
  {
    img: drivePhoto("12uD-hIRGaVaSiju_dB6IU1c9imtPqylb"),
    name: "Raquel Andrea Calderón Gallardo",
    speakerTopic: "Crónicas de un Salto al Vacío",
    bio: "Ingeniera biomédica apasionada por la IA aplicada a la salud y neurotecnología.",
    category: "Desarrollo Personal",
    time: "10:45 - 11:00",
    social: [
      {
        social_img: logoLinkedin,
        src: "https://www.linkedin.com/in/raquel-andrea-calderon-gallardo/",
      },
    ],
  },
  {
    img: drivePhoto("1PWdiymDgCB6HgAjBDjkTzXulpdn6fRhe"),
    name: "Diandra Nathaly Céspedes Sagardía",
    speakerTopic:
      "Violencia digital de género: una realidad pendiente de abordar",
    bio: "Abogada especialista en derechos digitales y defensa de los derechos humanos.",
    category: "Derechos Digitales",
    time: "11:00 - 11:15",
    social: [
      { social_img: logoWeb, src: "http://linktr.ee/diandra.n.cespedes.s" },
    ],
  },
  {
    img: drivePhoto("18fSUA6tLk2cYLZUA7p_e1cDyR_gBK-Tp"),
    name: "Gaston Joshua Zientarski Rivero",
    speakerTopic: "Inteligencia emocional para equipos de trabajo",
    bio: "Licenciado en Ciencias Jurídicas y activista en la construcción de espacios juveniles e incidencia pública.",
    category: "Liderazgo",
    time: "11:00 - 12:00",
    social: [
      {
        social_img: logoLinkedin,
        src: "https://www.linkedin.com/in/gzientarski/",
      },
    ],
  },
  {
    img: drivePhoto("1dzIzQCcemMQY3mVsffCSqY4t-LVRUeq8"),
    name: "Nicole Cartagena Siles",
    speakerTopic:
      "Tu carrera no es una caja: crecer profesionalmente en un área sin muchos referentes",
    bio: "Ingeniera biomédica con experiencia en salud, tecnología y educación.",
    category: "Trayectoria",
    time: "11:15 - 12:00",
    social: [
      {
        social_img: logoLinkedin,
        src: "https://www.linkedin.com/in/nicole-cartagena-siles-52ab92263",
      },
    ],
  },
  {
    img: drivePhoto("1cJTStmrdr9wB6NELVbPY3-sis7SBvkQe"),
    name: "Dafne Alejandra Caballero",
    speakerTopic:
      "Cómo la inteligencia artificial potencia las campañas de pago",
    bio: "Especialista en IA aplicada al marketing digital y optimización de campañas de paid media.",
    category: "Marketing / IA",
    time: "13:20 - 13:35",
    social: [
      {
        social_img: logoLinkedin,
        src: "https://www.linkedin.com/in/dafnealejandracaballerocarrasco/",
      },
    ],
  },
  {
    img: drivePhoto("1q0dS7_BygNzRzmPLefuJwewWuDbrb_0l"),
    name: "María René Torrez Vargas",
    speakerTopic: "Technovation: 10 años rompiendo paradigmas.",
    bio: "Ingeniera de Sistemas, WTM Ambassador y Trainer de Cisco apasionada por la robótica educativa.",
    category: "Educación",
    time: "13:35 - 13:50",
    social: [
      { social_img: logoInstagram, src: "https://www.instagram.com/solorene" },
    ],
  },
  {
    img: drivePhoto("1g8_p58fdNXzYWIfNWdEhisU_KXhyjQhg"),
    name: "Carlos Collazos",
    speakerTopic:
      "Trabajar remoto desde Bolivia para equipos internacionales suena increible",
    bio: "Senior UX Designer en SportsEngine y Organizer de GDG Cochabamba.",
    category: "Trabajo Remoto",
    time: "13:50 - 14:20",
    social: [
      { social_img: logoInstagram, src: "https://instagram.com/ux.carlos" },
    ],
  },
  {
    img: drivePhoto("1Crm9Xd3V3OYsMDkSEXAqIk7I6HR7460q"),
    name: "Anahí Sanabria Ugarte",
    speakerTopic: "La programación competitiva puede cambiar tu carrera",
    bio: "Backend Developer y competidora ICPC apasionada por la resolución de problemas algorítmicos.",
    category: "Programación",
    time: "14:20 - 14:35",
    social: [{ social_img: logoGithub, src: "https://github.com/AnahiSU" }],
  },
];

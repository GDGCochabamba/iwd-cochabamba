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
        name: "Bitget",
        logo: "/src/assets/images/sponsors/bitget.png",
        url: "https://www.bitget.com",
      },
    ],
    // Array 2 - visible en tablet y superiores
    [],
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
        name: "Purple Hiring",
        logo: "/src/assets/images/sponsors/purpleHiring.png",
        url: "https://www.purplehiring.com",
      },
    ],
    [
      {
        name: "Universidad Mayor de San Simón",
        logo: "/src/assets/images/sponsors/umss.png",
        url: "https://www.umss.edu.bo",
      },
    ],
    [
      {
        name: "UNIFRANZ",
        logo: "/src/assets/images/sponsors/unifranz.png",
        url: "https://www.unifranz.edu.bo",
      },
    ],
  ],
};

// Tier Patrocinadores Bronce
export const bronzeSponsors: SponsorTier = {
  name: "Patrocinadores Bronce",
  color: "text-orange-700",
  accentColor: "bg-orange-500",
  bgColor: "bg-orange-50",
  iconColor: "text-orange-600",
  icon: "heart",
  textColor: "text-[#CA3500]",
  sponsors: [
    // Array 1 - visible en móvil y superiores
    [
      {
        name: "Aguas de Santiago",
        logo: "/src/assets/images/sponsors/aguasDeSantiago.png",
        url: "#",
      },
      {
        name: "Impresiones Michicosmico",
        logo: "/src/assets/images/sponsors/michicosmico.png",
        url: "https://www.instagram.com/impresiones_michicosmico/",
      },
      {
        name: "The Pink Salón",
        logo: "/src/assets/images/sponsors/thePinkSalon.png",
        url: "#",
      },
      {
        name: "Bhangare Dance Studio",
        logo: "/src/assets/images/sponsors/bhangare.png",
        url: "https://www.facebook.com/liapatzibhangare/",
      },
    ],
    // Array 2 - visible en tablet y superiores
    [
      {
        name: "Jala University",
        logo: "/src/assets/images/sponsors/jalaUniversity.png",
        url: "https://www.jalauniversity.com",
      },
      {
        name: "Favorcito",
        logo: "/src/assets/images/sponsors/favorcito.png",
        url: "https://www.facebook.com/tufavorcito/",
      },
      {
        name: "Biyuyo",
        logo: "/src/assets/images/sponsors/biyuyo.png",
        url: "#",
      },
    ],
    // Array 3 - visible solo en desktop
    [
      {
        name: "Twintro",
        logo: "/src/assets/images/sponsors/twintro.png",
        url: "#",
      },
      {
        name: "Digital Services",
        logo: "/src/assets/images/sponsors/digitalServices.png",
        url: "#",
      },
      {
        name: "Delve",
        logo: "/src/assets/images/sponsors/delve.png",
        url: "https://delveedu.com/",
      },
    ],
  ],
};

export const allTiers = [goldSponsors, silverSponsors, bronzeSponsors];

import LogoGrid from "../logo-grid";
import IntroBox from "../intro-box";

const allLogos = [
  {
    src: "/customer/Big_Dutchman_Logo.png",
    alt: "Big Dutchman",
    scale: "lg" as const,
  },
  {
    src: "/customer/Esprit-Logo_SS18_CMYK_Black_2-01.png",
    alt: "Esprit",
    scale: "lg" as const,
  },
  {
    src: "/customer/Flaschenpost_Logo_2020.svg.png",
    alt: "Flaschenpost",
    scale: "md" as const,
  },
  {
    src: "/customer/Fressnapf_Logo_2023.svg.png",
    alt: "Fressnapf",
    scale: "sm" as const,
  },
  { src: "/customer/Logo_Markant.svg", alt: "Markant", scale: "md" as const },
  {
    src: "/customer/Logo_rossmann_2024.svg",
    alt: "Rossmann",
    scale: "xs" as const,
  },
  {
    src: "/customer/Lufthansa-Logo.wine.png",
    alt: "Lufthansa",
    scale: "xs" as const,
  },
  {
    src: "/customer/Schwarz-Gruppe_Lidl_Kaufland_Logo_9.2019.svg.png",
    alt: "Schwarz Gruppe",
    scale: "lg" as const,
  },
  { src: "/customer/edeka.png", alt: "Edeka", scale: "md" as const },
  { src: "/customer/images.png", alt: "Partner", scale: "lg" as const },
];

interface CustomerProps {
  logos?: typeof allLogos;
}

export default function Customer({ logos = allLogos }: CustomerProps) {
  return (
    <>
      <div className="text-center pt-20">
        <IntroBox>
          <IntroBox.PreHeadline>Highlight</IntroBox.PreHeadline>
          <IntroBox.Headline>Unsere Kunden</IntroBox.Headline>
          <IntroBox.Subline>
            Das sind die Kunden, die uns vertrauen und mit AI-Workflows ihre
            prozesse automatisieren
          </IntroBox.Subline>
        </IntroBox>
      </div>
      <LogoGrid logos={logos} />
    </>
  );
}

export { allLogos };

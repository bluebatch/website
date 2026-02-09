import LogoGrid from "../logo-grid";
import IntroBox from "../intro-box";

export default function Customer() {
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
      <LogoGrid
        logos={[
          {
            src: "/customer/Big_Dutchman_Logo.png",
            alt: "Big Dutchman",
            scale: "lg",
          },
          {
            src: "/customer/Esprit-Logo_SS18_CMYK_Black_2-01.png",
            alt: "Esprit",
            scale: "lg",
          },
          {
            src: "/customer/Flaschenpost_Logo_2020.svg.png",
            alt: "Flaschenpost",
            scale: "md",
          },
          {
            src: "/customer/Fressnapf_Logo_2023.svg.png",
            alt: "Fressnapf",
            scale: "sm",
          },
          { src: "/customer/Logo_Markant.svg", alt: "Markant", scale: "md" },
          {
            src: "/customer/Logo_rossmann_2024.svg",
            alt: "Rossmann",
            scale: "xs",
          },
          {
            src: "/customer/Lufthansa-Logo.wine.png",
            alt: "Lufthansa",
            scale: "xs",
          },
          {
            src: "/customer/Schwarz-Gruppe_Lidl_Kaufland_Logo_9.2019.svg.png",
            alt: "Schwarz Gruppe",
            scale: "lg",
          },
          { src: "/customer/edeka.png", alt: "Edeka", scale: "md" },
          { src: "/customer/images.png", alt: "Partner", scale: "lg" },
        ]}
      />
    </>
  );
}

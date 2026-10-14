import LogoGrid from "../../media/logo-grid";
import IntroBox from "../../ui/intro-box";
import CustomerBand from "./customer-band";
import { kunden } from "./kunden";

// Logos kommen aus kunden.ts (gemeinsam mit CustomerTiles und CustomerQuotes)
const allLogos = kunden.flatMap((k) =>
  k.logo ? [{ src: k.logo.src, alt: k.name, scale: k.logo.scale ?? ("md" as const) }] : [],
);

interface CustomerProps {
  logos?: typeof allLogos;
  type?: "grid" | "band";
}

export default function Customer({
  logos = allLogos,
  type = "band",
}: CustomerProps) {
  if (type === "band") {
    return <CustomerBand logos={logos} />;
  }

  return (
    <>
      <div className="text-center pt-20">
        <IntroBox>
          <IntroBox.PreHeadline>Highlight</IntroBox.PreHeadline>
          <IntroBox.Headline>Unsere Kunden</IntroBox.Headline>
          <IntroBox.Subline>
            Kanzleien und Unternehmen, die mit uns arbeiten
          </IntroBox.Subline>
        </IntroBox>
      </div>
      <LogoGrid logos={logos} />
    </>
  );
}

export { allLogos };

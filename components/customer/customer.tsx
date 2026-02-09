import Typo from "../typo";
import LogoGrid from "../logo-grid";

export default function Customer() {
  return (
    <>
      <div className="text-center pt-20">
        <Typo.H3 className="text-gray-600">Unsere Kunden</Typo.H3>
        <Typo.Paragraph className="text-gray-500 mt-2">
          Das sind die Kunden, die uns vertrauen und mit AI-Workflows ihre
          prozesse automatisiert haben
        </Typo.Paragraph>
      </div>
      <LogoGrid
        logos={[
          { src: "/customer/logo.png", alt: "Client 1" },
          { src: "/customer/logo.png", alt: "Client 2" },
          { src: "/customer/logo.png", alt: "Client 3" },
          { src: "/customer/logo.png", alt: "Client 4" },
          { src: "/customer/logo.png", alt: "Client 5" },
          { src: "/customer/logo.png", alt: "Client 6" },
          { src: "/customer/logo.png", alt: "Client 7" },
          { src: "/customer/logo.png", alt: "Client 8" },
          { src: "/customer/logo.png", alt: "Client 9" },
          { src: "/customer/logo.png", alt: "Client 10" },
        ]}
      />
    </>
  );
}

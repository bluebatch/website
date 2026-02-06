import ConsultationCta, {
  ConsultationCtaBackgroundBox,
  ConsultationCtaImage,
  ConsultationCtaTextColumn,
  ConsultationCtaPreHeadline,
  ConsultationCtaHeadline,
  ConsultationCtaChecklist,
  ConsultationCtaChecklistItem,
  ConsultationCtaButton,
} from "@/components/consultation-cta";

interface ConsultationCtaDefaultProps {
  className?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function ConsultationCtaDefault({
  className = "",
  buttonText = "Jetzt Beratung vereinbaren",
  buttonHref,
}: ConsultationCtaDefaultProps) {
  return (
    <ConsultationCta className={className}>
      {/* Background box - 70% height, sits at bottom */}
      <ConsultationCtaBackgroundBox />
      {/* Text column - left side, 70% height */}
      <ConsultationCtaTextColumn>
        <ConsultationCtaPreHeadline>
          Beratungsgespräch
        </ConsultationCtaPreHeadline>
        <ConsultationCtaHeadline>
          Sichern Sie sich Ihre kostenfreie Erstberatung
        </ConsultationCtaHeadline>
        <ConsultationCtaChecklist>
          <ConsultationCtaChecklistItem>
            Analyse Ihres Bedarfs
          </ConsultationCtaChecklistItem>
          <ConsultationCtaChecklistItem>
            Erste Empfehlungen zu Ihren Workflows
          </ConsultationCtaChecklistItem>
          <ConsultationCtaChecklistItem>
            Transparente Einblicke in unsere Methoden, Technologien & Referenzen
          </ConsultationCtaChecklistItem>
        </ConsultationCtaChecklist>
        <ConsultationCtaButton href={buttonHref}>
          {buttonText}
        </ConsultationCtaButton>
      </ConsultationCtaTextColumn>
      {/* Image - 50% width, right side, 100% height */}
      <ConsultationCtaImage src="/images/mh_portrait.png" alt="Berater" />
    </ConsultationCta>
  );
}

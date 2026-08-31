"use client";

import { useState } from "react";
import ContentWrapper from "@/components/layout/content-wrapper";
import IntroBox from "@/components/ui/intro-box";
import Typo from "@/components/ui/typo";
import Hiring, {
  HiringApply,
  HiringDescription,
  HiringLocation,
  HiringPosition,
  HiringRequirement,
  HiringRequirements,
  HiringTag,
  HiringTags,
  HiringTitle,
  HiringType,
} from "@/components/hiring/hiring";
import JobApplicationForm from "@/components/hiring/job-application-form";
import { INITIATIVE_APPLICATION, jobs } from "@/lib/career-jobs";

// Stellenliste und Bewerbungsformular hängen zusammen: der Klick auf eine
// Anzeige wählt die Stelle im Formular vor und scrollt dorthin. Deshalb sitzen
// beide Sektionen in einer Client-Komponente statt getrennt in der Seite.
export default function CareerOpenings() {
  const [position, setPosition] = useState(INITIATIVE_APPLICATION);

  const applyTo = (jobTitle: string) => {
    setPosition(jobTitle);
    document
      .getElementById("bewerbung")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <ContentWrapper colorScheme="gray-light" id="stellen">
        <IntroBox>
          <IntroBox.PreHeadline>Offene Stellen</IntroBox.PreHeadline>
          <IntroBox.Headline>Wo wir gerade Verstärkung suchen</IntroBox.Headline>
          <IntroBox.Subline>
            Alle Stellen sind remote möglich, mit Büro-Option. Findest du deine
            Rolle nicht dabei, bewirb dich initiativ.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12">
          <Hiring>
            {jobs.map((job) => (
              <HiringPosition key={job.id} className="scroll-mt-32">
                <HiringTitle>{job.title}</HiringTitle>
                <HiringType>{job.type}</HiringType>
                <HiringLocation>{job.location}</HiringLocation>
                <HiringDescription>{job.description}</HiringDescription>
                <HiringRequirements>
                  {job.requirements.map((requirement) => (
                    <HiringRequirement key={requirement}>
                      {requirement}
                    </HiringRequirement>
                  ))}
                </HiringRequirements>
                <HiringTags>
                  {job.tags.map((tag) => (
                    <HiringTag key={tag}>{tag}</HiringTag>
                  ))}
                </HiringTags>
                <HiringApply onClick={() => applyTo(job.title)}>
                  Auf {job.title} bewerben
                </HiringApply>
              </HiringPosition>
            ))}
          </Hiring>
        </div>
      </ContentWrapper>

      <ContentWrapper id="bewerbung" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Bewerbung</IntroBox.PreHeadline>
          <IntroBox.Headline>Ein Formular, mehr nicht</IntroBox.Headline>
          <IntroBox.Subline>
            Kein Bewerbungsportal, kein Anschreiben nach Vorlage. Name, Mail,
            Stelle und ein paar Sätze zu dir reichen uns für den ersten Schritt.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
          <JobApplicationForm
            position={position}
            onPositionChange={setPosition}
          />
          <Typo.Paragraph className="mt-6 text-xs text-gray-500">
            Deine Angaben landen in unserem CRM und werden ausschließlich für
            das Bewerbungsverfahren genutzt. Details stehen in der
            Datenschutzerklärung.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>
    </>
  );
}

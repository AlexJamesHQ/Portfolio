import type { ReactNode } from "react";
import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { SplitText } from "@/components/ui/split-text";

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-16 sm:px-10 sm:pt-100 sm:pb-20">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            <SplitText
              text="My recent work"
              tag="span"
              delay={35}
              duration={1}
              splitType="chars"
              effect="rise"
              hoverEffect="lift"
            />
          </h1>
          <div className="max-w-[33ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
            <SplitText
              text="Experiments, collaborations, and projects I’m especially proud to have shipped."
              tag="p"
              delay={15}
              duration={1.1}
              splitType="words"
              effect="rise"
              hoverEffect="lift"
            />
          </div>
        </FadeIn>
      </section>
      <Projects />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

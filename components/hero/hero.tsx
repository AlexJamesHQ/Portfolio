import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";
import { SplitText } from "@/components/ui/split-text";

const PORTRAIT_SRC = "/alex.webp";
const PORTRAIT_HOVER_SRC = "/alex_wave.webp";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <div className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              <SplitText
                text="Hey 👋, I’m Alex James"
                tag="p"
                delay={30}
                duration={0.9}
                splitType="chars"
                effect="rise"
                hoverEffect="lift"
              />
            </div>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block">
                <SplitText
                  text="Coder & Gamer"
                  tag="span"
                  delay={35}
                  duration={1}
                  splitType="chars"
                  effect="rise"
                  hoverEffect="lift"
                />
              </span>
              <span className="block">
                <SplitText
                  text="Digital Craftsman"
                  tag="span"
                  delay={40}
                  duration={1}
                  splitType="chars"
                  effect="rise"
                  hoverEffect="lift"
                />
              </span>
            </h1>

            <div className="max-w-[34ch] text-[20px] sm:text-[22px] leading-[1.4] tracking-tight text-foreground/70">
              <SplitText
                text="An ordinary coder and gamer boy building interfaces and experiences that feel calm, considered, and quietly fast."
                tag="p"
                delay={15}
                duration={1.1}
                splitType="words"
                effect="rise"
                hoverEffect="lift"
              />
            </div>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="Alex James portrait"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}

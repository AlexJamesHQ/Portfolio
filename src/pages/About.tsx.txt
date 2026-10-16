import type { ReactNode } from "react";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { SplitText } from "@/components/ui/split-text";

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>
      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <div className="flex flex-col gap-2">
              <div className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
                <SplitText
                  text="Hello! I’m Alex James."
                  tag="h1"
                  delay={35}
                  duration={1}
                  splitType="chars"
                  effect="rise"
                  hoverEffect="lift"
                />
              </div>
              <div className="text-[18px] sm:text-[20px] font-medium tracking-tight text-foreground/90 break-words">
                <SplitText
                  text="普通のコーダーとゲーマーの男の子です"
                  tag="p"
                  delay={45}
                  duration={1.1}
                  splitType="chars"
                  effect="rise"
                  hoverEffect="lift"
                />
              </div>
            </div>

            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                Just an ordinary coder and gamer at heart, focused on crafting clean interfaces, interactive experiences, and fast software.
              </p>
              <p>
                When not coding, I am usually gaming, experimenting with WebGL shaders, or exploring modern frontend architectures.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

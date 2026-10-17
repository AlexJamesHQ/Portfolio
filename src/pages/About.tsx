import type { ReactNode } from "react";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { SplitText } from "@/components/ui/split-text";
import { Lanyard } from "@/components/ui/lanyard";

const USER_PHOTO_URL = "https://github.com/AlexJamesHQ.png";

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {/* 3D Hanging Lanyard Overlay - in original position at top, extended canvas so pulling down overlaps text without clipping */}
      <section className="relative w-full flex flex-col items-center pt-2 sm:pt-6 overflow-visible z-30">
        <div style={{ width: "100%", height: "900px" }} className="max-w-[380px] sm:max-w-[440px] pointer-events-none -mb-[420px]">
          <Lanyard
            frontImage={USER_PHOTO_URL}
            imageFit="cover"
            cardColor="#ffffff"
            orientation="portrait"
            finish="metallic"
            cornerRadius={0.3}
            size={0.46}
            anchor="center"
            strapLength={0.45}
            strapColor="#111111"
            strapWidth={0.65}
            metal="silver"
            gravity={1}
            damping={0.5}
            elasticity={0.5}
            breeze={0.5}
            interactive={true}
            intro={true}
            className="w-full h-full bg-transparent"
          />
        </div>
      </section>

      {/* Main bio section positioned to overlap naturally beneath the hanging lanyard */}
      <section className="relative z-10 mx-auto w-full max-w-160 px-6 -mt-20 sm:-mt-28 pb-16 sm:px-10 sm:pb-24">
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

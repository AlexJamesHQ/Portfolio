import { Mail, Github, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }): ReactNode {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function ContactCard(): ReactNode {
  return (
    <section className="mx-auto my-10 w-full max-w-275 px-4 sm:my-20 sm:px-10">
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-3xl sm:rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.3rem] sm:rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
              style={{
                WebkitMaskImage: CARD_FADE_MASK,
                maskImage: CARD_FADE_MASK,
              }}
            >
              <ShaderFlow scale={3} brightness={3} />
            </div>

            <div className="relative grid gap-6 p-4 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-4 sm:gap-5">
                <h2 className="font-serif text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-medium leading-[1.05] tracking-tight text-foreground">
                  Let&rsquo;s connect
                </h2>
                <p className="max-w-[29ch] text-[16px] sm:text-[22px] leading-[1.4] tracking-tight text-foreground/65 mb-1 sm:mb-2">
                  I&rsquo;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your visions. Just reach out!
                </p>
                <ContactCardCtas />
              </div>

              <div className="border-foreground/8 flex flex-col items-center justify-center gap-5 sm:gap-6 rounded-[1.1rem] border bg-background/80 p-4 sm:p-8 backdrop-blur-xs">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 opacity-95 max-w-full">
                  <SocialIcon
                    href="https://github.com/AlexJamesHQ"
                    label="GitHub"
                    avatarSrc="https://github.com/AlexJamesHQ.png"
                    lucideIcon={Github}
                  />
                  <SocialIcon
                    href="https://www.facebook.com/share/1HbEAfD6rY/"
                    label="Facebook"
                    customIcon={<FacebookIcon className="h-4 w-4" />}
                  />
                  <SocialIcon
                    href="https://www.instagram.com/alex.james.dev?vrfl=dDg5cG5nZTB6aDBx"
                    label="Instagram"
                    lucideIcon={Instagram}
                  />
                  <SocialIcon
                    href="mailto:alexjames7830@gmail.com"
                    label="Email"
                    lucideIcon={Mail}
                  />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-[13px] tracking-tight text-foreground/85 font-medium">
                    Lead Developer Alex James
                  </p>
                  <p className="text-[11px] tracking-tight text-foreground/50 font-mono">
                    普通のコーダーとゲーマーの男の子です
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  lucideIcon: LucideIcon,
  customIcon,
  avatarSrc,
}: {
  href: string;
  label: string;
  lucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  customIcon?: ReactNode;
  avatarSrc?: string;
}): ReactNode {
  const [imgError, setImgError] = useState(false);
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      className="border-foreground/8 hover:border-foreground/20 focus-ring inline-flex h-9.5 w-9.5 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border bg-background text-foreground/75 transition-all hover:text-foreground hover:scale-105 overflow-hidden shadow-xs"
      {...props}
    >
      {avatarSrc && !imgError ? (
        <img
          src={avatarSrc}
          alt={label}
          width={24}
          height={24}
          className="h-5.5 w-5.5 sm:h-6 sm:w-6 rounded-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : LucideIcon ? (
        <LucideIcon className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
      ) : customIcon ? (
        customIcon
      ) : null}
    </Link>
  );
}

import { Mail, Github, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

function TelegramIcon({ className = "h-4 w-4" }: { className?: string }): ReactNode {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

export function ContactCard(): ReactNode {
  return (
    <section className="mx-auto my-12 w-full max-w-275 px-6 sm:my-20 sm:px-10">
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.6rem]">
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

            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                  Let&rsquo;s connect
                </h2>
                <p className="max-w-[29ch] text-[18px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px] mb-2">
                  I&rsquo;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your visions. Just reach out!
                </p>
                <ContactCardCtas />
              </div>

              <div className="border-foreground/8 flex flex-col items-center justify-center gap-6 rounded-[1.1rem] border bg-background p-6 sm:p-8">
                <div className="flex items-center gap-3 opacity-90">
                  <SocialIcon
                    href="https://github.com/AlexJamesHQ"
                    label="GitHub"
                    avatarSrc="https://github.com/AlexJamesHQ.png"
                    lucideIcon={Github}
                  />
                  <SocialIcon
                    href="https://github.com/cognitiveshadows03"
                    label="Team (Cognitive Shadows)"
                    avatarSrc="https://github.com/cognitiveshadows03.png"
                    lucideIcon={Users}
                  />
                  <SocialIcon
                    href="https://github.com/DavidHDev"
                    label="David H Dev"
                    avatarSrc="https://github.com/DavidHDev.png"
                    lucideIcon={Github}
                  />
                  <SocialIcon
                    href="mailto:alexjames7830@gmail.com"
                    label="Email"
                    lucideIcon={Mail}
                  />
                  <SocialIcon
                    href="https://t.me/ALEX_JAMES_DEV"
                    label="Telegram Channel"
                    customIcon={<TelegramIcon className="h-4 w-4" />}
                  />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-[13px] tracking-tight text-foreground/80 font-medium">
                    Lead Developer Alex James
                  </p>
                  <p className="text-[11px] tracking-tight text-foreground/45 font-mono">
                    普通のコーダーとゲーマーの男の子です
                  </p>
                  <p className="text-[12px] tracking-tight text-foreground/50 mt-0.5">
                    Team &bull; Cognitive Shadows
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
      className="border-foreground/8 hover:border-foreground/20 focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-background text-foreground/75 transition-all hover:text-foreground hover:scale-105 overflow-hidden shadow-xs"
      {...props}
    >
      {avatarSrc && !imgError ? (
        <img
          src={avatarSrc}
          alt={label}
          width={24}
          height={24}
          className="h-6 w-6 rounded-full object-cover"
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

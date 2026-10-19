"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

const EMAIL = "alexjames7830@gmail.com";

export function ContactButton(): ReactNode {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = async (): Promise<void> => {
    if (!open) {
      setOpen(true);
    }
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      } catch {}
      document.body.removeChild(ta);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={copied ? "Email copied" : open ? `Copy ${EMAIL}` : "Show email"}
      style={{ borderRadius: 12 }}
      className="focus-ring relative inline-flex h-11 cursor-pointer items-center justify-center bg-foreground px-5 text-sm font-medium text-background transition-all duration-300 select-none hover:opacity-90 active:scale-95"
    >
      <span className="relative inline-flex items-center gap-2 text-background whitespace-nowrap">
        {open ? (
          <>
            <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-background">
              {copied ? <Check className="h-4 w-4 text-background" /> : <Copy className="h-4 w-4 text-background" />}
            </span>
            <span className="tabular-nums text-background font-mono text-xs sm:text-sm">{EMAIL}</span>
          </>
        ) : (
          <>
            <Mail className="h-4 w-4 shrink-0 text-background" aria-hidden="true" />
            <span className="text-background">Contact</span>
          </>
        )}
      </span>
    </button>
  );
}

"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

const EMAIL = "alexjames7830@gmail.com";
const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactButton(): ReactNode {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePress = async (): Promise<void> => {
    setOpen(true);
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
    <motion.button
      type="button"
      layout
      onClick={handlePress}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      aria-label={
        copied ? "Email copied" : open ? `Copy ${EMAIL}` : "Show email"
      }
      transition={{ layout: { duration: 0.25, ease: EASE } }}
      style={{ borderRadius: 12 }}
      className="focus-ring relative inline-flex h-11 cursor-pointer items-center justify-center bg-foreground px-5 text-sm font-medium text-background select-none"
    >
      <motion.span
        layout="position"
        className="relative inline-flex items-center text-background"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {open ? (
            <motion.span
              key="email"
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: EASE }}
              className="inline-flex items-center gap-2 whitespace-nowrap text-background"
            >
              <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center text-background">
                <AnimatePresence initial={false} mode="wait">
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.1, ease: EASE }}
                      className="inline-flex text-background"
                    >
                      <Check className="h-4 w-4 text-background" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.1, ease: EASE }}
                      className="inline-flex text-background"
                    >
                      <Copy className="h-4 w-4 text-background" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              <span className="tabular-nums text-background font-mono text-xs sm:text-sm">{EMAIL}</span>
            </motion.span>
          ) : (
            <motion.span
              key="contact"
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: EASE }}
              className="inline-flex items-center gap-2 whitespace-nowrap text-background"
            >
              <Mail className="h-4 w-4 shrink-0 text-background" aria-hidden="true" />
              <span className="text-background">Contact</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.button>
  );
}

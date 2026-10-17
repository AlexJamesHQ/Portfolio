'use client';

import { type ReactNode } from 'react';
import TearTicket from '@/components/ui/tear-ticket';
import { Scissors } from 'lucide-react';

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }): ReactNode {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.7C8.02 10.92 8.91 12.09 9.03 12.25C9.16 12.42 10.74 14.86 13.17 15.91C13.75 16.16 14.2 16.31 14.55 16.42C15.13 16.61 15.66 16.58 16.08 16.52C16.55 16.45 17.52 15.93 17.72 15.36C17.92 14.79 17.92 14.3 17.86 14.2C17.8 14.1 17.63 14.04 17.38 13.91C17.13 13.79 15.9 13.18 15.67 13.1C15.44 13.01 15.28 12.97 15.11 13.22C14.95 13.47 14.48 14.04 14.34 14.2C14.2 14.36 14.06 14.38 13.81 14.26C13.56 14.13 12.76 13.87 11.81 13.02C11.07 12.36 10.57 11.55 10.42 11.3C10.28 11.05 10.41 10.92 10.53 10.8C10.64 10.69 10.78 10.51 10.91 10.37C11.03 10.22 11.07 10.12 11.15 9.95C11.23 9.79 11.19 9.64 11.13 9.52C11.07 9.4 10.6 8.24 10.4 7.77C10.21 7.31 10.02 7.37 9.87 7.36C9.73 7.35 9.57 7.34 9.53 7.34Z" />
    </svg>
  );
}

export function CoffeeTearTicket(): ReactNode {
  const handleTear = () => {
    const url = 'https://wa.me/8801977547920?text=Hello%20Alex%20James!%20I%20would%20love%20to%20connect%20with%20you.';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-start w-full">
      <TearTicket
        image="/buymeacoffee.svg"
        imageAlt="Buy Me a Coffee"
        imageRadius={0}
        scrim={false}
        width={420}
        height={180}
        stubSize={135}
        background="#FFDD00"
        stubBackground="#FFF275"
        color="#000000"
        borderColor="rgba(0, 0, 0, 0.25)"
        borderWidth={1.5}
        radius={16}
        holes={10}
        holeSize={6}
        notch={4}
        roughness={0.4}
        tiltMax={6}
        rotate={0}
        tearAngle={28}
        stretch={26}
        resistance={0.4}
        onTear={handleTear}
        className="w-full max-w-[420px]"
        stub={
          <div className="flex flex-col items-center justify-between h-full py-3 select-none text-center">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 text-[10px] font-mono tracking-wider font-bold text-black/70">
                <Scissors className="h-3.5 w-3.5 text-black" />
                <span>✂ TEAR HERE</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 my-auto">
              <div className="p-2.5 rounded-full bg-[#25D366] text-white shadow-md">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-bold font-mono tracking-tight text-black mt-1">
                +880 1977-547920
              </span>
            </div>

            <span className="text-[9px] font-mono tracking-widest text-black/60 uppercase font-semibold">
              PULL TO CONNECT
            </span>
          </div>
        }
      >
        <div className="w-full h-full" />
      </TearTicket>
    </div>
  );
}

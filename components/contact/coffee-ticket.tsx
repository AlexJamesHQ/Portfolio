'use client';

import { type ReactNode } from 'react';
import TearTicket from '@/components/ui/tear-ticket';
import { Coffee, Scissors } from 'lucide-react';

export function CoffeeTearTicket(): ReactNode {
  const handleTear = () => {
    window.open('https://buymeacoffee.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-center sm:items-start w-full">
      <TearTicket
        image="/buymeacoffee.svg"
        imageAlt="Buy Me a Coffee"
        imageRadius={0}
        scrim={false}
        width={300}
        height={135}
        stubSize={95}
        background="#FFDD00"
        stubBackground="#FFF275"
        color="#000000"
        borderColor="rgba(0, 0, 0, 0.25)"
        borderWidth={1.5}
        radius={14}
        holes={9}
        holeSize={5.5}
        notch={3.5}
        roughness={0.4}
        tiltMax={6}
        rotate={0}
        tearAngle={28}
        stretch={24}
        resistance={0.4}
        onTear={handleTear}
        className="w-full max-w-[300px]"
        stub={
          <div className="flex flex-col items-center justify-between h-full w-full py-2 select-none text-center">
            <div className="flex items-center gap-1 text-[9px] font-mono tracking-wider font-bold text-black/75">
              <Scissors className="h-3.5 w-3.5 text-black" />
              <span>TEAR HERE</span>
            </div>

            <div className="flex flex-col items-center gap-1 my-auto">
              <div className="p-1.5 rounded-full bg-black/10 text-black">
                <Coffee className="h-4.5 w-4.5" />
              </div>
              <span className="text-[11px] font-black font-mono tracking-wider text-black mt-0.5">
                COFFEE
              </span>
              <span className="text-[7.5px] font-mono tracking-widest text-black/60 uppercase font-semibold">
                ★ PASS ★
              </span>
            </div>

            <span className="text-[8px] font-mono tracking-widest text-black/65 uppercase font-bold">
              PULL TO TEAR
            </span>
          </div>
        }
      >
        <div className="w-full h-full" />
      </TearTicket>
    </div>
  );
}

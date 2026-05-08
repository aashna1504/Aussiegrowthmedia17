import React from "react";

const ITEMS = [
  { text: "BRANDING", star: true },
  { text: "MARKETING", star: true },
  { text: "DESIGN", star: true },
  { text: "GROWTH", star: true },
  { text: "LEAD GENERATION", star: true },
  { text: "WEB DEVELOPMENT", star: true },
];

// Duplicate the items 4 times to ensure the track is wider than any ultra-wide monitor
const TRACK = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-zinc-950 border-y border-zinc-900 py-8 sm:py-10 select-none relative flex">
      {/* Inline style for the custom keyframes to make it plug-and-play */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll 50s linear infinite;
        }
      `}</style>

      {/* Edge Fading Masks for a luxury vignette effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 z-10 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 z-10 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none"></div>

      {/* The scrolling track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {TRACK.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-8 sm:gap-12 pr-8 sm:pr-12"
          >
            <span className="text-xl sm:text-xl md:text-4xl font-bold tracking-[0.25em] text-orange-500 uppercase whitespace-nowrap transition-colors duration-300 hover:text-white cursor-default">
              {item.text}
            </span>
            {item.star && (
              <span className="text-white text-4xl sm:text-3xl md:text-4xl leading-none font-bold animate-pulse">
                ✦
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

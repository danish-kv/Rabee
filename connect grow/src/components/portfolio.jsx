import React from "react";

const PortfolioStrip = ({ items }) => {
  const images = (Array.isArray(items) ? items : [])
    .map((it) => (typeof it === "string" ? it : it?.image))
    .filter(Boolean);

  const placeholder =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop stop-color="#4F46E5" offset="0"/>
            <stop stop-color="#EC4899" offset="1"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
      </svg>
    `);

  const base = images.length > 0 ? images : [placeholder, placeholder, placeholder];
  const loop = [...base, ...base, ...base]; // triple for smoother infinite loop

  const [paused, setPaused] = React.useState(false);
  const [clickedPause, setClickedPause] = React.useState(false);

  const onEnter = () => setPaused(true);
  const onLeave = () => {
    if (!clickedPause) setPaused(false);
  };
  const togglePause = () => {
    setClickedPause((p) => {
      const next = !p;
      setPaused(next);
      return next;
    });
  };

  return (
    <div
      className="group relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={onEnter} // mobile hover equivalent
      onTouchEnd={onLeave}
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20"
        onClick={togglePause}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            togglePause();
          }
        }}
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          cursor: "pointer",
        }}
        aria-label="Portfolio image reel (click to pause/resume)"
        aria-pressed={paused}
      >
        {/* Scrolling Track */}
        <div
          className="marquee flex"
          style={{
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {loop.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[32vw] xl:w-[28vw]
                         h-[480px] sm:h-[440px] md:h-[420px] lg:h-[400px] xl:h-[420px]
                         mr-3 sm:mr-4 md:mr-6 flex-shrink-0 overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.02]"
                draggable="false"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Style block for animation and responsiveness */}
      <style>{`
        @keyframes marqueeScrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Base slow scroll */
        .marquee {
          width: max-content;
          animation: marqueeScrollX 55s linear infinite; /* ⬅️ slower */
        }

        /* Even slower on big screens for elegance */
        @media (min-width: 1024px) {
          .marquee { animation-duration: 70s; }
        }

        /* Slightly faster on mobile (for energy) */
        @media (max-width: 640px) {
          .marquee { animation-duration: 45s; }
        }

        /* Responsive image sizing */
        @media (min-width: 640px) {
          .marquee > div { width: 70vw; max-height: 480px; }
        }
        @media (min-width: 768px) {
          .marquee > div { width: 50vw; max-height: 520px; }
        }
        @media (min-width: 1280px) {
          .marquee > div { width: 28vw; max-height: 600px; }
        }
      `}</style>
    </div>
  );
};

export default PortfolioStrip;

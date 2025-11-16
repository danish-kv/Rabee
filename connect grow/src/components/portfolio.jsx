import React from "react";

const PortfolioStrip = ({ items }) => {
  // Collect only valid image URLs
  const images = (Array.isArray(items) ? items : [])
    .map((it) => it?.image)
    .filter(Boolean);

  // Lightweight neutral SVG placeholder (keeps layout pretty even with no data)
  const placeholder =
    'data:image/svg+xml;utf8,' +
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

  const base = images.length > 0 ? images : [placeholder, placeholder, placeholder, placeholder, placeholder, placeholder];

  // Duplicate for seamless loop
  const loop = [...base, ...base];

  const [paused, setPaused] = React.useState(false);
  const [clickedPause, setClickedPause] = React.useState(false);

  const onEnter = () => setPaused(true);
  const onLeave = () => { if (!clickedPause) setPaused(false); };
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
    >
      {/* Edge fade mask for premium look */}
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20"
        onClick={togglePause}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            togglePause();
          }
        }}
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          cursor: 'pointer',
        }}
        aria-label="Portfolio image reel (click to pause/resume)"
        aria-pressed={paused}
      >
        {/* Scrolling Track */}
        <div
          className="marquee flex"
          style={{
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {loop.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-[70vw] sm:w-[48vw] md:w-[36vw] lg:w-[28vw] xl:w-[24vw] h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] xl:h-[400px] mr-4 sm:mr-5 md:mr-6 flex-shrink-0 overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt=""
                // className="absolute inset-0 w-full h-full object- transform scale-100 transition-transform duration-500 group-hover:scale-[1.02]"
                className="absolute inset-0 w-full h-full object-contain bg-black transform scale-100 transition-transform duration-500 group-hover:scale-[1.02]"

                draggable="false"
                loading="lazy"
              />
              {/* Subtle overlay to unify look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Local styles */}
      <style>{`
  @keyframes marqueeScrollX {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee { width: max-content; animation: marqueeScrollX 30s linear infinite; }
  @media (min-width: 640px) {
    .marquee > div { width: 48vw; max-height: 460px; }
  }
  @media (min-width: 768px) {
    .marquee > div { width: 36vw; max-height: 520px; }
  }
  @media (min-width: 1024px) {
    .marquee { animation-duration: 34s; }
    .marquee > div { width: 28vw; max-height: 560px; }
  }
  @media (min-width: 1280px) {
    .marquee > div { width: 24vw; max-height: 600px; }
  }
`}</style>
    </div>
  );
};

export default PortfolioStrip;
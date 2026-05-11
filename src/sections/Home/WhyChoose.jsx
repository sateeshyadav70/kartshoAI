import { useRef } from "react";
import useSectionVisibility from "../../hooks/useSectionVisibility";

const reasons = [
  {
    index: "01",
    stat: "24/7",
    title: "Always Available",
    desc: "Your business stays responsive after hours, on weekends, and during peak load.",
  },
  {
    index: "02",
    stat: "SOC2",
    title: "Enterprise Security",
    desc: "Built with compliance-minded processes, encrypted handoffs, and reliable data flow.",
  },
  {
    index: "03",
    stat: "FAST",
    title: "Rapid Delivery",
    desc: "Launch quickly with battle-tested components, clear scope, and less waiting around.",
  },
  {
    index: "04",
    stat: "VOICE",
    title: "AI Conversation",
    desc: "Natural, context-aware dialogue that qualifies leads and routes them without friction.",
  },
  {
    index: "05",
    stat: "MVP",
    title: "Conversion Focused",
    desc: "Not just pretty screens. We build systems that are designed to move the business forward.",
  },
];

const WhyChoose = () => {
  const sectionRef = useRef(null);
  const isVisible = useSectionVisibility(sectionRef, {
    rootMargin: "180px 0px",
    threshold: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-12"
    >

      {/* 🔥 BLACK + CYAN/TEAL BACKGROUND (animation friendly) */}
      <div className="absolute inset-0 z-0">

        {/* base */}
        <div className="absolute inset-0 bg-black" />

        {/* cyan glow top */}
        <div className="absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.18),transparent_68%)]" />

        {/* cyan glow bottom */}
        <div className="absolute bottom-[-120px] right-[-100px] h-[400px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_68%)]" />

        {/* subtle radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />

        {/* VERY LIGHT overlay (important for animation visibility) */}
        <div className="absolute inset-0 bg-black/40" />

      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        <div
          className={`mb-14 text-center transition-transform transition-opacity duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-teal-300/60">
            Why Kartsho
          </p>
          <p className="mt-4 text-3xl font-bold tracking-wide uppercase text-white md:text-5xl">
            Why Choose Kartsho
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Premium systems, clean execution, and the kind of automation that feels effortless once it is in place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item) => (
          <article
            key={item.index}
            className={`why-card frame-card group relative min-h-[520px] overflow-hidden ${
              isVisible ? "why-card--visible" : ""
            }`}
              style={{
                transitionDelay: `${140 + Number(item.index) * 90}ms`,
                ["--card-x"]: item.index === "01"
                  ? "-26px"
                  : item.index === "02"
                    ? "12px"
                    : item.index === "03"
                      ? "-14px"
                      : item.index === "04"
                        ? "18px"
                        : "-10px",
                ["--card-y"]: item.index === "01"
                  ? "42px"
                  : item.index === "02"
                    ? "34px"
                    : item.index === "03"
                      ? "48px"
                      : item.index === "04"
                        ? "28px"
                        : "40px",
                ["--card-r"]: item.index === "01"
                  ? "-7deg"
                  : item.index === "02"
                    ? "6deg"
                    : item.index === "03"
                      ? "-5deg"
                      : item.index === "04"
                        ? "7deg"
                        : "-4deg",
              }}
            >

              <div className="frame-card__inner absolute inset-[2px] flex flex-col justify-between 
                bg-[linear-gradient(180deg,rgba(10,10,10,0.9)_0%,rgba(5,5,5,0.9)_60%,rgba(2,2,2,0.9)_100%)] 
                px-6 py-6 md:px-7 md:py-7">

                {/* TOP */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/40">
                      CARD {item.index}
                    </p>
                    <div className="mt-3 h-px w-20 bg-teal-400/40" />
                  </div>

                  <span className="rounded-full border border-teal-400/20 bg-teal-500/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-teal-300/70">
                    Premium
                  </span>
                </div>

                {/* CENTER */}
                <div className="relative flex flex-1 items-center justify-center">
                  <div className="absolute inset-x-0 top-10 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.12),transparent_70%)]" />
                  
                  <div className="relative text-center">
                    <p className="select-none text-[4.75rem] font-black leading-none tracking-[0.18em] text-white md:text-[5.5rem]">
                      {item.stat}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.5em] text-teal-300/60">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="space-y-4">
                  <div className="h-px w-full bg-white/10" />

                  <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.3em] text-white/40">
                    <span>Why it matters</span>
                    <span>#{item.index}</span>
                  </div>

                  <p className="max-w-sm text-sm leading-6 text-white/70">
                    {item.desc}
                  </p>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>

      {/* 🔥 CARD STYLE */}
      <style>
        {`
          .why-card {
            opacity: 0;
            transform: translate3d(var(--card-x), var(--card-y), 0) rotate(var(--card-r)) scale(0.88);
            transform-origin: center top;
            transition:
              transform 900ms cubic-bezier(0.16, 1, 0.3, 1),
              opacity 700ms ease;
            will-change: transform, opacity;
          }

          .why-card--visible {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }

          .frame-card {
            position: relative;
            clip-path: polygon(4% 0, 96% 0, 100% 4%, 100% 96%, 96% 100%, 4% 100%, 0 96%, 0 4%);
            background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
            box-shadow: 0 0 0 1px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.72);
            transition: transform 0.35s ease, border-color 0.35s ease;
          }

          .frame-card::before {
            content: "";
            position: absolute;
            inset: 1px;
            clip-path: inherit;
            border: 1px solid rgba(255,255,255,0.08);
          }

          .frame-card:hover {
            transform: translate3d(0, -6px, 0) scale(1.015);
          }

          .frame-card__inner {
            clip-path: inherit;
          }

          .why-card--visible .frame-card__inner::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              120deg,
              transparent 0%,
              rgba(34, 211, 238, 0.08) 48%,
              transparent 100%
            );
            transform: translateX(-120%);
            animation: sheen 1.5s ease-out 1;
            pointer-events: none;
          }

          @keyframes sheen {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(120%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .why-card {
              opacity: 1;
              transform: none;
              transition: none;
            }

            .why-card--visible .frame-card__inner::after {
              animation: none;
            }
          }
        `}
      </style>

    </section>
  );
};

export default WhyChoose;



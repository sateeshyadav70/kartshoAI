import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2023",
    title: "First AI outbound demos",
    desc: "First booked meetings and early validation",
    outcome: "→ First meetings booked",
  },
  {
    year: "2024",
    title: "Early MVPs launched",
    desc: "First paid pilots and real users",
    outcome: "→ First paid pilot ($3k+ MRR)",
  },
  {
    year: "2024",
    title: "Vertical specialization",
    desc: "Real Estate, Automotive, Restaurants, Clinics",
    outcome: "→ Focus = better conversions",
  },
  {
    year: "2025",
    title: "Kartsho operating system shaped",
    desc: "The enterprise structure expanded across marketing, legal tech, education, and commerce",
    outcome: "→ Multi-venture foundation",
  },
  {
    year: "2026",
    title: "Kartsho Enterprises launched",
    desc: "Public brand and ecosystem brought together under one company",
    outcome: "→ 6+ active ventures",
  },
];

export default function JourneySection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 🔥 fade animation
      gsap.from(".timelineItem", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // 🚀 PROGRESS LINE (APPLE STYLE)
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      // 🎯 ACTIVE MILESTONE TRACKING
      gsap.utils.toArray(".timelineItem").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020202] text-white py-32 px-6 md:px-16 overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-5xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Journey Milestones
          </h2>
          <p className="text-gray-400">
            From experiments → validation → scale
          </p>
        </div>

        {/* 🧠 TIMELINE */}
        <div className="relative pl-10">

          {/* ⚡ BASE LINE */}
          <div className="absolute left-2 top-0 w-[2px] h-full bg-white/10" />

          {/* ⚡ PROGRESS LINE */}
          <div
            ref={lineRef}
            className="absolute left-2 top-0 w-[2px] h-0 bg-gradient-to-b from-teal-500 to-teal-500"
          />

          <div className="space-y-16">

            {milestones.map((item, i) => {
              const isActive = i === activeIndex;

              return (
                <div key={i} className="timelineItem relative">

                  {/* 🔵 DOT */}
                  <div
                    className={`absolute -left-[14px] top-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-7 h-7 bg-teal-500 shadow-[0_0_25px_rgba(34,211,238,1)] scale-125"
                        : "w-5 h-5 bg-white/30"
                    }`}
                  />

                  {/* 💎 CARD */}
                  <div className="p-[1px] rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500">
                    <div
                      className={`bg-black/70 backdrop-blur-xl rounded-xl p-6 border transition ${
                        isActive
                          ? "border-teal-500/40 scale-[1.03]"
                          : "border-white/10"
                      }`}
                    >

                      {/* YEAR */}
                      <p className="text-teal-400 text-sm mb-2">
                        {item.year}
                      </p>

                      {/* TITLE */}
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>

                      {/* DESC */}
                      <p className="text-gray-400 text-sm mb-3">
                        {item.desc}
                      </p>

                      {/* 🧠 OUTCOME */}
                      <p className="text-teal-400 text-sm mb-4">
                        {item.outcome}
                      </p>

                      {/* 📖 READ HISTORY */}
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === i ? null : i)
                        }
                        className="text-xs text-gray-400 hover:text-teal-400 transition"
                      >
                        {openIndex === i ? "Hide details ↑" : "Read history ↓"}
                      </button>

                      {/* 🔥 EXPANDED CONTENT */}
                      {openIndex === i && (
                        <div className="mt-4 text-sm text-gray-400 border-t border-white/10 pt-4">
                          This phase focused on execution, testing, and refining
                          systems that actually convert—not just demos.
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}



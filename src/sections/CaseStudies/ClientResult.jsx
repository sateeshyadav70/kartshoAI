import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  { value: "100%", label: "delivery track record with measurable ROI" },
  { value: "2–4mo", label: "average payback after go-live" },
  { value: "10×", label: "capacity gains without proportional headcount" },
  { value: "99.9%", label: "uptime targets; <2s response times" },
];

export default function CaseStudies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 fade reveal
      gsap.from(".fadeUp", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // ⚡ counter effect (simple illusion)
      gsap.from(".stat-number", {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        stagger: 0.2,
        ease: "power1.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-[#050505] text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-teal-600/20 blur-[160px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[160px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* 🔥 LEFT SIDE (STORY) */}
        <div className="space-y-6 fadeUp">
          <p className="text-teal-400 text-sm tracking-widest">
            CASE STUDIES & RESULTS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            From pilot →{" "}
            <span className="text-teal-400">production revenue engine</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We build AI Voice Agents that pick up in seconds and MVP/Micro-SaaS
            that prove what works fast.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Pilots start lean; full programs scale past{" "}
            <span className="text-teal-400 font-semibold">$100k+</span> when we
            take a business line from manual to automated — 24/7, instrumented,
            and revenue-accountable.
          </p>

          {/* 🔥 subtle divider */}
          <div className="h-[2px] w-32 bg-gradient-to-r from-teal-500 to-teal-500 mt-6" />
        </div>

        {/* 🔥 RIGHT SIDE (STATS GRID) */}
        <div className="grid sm:grid-cols-2 gap-6">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="group p-[1px] rounded-xl bg-gradient-to-r from-teal-200 via-cyan-200 to-teal-500"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center">

                {/* NUMBER */}
                <h3 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2 stat-number">
                  {stat.value}
                </h3>

                {/* LABEL */}
                <p className="text-gray-900 text-sm leading-relaxed">
                  {stat.label}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 BOTTOM CTA */}
      <div className="text-center mt-24 fadeUp">
        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 text-lg font-semibold shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 transition">
          View Full Case Studies →
        </button>
      </div>
    </section>
  );
}


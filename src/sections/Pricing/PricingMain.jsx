import { useEffect, useRef } from "react";
import gsap from "gsap";

const plans = [
  {
    title: "AI Voice & Chat",
    desc: "Inbound + outbound automations that capture, qualify, and convert leads 24/7.",
    features: [
      "Voice agents + chat flows",
      "Lead qualification + booking",
      "CRM + calendar integration",
      "Follow-ups + reminders",
    ],
  },
  {
    title: "MVP & Micro-SaaS",
    desc: "Build, validate, and launch fast with production-ready MVP systems.",
    features: [
      "Rapid MVP build",
      "Auth + billing + dashboards",
      "Real users + feedback loops",
      "Iteration roadmap",
    ],
  },
  {
    title: "Complete Solution",
    desc: "Complete AI Voice + MVP solutions—scoped to ROI, built for growth.",
    highlight: true,
    features: [
      "Voice + MVP combined system",
      "Automation + integrations",
      "Analytics + revenue tracking",
      "Enterprise-ready architecture",
    ],
  },
];

export default function PlansSection() {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".planFade", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🧲 magnetic button
  const handleMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    btnRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    btnRef.current.style.transform = "translate(0,0)";
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-0 overflow-hidden bg-[#050505] px-6 py-20 text-white md:px-16 md:py-28"
    >
      {/* 🌌 CLEAN BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-100px] top-[-150px] h-[320px] w-[320px] bg-teal-600/20 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-100px] h-[280px] w-[280px] bg-teal-600/20 blur-[120px] sm:h-[400px] sm:w-[400px] sm:blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-16 planFade">
          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Plans that start where you are
          </h2>

          <p className="mx-auto max-w-2xl text-base text-gray-400 md:text-lg">
            One team. Two capabilities. Three ways to win — AI Voice & Text Automations + MVP/Micro-SaaS, scoped to ROI.
          </p>
        </div>

        {/* 💎 PLANS */}
        <div className="grid gap-6 md:grid-cols-3">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`planFade flex min-h-[320px] flex-col justify-between rounded-2xl border ${
                plan.highlight
                  ? "border-teal-500 bg-gradient-to-b from-teal-500/10 to-transparent"
                  : "border-white/10 bg-white/5"
              } p-5 sm:p-6`}
            >
              {/* TITLE */}
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  {plan.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {plan.desc}
                </p>

                {/* FEATURES */}
                <div className="space-y-3">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-teal-400" />
                      <span className="leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="mt-8 w-full py-3 rounded-full bg-white/10 hover:bg-white/20 transition text-sm font-medium">
                Learn More →
              </button>
            </div>
          ))}

        </div>

        {/* 🔥 CTA */}
        <div className="planFade mt-16 text-center md:mt-20">

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <button
              ref={btnRef}
              onMouseMove={handleMove}
              onMouseLeave={reset}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 font-semibold shadow-lg hover:scale-105 transition"
            >
              Book Your Discovery Call
            </button>

            <button className="px-6 py-3 rounded-full border border-teal-500 text-teal-400 hover:bg-teal-500/10 transition">
              $250 Deep-Dive
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}



import { useEffect, useRef } from "react";
import gsap from "gsap";
import { brand } from "../../data/siteBrand";

const steps = [
  {
    num: "01",
    title: "Understand your goals",
    desc: "We break down your current system, constraints, and opportunities.",
  },
  {
    num: "02",
    title: "Define success metrics",
    desc: "Clear KPIs: bookings, response time, ROI, automation coverage.",
  },
  {
    num: "03",
    title: "Outline solutions",
    desc: "We map AI voice + MVP architecture tailored to your business.",
  },
  {
    num: "04",
    title: "Next steps & timeline",
    desc: "Execution roadmap with milestones, cost, and rollout plan.",
  },
];

export default function CallExpectationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stepCard", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-[#020202] text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[160px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[160px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What to Expect in Your Call
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            No fluff. No generic pitch. Just a focused session to figure out what actually moves revenue.
          </p>
        </div>

        {/* 🧠 STEPS */}
        <div className="relative">

          {/* 🔗 CONNECTOR LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-teal-500/20 via-teal-500 to-teal-500/20" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">

            {steps.map((step, i) => (
              <div
                key={i}
                className="stepCard group p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
              >
                <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full transition hover:scale-[1.04] hover:border-teal-500/40">

                  {/* NUMBER */}
                  <p className="text-teal-400 text-sm mb-2 font-semibold">
                    {step.num}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-300 transition">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm">
                    {step.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* 🎯 CTA */}
        <div className="text-center mt-24">

          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500">
            <div className="bg-black/80 backdrop-blur-xl rounded-full px-6 py-4 flex flex-col sm:flex-row gap-4 items-center">

              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 font-semibold shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 transition">
                Book Your Discovery Call
              </button>

              <button className="px-6 py-3 rounded-full border border-teal-500 text-teal-400 hover:bg-teal-500/10 transition">
                Discovery Call with {brand.founder.name}
              </button>

            </div>
          </div>

          {/* TRUST */}
          <p className="text-gray-500 text-sm mt-6">
            30 min • Actionable plan • No BS
          </p>

        </div>

      </div>
    </section>
  );
}



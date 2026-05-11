import { useEffect, useRef } from "react";
import gsap from "gsap";

const included = [
  "Founder-led collaboration with senior builders",
  "Conversion-grade UI + conversation design",
  "Analytics from day one",
  "CRM & calendar integrations",
  "Security aligned to client policies",
  "You own your code & infrastructure",
];

const addons = [
  "WhatsApp / SMS broadcasting",
  "Knowledge base buildout",
  "ELT → warehouse + BI pipelines",
  "Human QA for transcripts",
  "Sales ops toolkit",
];

export default function IncludesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeUp", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-[#040404] text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[180px] top-[-200px] left-[-150px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[180px] bottom-[-200px] right-[-150px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20 fadeUp">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need. <br />
            <span className="text-teal-400">Nothing You Don’t.</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We don’t sell features. We build systems that convert, scale, and make money.
          </p>
        </div>

        {/* 💎 GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ✅ INCLUDED */}
          <div className="fadeUp p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500">
            <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full">

              <h3 className="text-2xl font-bold mb-6 text-teal-400">
                All Plans Include
              </h3>

              <div className="space-y-4">
                {included.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-teal-400 group-hover:scale-125 transition" />
                    <p className="text-gray-300 text-sm group-hover:text-white transition">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ➕ ADD-ONS */}
          <div className="fadeUp p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-teal-500 to-cyan-500">
            <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full">

              <h3 className="text-2xl font-bold mb-6 text-teal-400">
                Optional Add-ons
              </h3>

              <div className="space-y-4">
                {addons.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-teal-400 group-hover:scale-125 transition" />
                    <p className="text-gray-300 text-sm group-hover:text-white transition">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* 🔥 BOTTOM CTA */}
        <div className="text-center mt-24 fadeUp">
          <p className="text-gray-400 mb-6">
            Need a custom stack? We’ll design it around your business.
          </p>

          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 text-lg font-semibold shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 transition">
            Discuss Your Setup →
          </button>
        </div>

      </div>
    </section>
  );
}


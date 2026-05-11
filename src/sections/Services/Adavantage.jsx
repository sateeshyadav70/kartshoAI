import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const architectures = [
  {
    title: "Lead → App → Billing",
    desc: "Capture leads, qualify through app, convert to paying customers",
    steps: ["Lead Capture", "Qualification", "Payment", "Onboarding"],
  },
  {
    title: "Content → KB → Agent",
    desc: "CMS feeding knowledge base for AI agents",
    steps: ["Content CMS", "Knowledge Base", "AI Agent", "Customer"],
  },
  {
    title: "POS → Middleware → Reporting",
    desc: "POS integration with analytics dashboard",
    steps: ["POS System", "Data Pipeline", "Analytics", "Dashboard"],
  },
];

export default function AdvantageSection() {
  const sectionRef = useRef(null);
  const [activeArch, setActiveArch] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeUp", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[140px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[140px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto">

        {/* 🔥 TOP */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-28">

          {/* LEFT */}
          <div className="fadeUp">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              One team. <br />
              <span className="text-teal-400">
                Two unfair advantages.
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-4">
              Voice agents that never forget to follow up.
            </p>

            <p className="text-gray-400 text-lg mb-8">
              MVPs that validate before you scale.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Scope to signal", desc: "One core job-to-be-done" },
              { title: "Production feel", desc: "Auth, roles, clean UI" },
              { title: "Integrations", desc: "Payments, CRM, APIs" },
              { title: "Experiment plan", desc: "Measure & iterate" },
            ].map((item, i) => (
              <div key={i} className="fadeUp p-[1px] rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500">
                <div className="bg-black/90 rounded-xl p-5 border border-white/10 backdrop-blur-xl">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 🔥 ARCHITECTURES */}
        <div className="mb-20">
          <h3 className="text-center text-3xl font-bold mb-16 fadeUp">
            Sample Architectures
          </h3>

          <div className="space-y-14">

            {architectures.map((arch, i) => (
              <div
                key={i}
                onClick={() => setActiveArch(arch)}
                className="fadeUp cursor-pointer group"
              >
                <h4 className="text-xl font-semibold text-teal-400 mb-2">
                  {arch.title}
                </h4>

                <p className="text-gray-400 mb-6 text-sm">
                  {arch.desc}
                </p>

                {/* PIPELINE */}
                <div className="flex flex-wrap items-center gap-3">

                  {arch.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">

                      {/* STEP */}
                      <div className="min-w-[150px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md group-hover:scale-105 transition">
                        <p className="text-[10px] text-gray-500">
                          {String(idx + 1).padStart(2, "0")}
                        </p>
                        <p className="text-sm">{step}</p>
                      </div>

                      {/* FLOW LINE */}
                      {idx !== arch.steps.length - 1 && (
                        <div className="relative w-10 h-[2px] bg-white/20 overflow-hidden">

                          {/* ⚡ moving light */}
                          <div className="absolute top-0 left-[-40px] w-20 h-full bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-flow" />

                        </div>
                      )}
                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* 🎯 CTA */}
        <div className="text-center fadeUp">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 text-lg shadow-lg hover:scale-105 transition">
            Discuss Your MVP Plan →
          </button>
        </div>

      </div>

      {/* 🔥 MODAL */}
      {activeArch && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-teal-500/30 rounded-2xl p-8 max-w-lg w-full relative">

            <button
              onClick={() => setActiveArch(null)}
              className="absolute top-4 right-4 text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-teal-400">
              {activeArch.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {activeArch.desc}
            </p>

            <div className="space-y-3">
              {activeArch.steps.map((s, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/10">
                  {i + 1}. {s}
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* ⚡ FLOW ANIMATION */}
      <style>
        {`
          @keyframes flow {
            0% { transform: translateX(0); }
            100% { transform: translateX(120px); }
          }
          .animate-flow {
            animation: flow 1.5s linear infinite;
          }
        `}
      </style>

    </section>
  );
}


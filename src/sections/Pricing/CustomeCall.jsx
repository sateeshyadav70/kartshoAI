import { useEffect, useRef } from "react";
import gsap from "gsap";

const plans = [
  {
    title: "Launch",
    tag: "From Zero to First Wins",
    desc: "Perfect for founders validating demand and getting first wins quickly.",
    features: [
      "1 inbound agent (phone / WhatsApp / SMS)",
      "Greet → qualify → route → schedule",
      "FAQ ingestion (single source)",
      "CRM logging + daily summaries",
      "Weekly reports + DNC basics",
    ],
    delivery: [
      "2–4 week build window",
      "Slack / WhatsApp support",
      "Docs + handover video",
    ],
  },
  {
    title: "Scale",
    tag: "Most Popular",
    highlight: true,
    desc: "For teams with traction that need performance at scale.",
    features: [
      "Inbound + outbound campaigns",
      "3–5 advanced flows (A/B scripts)",
      "2-way CRM sync + lead scoring",
      "QA, recordings, sentiment tracking",
      "Campaign manager (lists, throttling)",
    ],
    delivery: [
      "4–8 week build window",
      "Weekly KPI reviews",
      "Runbook + team training",
    ],
  },
  {
    title: "Enterprise",
    tag: "Production at Scale",
    desc: "For regulated or high-volume operations.",
    features: [
      "Multi-agent fleets + smart routing",
      "Multilingual + IVR + SIP",
      "Compliance + audit trails",
      "SSO / dashboards / real-time metrics",
      "99.9% uptime + on-call support",
    ],
    delivery: [
      "PMO cadence",
      "Priority support",
      "Dedicated architect",
    ],
  },
];

export default function PricingSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeUp", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030303] text-white py-36 px-6 md:px-16 overflow-hidden z-0"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-teal-600/20 blur-[200px] top-[-250px] left-[-200px]" />
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[200px] bottom-[-250px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-28 fadeUp">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Plans that start where you are
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            One team. Two capabilities. Three ways to win — AI Voice & Automations + MVP systems, built for ROI.
          </p>
        </div>

        {/* 💎 GRID */}
        <div className="grid md:grid-cols-3 gap-10 items-stretch">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`fadeUp relative flex flex-col justify-between rounded-2xl p-[1px] ${
                plan.highlight
                  ? "bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500 scale-[1.04]"
                  : "bg-white/10"
              }`}
            >
              <div className="flex flex-col h-full bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">

                {/* TAG */}
                <p className={`text-sm mb-2 ${
                  plan.highlight ? "text-teal-400" : "text-gray-500"
                }`}>
                  {plan.tag}
                </p>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-3">
                  {plan.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm mb-6">
                  {plan.desc}
                </p>

                {/* FEATURES */}
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-3">AI Voice & Chat</p>

                  <div className="space-y-2">
                    {plan.features.map((f, idx) => (
                      <div key={idx} className="flex gap-2 text-sm text-gray-300">
                        <span className="text-teal-400">✔</span> {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* DELIVERY */}
                <div className="mb-8">
                  <p className="text-xs text-gray-500 mb-3">Delivery & Support</p>

                  <div className="space-y-2">
                    {plan.delivery.map((d, idx) => (
                      <div key={idx} className="flex gap-2 text-sm text-gray-300">
                        <span className="text-teal-400">•</span> {d}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <button className={`w-full py-3 rounded-full font-semibold transition ${
                    plan.highlight
                      ? "bg-gradient-to-r from-teal-600 to-teal-600 hover:scale-105"
                      : "bg-white/10 hover:bg-white/20"
                  }`}>
                    Book Discovery Call →
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-3">
                    Custom Quote on Call
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* 🔥 FINAL CTA */}
        <div className="text-center mt-28 fadeUp">
          <p className="text-gray-400 mb-6 text-lg">
            Not sure where to start? We'll map it in 30 minutes.
          </p>

          <button className="px-12 py-5 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 text-xl font-semibold shadow-[0_0_60px_rgba(34,211,238,0.6)] hover:scale-105 transition">
            Book Your Discovery Call
          </button>
        </div>

      </div>
    </section>
  );
}


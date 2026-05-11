const cases = [
  {
    name: "DialEstatePro",
    tagline: "Real-Estate Calling, Done Right",
    desc: "Cold-calling at scale with AI Voice that books more meetings, logs everything, and never needs a coffee.",
    metrics: [
      { value: "250", label: "Brokers served" },
      { value: "2s", label: "Connect time (max)" },
      { value: "7¢", label: "Cost per minute" },
      { value: "24/7", label: "Availability" },
    ],
    details:
      "Power dialer + compliant DNC handling, predictive call distribution, CRM sync, analytics, and AI Voice outperforming legacy stacks.",
    link: "https://dialestatepro.xyz",
  },
  {
    name: "VEDA",
    tagline: "Lead Conversion Dashboard",
    desc: "Turn slow, leaky lead handling into sub-minute response and higher-quality bookings.",
    metrics: [
      { value: "4h → 30s", label: "Response time" },
      { value: "25-40%", label: "Booking increase" },
      { value: "74%", label: "Conversion lift" },
      { value: "$3-5k", label: "Monthly savings" },
    ],
    details:
      "Unified lead capture + AI Voice callbacks, automated reminders, and conversion dashboards.",
  },
  {
    name: "EduForge AI",
    tagline: "Curriculum & School Ops",
    desc: "Lesson planning in minutes, consistent quality, instant resource discovery.",
    metrics: [
      { value: "95%", label: "Planning time reduced" },
      { value: "400%", label: "Output lift" },
      { value: "99%", label: "Discovery speed" },
      { value: "+31%", label: "Engagement" },
    ],
    details:
      "AI lesson generator, assessment builder, curriculum mapping and tracking.",
  },
  {
    name: "MMG Digital",
    tagline: "Agent Swarm for Coaching",
    desc: "Scale coaching from 50 → 500 freelancers without hiring 10x staff.",
    metrics: [
      { value: "70%", label: "Cost reduction" },
      { value: "2-3", label: "ROI (months)" },
      { value: "$60k+", label: "Annual savings" },
      { value: "24/7", label: "Coverage" },
    ],
    details:
      "Master PPC agent + 100+ coaching agents, auto analysis, Telegram integration.",
  },
];

export default function FlagshipCases() {
  return (
    <section className="relative py-32 px-6 md:px-16 bg-[#050505] text-white overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-teal-600/20 blur-[160px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[160px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <p className="text-teal-400 text-sm tracking-widest mb-3">
            FLAGSHIP CASES
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Real systems. Real revenue impact.
          </h2>
        </div>

        {/* 🔥 CASES */}
        <div className="space-y-16">

          {cases.map((c, i) => (
            <div
              key={i}
              className=""
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                  {/* LEFT */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {c.name}
                    </h3>

                    <p className="text-teal-400 mb-4">
                      {c.tagline}
                    </p>

                    <p className="text-gray-400 mb-6">
                      {c.desc}
                    </p>

                    <p className="text-gray-500 text-sm mb-6">
                      {c.details}
                    </p>

                    {/* CTA */}
                    <div className="flex gap-4">
                      <button className="px-5 py-2 rounded-full bg-teal-600 hover:bg-teal-700 transition">
                        Watch Recording
                      </button>

                      {c.link && (
                        <a
                          href={c.link}
                          target="_blank"
                          className="px-5 py-2 rounded-full border border-teal-500 text-teal-400 hover:bg-teal-500/10"
                        >
                          Visit Site
                        </a>
                      )}
                    </div>
                  </div>

                  {/* RIGHT (METRICS) */}
                  <div className="grid grid-cols-2 gap-4">

                    {c.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-black/50 border border-white/10 text-center"
                      >
                        <h4 className="text-2xl font-bold text-teal-200">
                          {m.value}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">
                          {m.label}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}


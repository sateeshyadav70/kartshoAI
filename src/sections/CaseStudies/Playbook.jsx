import {
  Search,
  Layers,
  Cpu,
  Rocket,
  Package,
} from "lucide-react";

const Playbook = () => {
  const steps = [
    {
      id: "01",
      title: "Discover",
      desc: "the leak (missed calls, slow callbacks, no-shows, messy handoffs)",
      icon: Search,
      tag: "Signal Detection",
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: "02",
      title: "Design",
      desc: "flows that collapse to one outcome: qualified meetings on the calendar",
      icon: Layers,
      tag: "Flow Architecture",
      color: "from-blue-500 to-teal-500",
    },
    {
      id: "03",
      title: "Build & Integrate",
      desc: "telephony/SIP, ASR/NLU/TTS, calendars, CRM, WhatsApp/SMS",
      icon: Cpu,
      tag: "System Build",
      color: "from-teal-500 to-teal-500",
    },
    {
      id: "04",
      title: "Deploy & Learn",
      desc: "instrument speed-to-lead, bookings, show rate; iterate weekly",
      icon: Rocket,
      tag: "Live Optimization",
      color: "from-cyan-500 to-red-500",
    },
    {
      id: "05",
      title: "Productize",
      desc: "when the voice loop works, ship the MVP → v1 with auth, billing, analytics",
      icon: Package,
      tag: "Scale Product",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-28 px-6">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Our Playbook
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Why results repeat — a system, not luck.
        </p>
      </div>

      {/* GRID (NO TIMELINE NOW — PRODUCT CARDS) */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={i}
              className="relative p-6 rounded-2xl 
              bg-white/5 backdrop-blur-xl 
              border border-white/10
              hover:scale-[1.03] transition-all duration-300
              shadow-[0_0_70px_rgba(34,211,238,0.12)] group"
            >

              {/* TOP ROW */}
              <div className="flex items-center justify-between mb-4">

                {/* ICON BLOCK */}
                <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} 
                  shadow-lg group-hover:rotate-6 transition`}>
                  <Icon size={20} />
                </div>

                {/* STEP BADGE */}
                <span className="text-xs px-3 py-1 rounded-full 
                  bg-white/10 border border-white/10 text-gray-300">
                  {step.tag}
                </span>

              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* GLOW BORDER LINE */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 
                bg-gradient-to-r ${step.color} 
                group-hover:w-full transition-all duration-500`} />

            </div>
          );
        })}

      </div>

      {/* OPERATING STANDARDS */}
      <div className="max-w-5xl mx-auto mt-24 p-8 rounded-2xl 
        bg-white/5 border border-white/10 backdrop-blur-xl">

        <h3 className="text-xl font-semibold mb-4">
          Operating Standards
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          99.9% uptime target, sub-2s responses, 400+ integrations, DNC/opt-out guardrails,
          and documentation + handover included.
        </p>

      </div>

    </section>
  );
};

export default Playbook;


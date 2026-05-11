import { useEffect, useRef } from "react";
import gsap from "gsap";

const Roadmap = () => {
  const sectionRef = useRef(null);

  const items = [
    {
      title: "AI Receptionist",
      desc: "Never miss a call. Answer, qualify, book.",
      time: "2 weeks",
      status: "Launch",
      color: "from-emerald-400 to-teal-500",
      bg: "from-emerald-500/10 to-teal-500/10",
    },
    {
      title: "Voice SDR",
      desc: "Instant callbacks. Revive cold leads.",
      time: "3 weeks",
      status: "Scale",
      color: "from-cyan-500 to-teal-500",
      bg: "from-cyan-500/10 to-teal-500/10",
    },
    {
      title: "MVP Launch",
      desc: "Proof in weeks. Revenue in months.",
      time: "3 weeks",
      status: "Launch",
      color: "from-teal-500 to-blue-500",
      bg: "from-teal-500/10 to-blue-500/10",
    },
    {
      title: "SaaS Platform",
      desc: "Billing. Roles. Scale.",
      time: "6 weeks",
      status: "Scale",
      color: "from-cyan-500 to-teal-500",
      bg: "from-cyan-500/10 to-teal-500/10",
    },
    {
      title: "Global Voice",
      desc: "Hindi. English. Hinglish.",
      time: "2 weeks",
      status: "Scale",
      color: "from-cyan-500 to-teal-500",
      bg: "from-cyan-500/10 to-teal-500/10",
    },
    {
      title: "Enterprise System",
      desc: "Multi-tenant. Compliant. Bulletproof.",
      time: "10+ weeks",
      status: "Enterprise",
      color: "from-emerald-500 to-green-500",
      bg: "from-emerald-500/10 to-green-500/10",
    },
  ];

  // 🔥 Scroll focus (Apple style)
  useEffect(() => {
    const cards = gsap.utils.toArray(".roadmap-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0.4, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-80 h-80 bg-teal-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full"></div>
      </div>

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 z-10 relative">
        <h2 className="text-5xl md:text-6xl font-extrabold">
          Our Playbook
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Systems that repeat success — not random execution.
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8 z-10">

        {items.map((item, i) => (
          <div
            key={i}
            className={`roadmap-card group relative p-6 rounded-2xl
            bg-gradient-to-br ${item.bg}
            backdrop-blur-xl border border-white/10
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            transition-all duration-500
            hover:scale-[1.05] hover:-translate-y-2
            overflow-hidden`}
          >

            {/* 🔥 MOVING LIGHT EFFECT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute -left-20 top-0 w-20 h-full bg-white/10 rotate-12 animate-[move_2s_linear_infinite]"></div>
            </div>

            {/* TOP BAR */}
            <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${item.color}`}></div>

            {/* ICON */}
            <div className="flex justify-between items-center mb-6">

              <div className="relative group-hover:rotate-12 transition duration-500">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color}`}></div>
                <div className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} blur-xl opacity-60 animate-pulse`}></div>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300">
                {item.status}
              </span>

            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold tracking-tight">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* FOOTER */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xs text-gray-500">
                ⏱ {item.time}
              </span>

              <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${item.color}`}>
                Open
              </span>
            </div>

          </div>
        ))}

      </div>

      {/* CSS ANIMATION (add in global or tailwind config) */}
      <style>
        {`
        @keyframes move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        `}
      </style>

    </section>
  );
};

export default Roadmap;


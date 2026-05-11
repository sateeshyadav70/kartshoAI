import { useState, useEffect } from "react";

const tools = [
  { name: "OpenAI", color: "#10a37f", x: 0, y: -180, desc: "AI reasoning + conversations" },
  { name: "Twilio", color: "#f22f46", x: 180, y: 0, desc: "Voice + communication layer" },
  { name: "Stripe", color: "#635bff", x: 120, y: 140, desc: "Payments + subscriptions" },
  { name: "Supabase", color: "#3ecf8e", x: -120, y: 140, desc: "Database + auth" },
  { name: "LangChain", color: "#ffffff", x: -180, y: 0, desc: "AI orchestration" },
];

// ✅ REAL SVG LOGOS
const logos = [
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 24 24" fill="#10a37f">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
      </svg>
    ),
  },
  {
    name: "Twilio",
    svg: (
      <svg viewBox="0 0 24 24" fill="#f22f46">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="8" cy="8" r="2" fill="white"/>
        <circle cx="16" cy="8" r="2" fill="white"/>
        <circle cx="8" cy="16" r="2" fill="white"/>
        <circle cx="16" cy="16" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 24 24" fill="#635bff">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
      </svg>
    ),
  },
  {
    name: "Supabase",
    svg: (
      <svg viewBox="0 0 24 24" fill="#3ecf8e">
        <path d="M5 20l10-16h4l-10 16z"/>
      </svg>
    ),
  },
  {
    name: "LangChain",
    svg: (
      <svg viewBox="0 0 24 24" fill="#ffffff">
        <path d="M4 12h16M12 4v16"/>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 24 24" fill="#ff7a59">
        <circle cx="12" cy="12" r="8"/>
      </svg>
    ),
  },
  {
    name: "n8n",
    svg: (
      <svg viewBox="0 0 24 24" fill="#f97316">
        <path d="M4 4h16v16H4z"/>
      </svg>
    ),
  },
];

export default function BattleStackGraph() {
  const [active, setActive] = useState(null);
  const [latency, setLatency] = useState([]);

  // 📊 LIVE LATENCY GRAPH
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const next = [...prev, Math.random() * 100];
        return next.slice(-25);
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-16 md:py-28">

      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-[-200px] h-[420px] w-[420px] bg-teal-600/20 blur-[120px] sm:h-[700px] sm:w-[700px] sm:blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[380px] w-[380px] bg-teal-600/20 blur-[120px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">OUR BATTLE STACK</h2>
          <p className="mt-2 text-sm text-gray-400 sm:text-base">AI system architecture</p>
        </div>

        {/* GRAPH */}
        <div className="relative flex h-[420px] w-[420px] origin-center scale-[0.72] items-center justify-center sm:scale-90 md:scale-100">

          {/* CENTER */}
          <div className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.8)]">
            AI
          </div>

          {/* CONNECTIONS */}
          {tools.map((tool, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                width: Math.sqrt(tool.x ** 2 + tool.y ** 2),
                transform: `rotate(${Math.atan2(tool.y, tool.x)}rad)`,
                transformOrigin: "left center",
              }}
            >
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                <div className="absolute w-16 h-full bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-flow" />
              </div>
            </div>
          ))}

          {/* NODES */}
          {tools.map((tool, i) => (
            <div
              key={i}
              onClick={() => setActive(tool)}
              className="absolute cursor-pointer group"
              style={{ transform: `translate(${tool.x}px, ${tool.y}px)` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition"
                style={{ backgroundColor: tool.color }}
              >
                {tool.name[0]}
              </div>
              <p className="text-xs text-gray-400 mt-1 text-center">{tool.name}</p>
            </div>
          ))}
        </div>

        {/* LATENCY GRAPH */}
        <div className="mt-20 w-full max-w-xl">
          <h3 className="text-center text-gray-400 mb-4">Live Latency</h3>

          <div className="flex items-end gap-[2px] h-24 bg-white/5 p-3 rounded-xl border border-white/10">
            {latency.map((val, i) => (
              <div
                key={i}
                className="w-2 bg-teal-400 rounded"
                style={{ height: `${val}%` }}
              />
            ))}
          </div>
        </div>

        {/* LOGOS */}
        <div className="mt-20 w-full">
          <h3 className="text-center text-xl text-gray-400 mb-8">
            Integrated Stack
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="p-[1px] rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
              >
                <div className="bg-black/80 rounded-xl p-4 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center h-[90px] hover:scale-105 transition">
                  
                  <div className="w-8 h-8">
                    {logo.svg}
                  </div>

                  <span className="text-xs mt-2 text-gray-400">
                    {logo.name}
                  </span>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MODAL */}
      {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-md rounded-2xl border border-teal-500/30 bg-black p-8">
            <button onClick={() => setActive(null)} className="absolute top-4 right-4">✕</button>
            <h3 className="text-2xl font-bold mb-4">{active.name}</h3>
            <p className="text-gray-400 mb-6">{active.desc}</p>
            <div className="text-sm text-teal-400">
              Connected → AI → Output
            </div>
          </div>
        </div>
      )}

      {/* FLOW */}
      <style>
        {`
          @keyframes flow {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          .animate-flow {
            animation: flow 1.2s linear infinite;
          }
        `}
      </style>
    </section>
  );
}



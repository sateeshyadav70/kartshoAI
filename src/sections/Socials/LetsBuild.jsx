import { useRef } from "react";

export default function FinalCTA() {
  const btnRef = useRef(null);

  // 🧲 Magnetic effect
  const handleMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;

    btnRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    btnRef.current.style.transform = `translate(0px,0px)`;
  };

  return (
    <section className="relative bg-[#020202] text-white py-32 px-6 md:px-16 overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/30 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/30 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* 🔥 HEADLINE */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Let’s build something that{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-400 bg-clip-text text-transparent">
            sells itself
          </span>
        </h2>

        {/* 🧠 SUBTEXT */}
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Ready to turn your ideas into revenue-generating systems?  
          No fluff. Just execution that prints results.
        </p>

        {/* 💎 CTA CARD */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 inline-block">

          <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-10 py-8 border border-white/10 shadow-[0_0_60px_rgba(34,211,238,0.3)]">

            {/* 🚀 CTA BUTTON */}
            <button
              ref={btnRef}
              onMouseMove={handleMove}
              onMouseLeave={reset}
              className="px-10 py-4 text-lg rounded-full font-semibold bg-gradient-to-r from-teal-600 to-teal-600 shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:scale-110 transition-all duration-300"
            >
               Book Your Discovery Call
            </button>

            {/* ⚡ TRUST LINE */}
            <p className="text-gray-500 text-sm mt-5">
              30-min strategy call • No BS • Clear next steps
            </p>

          </div>

        </div>

        {/* 🔥 URGENCY LINE */}
        <p className="text-gray-600 text-sm mt-8">
          Limited slots each week — serious builders only
        </p>

      </div>
    </section>
  );
}


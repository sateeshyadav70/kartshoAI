import { useRef } from "react";

export default function CTASection() {
  const btnRef = useRef(null);

  // 🧲 Magnetic hover
  const handleMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;

    btnRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    btnRef.current.style.transform = "translate(0px,0px)";
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/YOUR-LINK",
      });
    } else {
      window.open("https://calendly.com/YOUR-LINK", "_blank");
    }
  };

  return (
    <section className="relative py-36 px-6 md:px-16 text-white overflow-hidden">

      {/* 🌌 PREMIUM BACKGROUND (UPDATED) */}
      <div className="absolute inset-0 -z-10 bg-[#050505]" />

      {/* Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-teal-600/20 blur-[180px] top-[-250px] left-[-200px]" />
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[180px] bottom-[-250px] right-[-200px]" />
      </div>

      {/* 🔥 LIGHT BEAM (top effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-teal-500/40 via-transparent to-transparent blur-sm" />

     

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* 🔥 HEADING */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to Get Started?
        </h2>

        <p className="text-gray-400 text-lg mb-14 max-w-2xl mx-auto">
          Call or WhatsApp us directly, or book a discovery call to discuss your specific needs.
        </p>

        {/* 💎 GLASS CARD (UNCHANGED STYLE) */}
        <div className="cursor-pointer fadeUp group p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500">

          {/* hover glow */}
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500 bg-teal-500" />

          <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-10 border border-white/10 shadow-xl">

            {/* 📞 CONTACT */}
            <div className="mb-10">
              <p className="text-gray-400 text-sm mb-2">Direct Contact</p>
              <p className="text-3xl font-bold text-black-400 tracking-wide">
                +91 9307512816
              </p>
            </div>

            {/* 🔥 BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              {/* WhatsApp */}
              <a
                href="https://wa.me/919307512816"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 transition font-semibold shadow-lg hover:scale-105"
              >
                WhatsApp
              </a>

              {/* Discovery Call */}
              <button
                ref={btnRef}
                onMouseMove={handleMove}
                onMouseLeave={reset}
                onClick={openCalendly}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition"
              >
                Book Your Discovery Call
              </button>

              {/* Deep Dive */}
              <button className="px-6 py-3 rounded-full border border-teal-900 text-black-400 hover:bg-green-500 transition hover:scale-105">
                $250 Deep-Dive
              </button>

            </div>

          </div>
        </div>

        {/* ⚡ TRUST LINE */}
        <p className="text-gray-500 text-sm mt-10">
          Usually responds within 2 hours • No spam • Straight talk only
        </p>

      </div>
    </section>
  );
}


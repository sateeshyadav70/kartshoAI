import { useEffect, useRef } from "react";
import gsap from "gsap";
import founderImg from "../../assets/Rnjan.jpeg"; // ✅ fix path

export default function PersonalBrandSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeUp", {
        y: 60,
        opacity: 0,
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
      className="relative overflow-hidden bg-[#030303] px-6 py-20 text-white sm:py-24 md:px-16 md:py-32"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-teal-600/20 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* 🔥 LEFT SIDE */}
        <div>

          {/* HEADLINE */}
          <h1 className="fadeUp mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            Founder. Builder. <br />
            <span className="text-teal-400">
              Revenue Systems Engineer.
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="fadeUp mb-6 text-base text-gray-400 sm:text-lg">
            I build AI voice systems and MVPs that don’t just work—
            they generate pipeline, book meetings, and scale revenue.
          </p>

          {/* AUTHORITY LINE */}
          <p className="fadeUp mb-8 text-sm text-gray-500">
            Building in public • Real implementations • No fake demos
          </p>

          {/* 🔢 STATS */}
          <div className="fadeUp mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">

            <div>
              <p className="text-3xl font-bold text-teal-400">50+</p>
              <p className="text-sm text-gray-400">Voice Agents</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-teal-400">30+</p>
              <p className="text-sm text-gray-400">MVPs Launched</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-teal-400">100+</p>
              <p className="text-sm text-gray-400">Growth Experiments</p>
            </div>

          </div>

          {/* CTA */}
          <div className="fadeUp flex flex-col gap-4 sm:flex-row sm:flex-wrap">

            <button className="rounded-full bg-gradient-to-r from-teal-600 to-teal-600 px-8 py-3 font-semibold shadow-[0_0_40px_rgba(34,211,238,0.6)] transition hover:scale-105">
              Book Your Discovery Call
            </button>

            <button className="rounded-full border border-teal-500 px-6 py-3 text-teal-400 transition hover:bg-teal-500/10">
              Watch Builds →
            </button>

          </div>
        </div>

        {/* 🖼️ RIGHT SIDE */}
        <div className="flex justify-center fadeUp">

          <div className="relative group">

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-600 blur-3xl opacity-30 group-hover:opacity-60 transition" />

            {/* CARD */}
            <div className="relative h-[380px] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-[0_0_80px_rgba(34,211,238,0.3)] backdrop-blur-xl sm:h-[420px]">

              {/* IMAGE */}
              <img
                src={founderImg}
                alt="Founder portrait"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* SOCIAL ICONS */}
              <div className="absolute top-4 right-4 flex gap-3">

                {/* YOUTUBE */}
                <a href="#" className="bg-black/60 p-2 rounded-full hover:scale-110 transition">
                  <svg width="18" height="18" fill="#FF0000" viewBox="0 0 24 24">
                    <path d="M23 7s-.2-1.5-.8-2.1c-.7-.8-1.5-.8-1.9-.9C17.6 3.8 12 3.8 12 3.8h0s-5.6 0-8.3.2c-.4.1-1.2.1-1.9.9C1.2 5.5 1 7 1 7S.8 8.8.8 10.6v1.7C.8 14.1 1 16 1 16s.2 1.5.8 2.1c.7.8 1.6.8 2 .9 1.5.1 6.2.2 8.2.2s6.7-.1 8.2-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.9.2-3.7v-1.7C23.2 8.8 23 7 23 7zM9.5 14.5v-5l5 2.5-5 2.5z"/>
                  </svg>
                </a>

                {/* INSTAGRAM */}
                <a href="#" className="bg-black/60 p-2 rounded-full hover:scale-110 transition">
                  <svg width="18" height="18" fill="#E1306C" viewBox="0 0 24 24">
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 
                    5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 
                    010-10zm6.5-.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>

              </div>

              {/* TEXT */}
              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-semibold">Ranjan</h3>
                <p className="text-sm text-gray-400">
                  Founder & AI Systems Builder
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 🔥 SECOND SECTION (PROOF GRID) */}
      <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:mt-24 md:grid-cols-3 md:gap-8">

        {[
          {
            title: "AI Voice Systems",
            desc: "24/7 agents that book meetings and qualify leads",
          },
          {
            title: "MVP Development",
            desc: "Production-ready products in weeks, not quarters",
          },
          {
            title: "Growth Strategy",
            desc: "Data-driven scaling with real experiments",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="fadeUp p-[1px] rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
          >
            <div className="bg-black/80 rounded-xl p-6 border border-white/10 backdrop-blur-xl hover:scale-105 transition">

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}



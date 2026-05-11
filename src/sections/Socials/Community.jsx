import { useEffect, useRef } from "react";
import gsap from "gsap";
import { brand } from "../../data/siteBrand";

const wins = [
  `${brand.stats[0].value} ${brand.stats[0].label}`,
  `${brand.stats[1].value} ${brand.stats[1].label}`,
  `${brand.stats[2].value} ${brand.stats[2].label}`,
  `${brand.stats[3].value} ${brand.stats[3].label}`,
  `Founded ${brand.foundedYear}`,
  brand.companyName,
];

export default function CommunityWins() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".winCard", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030303] text-white py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[160px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[160px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Enterprise Signals
          </h2>
          <p className="text-gray-400">
            Real company facts from the Kartsho website.
          </p>
        </div>

        {/* 🎬 SCROLL ROW (AUTO MARQUEE) */}
        <div className="relative overflow-hidden">

          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">

            {[...wins, ...wins].map((text, i) => (
              <div
                key={i}
                className="winCard min-w-[280px] p-[1px] rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
              >
                <div className="h-full bg-black/80 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:scale-105 transition">

                  {/* 💬 QUOTE */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    "{text}"
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* 🔁 MARQUEE ANIMATION */}
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        `}
      </style>
    </section>
  );
}



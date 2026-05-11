import { useRef } from "react";
import useSectionVisibility from "../../hooks/useSectionVisibility";

const clients = [
  "Algo Vision",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
  "Moko",
  "Varhity Ventures",
  "Client 8",
];

const TrustedByNetflix = () => {
  const sectionRef = useRef(null);
  const isVisible = useSectionVisibility(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-28 overflow-hidden"
    >

      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-220px] top-[-220px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.16),transparent_68%)]" />
        <div className="absolute bottom-[-220px] right-[-220px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.14),transparent_68%)]" />
      </div>

      <div className="relative z-10 text-center mb-14">

        <p className="text-teal-400 tracking-[0.3em] text-sm">
          TRUSTED BY
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Who We've Worked With
        </h2>

        <p className="text-gray-400 mt-4">
          Founders and teams who chose automation over hiring
        </p>
      </div>

      {/* MARQUEE WRAPPER */}
      <div className="relative overflow-hidden">

        <div
          className="flex w-max gap-8 animate-scroll"
          style={{ animationPlayState: isVisible ? "running" : "paused" }}
        >

          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="group min-w-[180px] px-6 py-4 rounded-xl
              bg-white/5 border border-white/10
              hover:scale-[1.03] hover:bg-white/10 transition-transform transition-colors duration-300
              flex items-center justify-center"
            >
              <span className="text-sm text-gray-300 group-hover:text-white">
                {client}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* SECOND ROW REVERSE DIRECTION */}
      <div className="relative overflow-hidden mt-10">

        <div
          className="flex w-max gap-8 animate-scroll-reverse"
          style={{ animationPlayState: isVisible ? "running" : "paused" }}
        >

          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="min-w-[160px] px-5 py-3 rounded-full
              bg-black/50 border border-white/10
              hover:border-teal-500/40 transition"
            >
              <span className="text-xs text-gray-400">
                {client}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* FOOTER TEXT */}
      <p className="text-center mt-14 text-gray-500 text-sm">
        From startups to enterprises, we've helped teams automate their way to growth
      </p>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-scroll {
            animation: scroll 18s linear infinite;
            will-change: transform;
          }

          .animate-scroll-reverse {
            animation: scrollReverse 22s linear infinite;
            will-change: transform;
          }
        `}
      </style>

    </section>
  );
};

export default TrustedByNetflix;


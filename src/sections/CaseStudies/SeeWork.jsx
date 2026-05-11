import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const DemoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const sectionRef = useRef(null);

  const demos = [
    {
      title: "DialEstatePro Recording",
      desc: "Real estate voice SDR in action",
      tag: "Voice AI SDR",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "VEDA Recording",
      desc: "Lead conversion dashboard + voice callbacks",
      tag: "Analytics + Voice",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  // 🔥 FIXED GSAP (no half render bug)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".demo-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power4.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ripple
  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement("span");

    ripple.className =
      "absolute w-20 h-20 bg-teal-500/30 rounded-full animate-ping";

    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-28 px-6"
    >
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Ready to See It Work?
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Real systems in action — not mockups, not theory.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {demos.map((item, i) => (
          <div
            key={i}
            className="demo-card relative group p-6 rounded-2xl 
            bg-white/5 border border-white/10 backdrop-blur-xl
            shadow-[0_0_80px_rgba(34,211,238,0.12)]
            hover:scale-[1.03] transition-all duration-300
            will-change-transform opacity-0"
          >

            {/* BADGE */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs px-3 py-1 rounded-full 
                bg-teal-500/20 text-teal-300 border border-teal-500/30">
                {item.tag}
              </span>
              <span className="text-gray-500 text-xs">Live System</span>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>

            {/* VIDEO PREVIEW */}
            <div
              onClick={() => setActiveVideo(item.video)}
              className="mt-6 relative h-40 rounded-xl overflow-hidden 
              bg-gradient-to-br from-teal-900/30 to-teal-900/30
              border border-white/10 flex items-center justify-center
              cursor-pointer"
            >
              <div className="absolute w-28 h-28 rounded-full bg-teal-500/20 blur-2xl animate-pulse"></div>

              <div
                onClick={handleRipple}
                className="relative w-14 h-14 rounded-full 
                bg-white/10 border border-white/20
                flex items-center justify-center
                transition group-hover:scale-110"
              >
                <div className="w-0 h-0 
                  border-l-[10px] border-l-white
                  border-t-[7px] border-t-transparent
                  border-b-[7px] border-b-transparent ml-1" />
              </div>
            </div>

          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-20 flex gap-4 justify-center">
        <button className="px-10 py-4 rounded-xl font-semibold border border-4 border-green-400 hover:bg-teal-400
        hover:scale-105 transition
        shadow-[0_0_50px_rgba(34,211,238,0.4)]">
          $250 Deep Drive
           </button>
           <button className="px-10 py-4 rounded-xl font-semibold 
        bg-gradient-to-r from-teal-600 to-teal-600
        hover:scale-105 transition
        shadow-[0_0_50px_rgba(34,211,238,0.4)]">
           Book Discovery Call with Kartsho
        </button>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <div className="w-[90%] md:w-[70%] aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={activeVideo}
              title="Demo Video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DemoSection;



import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  {
    value: 9700,
    suffix: "+",
    label: "YouTube Subscribers",
    desc: "Growing community of AI builders",
  },
  {
    value: 7200,
    suffix: "+",
    label: "Instagram Followers",
    desc: "Daily behind-the-scenes content",
  },
  {
    value: 50,
    suffix: "+",
    label: "Tutorial Videos",
    desc: "Hands-on AI automation guides",
  },
  {
    value: 100,
    suffix: "+",
    label: "Successful Projects",
    desc: "Voice agents and MVPs delivered",
  },
];

export default function StatsSection() {
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

      // 🔥 COUNTER ANIMATION
      stats.forEach((stat, i) => {
        const el = document.getElementById(`counter-${i}`);
        let obj = { val: 0 };

        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.innerText = Math.floor(obj.val).toLocaleString();
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030303] text-white py-28 px-6 md:px-16 overflow-hidden"
    >

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20 fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            By the Numbers
          </h2>

          <p className="text-gray-400">
            Real growth. Real execution. No fluff metrics.
          </p>
        </div>

        {/* 💎 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="fadeUp p-[1px] rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
            >
              <div className="bg-black/70 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center hover:scale-105 transition">

                {/* 🔢 VALUE */}
                <h3 className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">
                  <span id={`counter-${i}`}>0</span>
                  {stat.suffix}
                </h3>

                {/* 📌 LABEL */}
                <p className="text-sm font-medium mb-1">
                  {stat.label}
                </p>

                {/* 🧠 DESC */}
                <p className="text-xs text-gray-400">
                  {stat.desc}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}


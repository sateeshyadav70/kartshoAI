import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { name: "Discovery", desc: "Understanding goals & users" },
  { name: "Design", desc: "Crafting flows & experiences" },
  { name: "Build", desc: "Rapid MVP development" },
  { name: "Deploy", desc: "Launch & automate systems" },
  { name: "Scale", desc: "Optimize & grow revenue" },
];

const Process = () => {
  const orbitRef = useRef(null);
  const containerRef = useRef(null);
  const nodesRef = useRef([]);
  const [active, setActive] = useState(2);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const orbit = orbitRef.current;
    let rafId = 0;
    let latestEvent = null;

    // 🔄 ROTATION
    const rotation = gsap.to(orbit, {
      rotate: 360,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    // 🎯 SCROLL SPEED
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        rotation.timeScale(1 + self.progress * 3);
      },
    });

    // 🧲 CURSOR GRAVITY
    const applyMouse = (e) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      nodesRef.current.forEach((node) => {
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const dx = mouseX - rect.left - rect.width / 2;
        const dy = mouseY - rect.top - rect.height / 2;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          gsap.to(node, {
            x: dx * 0.1,
            y: dy * 0.1,
            duration: 0.4,
          });
        } else {
          gsap.to(node, {
            x: 0,
            y: 0,
            duration: 0.6,
          });
        }
      });

      // 🧠 orbit tilt
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;

      gsap.to(orbit, {
        rotateY: x,
        rotateX: -y,
        transformPerspective: 800,
        duration: 0.5,
      });
    };

    const handleMouse = (e) => {
      latestEvent = e;

      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        if (latestEvent) {
          applyMouse(latestEvent);
        }
      });
    };

    window.addEventListener("pointermove", handleMouse, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMouse);
      if (rafId) window.cancelAnimationFrame(rafId);
      trigger.kill();
      rotation.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-6"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_70%)]" />

      {/* HEADING */}
      <div className="z-10 text-center mb-12 md:mb-40">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Our Process</h2>
        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Neural system → AI workflow engine
        </p>
      </div>

      <div className="z-10 grid w-full max-w-3xl gap-4 md:hidden">
        {steps.map((step, i) => (
          <div
            key={step.name}
            className={`rounded-2xl border p-4 backdrop-blur-xl transition ${
              active === i
                ? "border-teal-500/60 bg-teal-500/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <p className="text-xs tracking-[0.28em] text-white/40">0{i + 1}</p>
            <h3 className="mt-2 text-lg font-semibold">{step.name}</h3>
            <p className="mt-1 text-sm text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* ORBIT */}
      <div
        ref={orbitRef}
        className="relative hidden h-[360px] w-[360px] items-center justify-center sm:h-[420px] sm:w-[420px] md:flex md:h-[500px] md:w-[500px]"
      >
        {/* Circle */}
        <div className="absolute w-full h-full border border-white/10 rounded-full" />

        {/* 🧠 CENTER */}
        <div className="absolute w-40 h-40 rounded-full overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.7)]">
         
        </div>

        {/* 🔗 CONNECTION LINES */}
        <svg className="absolute w-full h-full pointer-events-none">
          {steps.map((_, i) => {
            const angle = (i / steps.length) * 2 * Math.PI;
            const radius = 200;

            const x = 250 + radius * Math.cos(angle);
            const y = 250 + radius * Math.sin(angle);

            return (
              <line
                key={i}
                x1="250"
                y1="250"
                x2={x}
                y2={y}
                stroke="rgba(34,211,238,0.3)"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* 🔵 NODES */}
        {steps.map((step, i) => {
          const angle = (i / steps.length) * 2 * Math.PI;
          const radius = 200;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={i}
              ref={(el) => (nodesRef.current[i] = el)}
              onMouseEnter={() => setActive(i)}
              className="absolute flex flex-col items-center group"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300
                ${
                  active === i
                    ? "bg-teal-500 scale-110 shadow-[0_0_25px_rgba(34,211,238,0.9)]"
                    : "bg-white/10 group-hover:bg-teal-400/50"
                }`}
              >
                ●
              </div>

              <p
                className={`mt-2 text-sm ${
                  active === i ? "text-teal-400" : "text-gray-400"
                }`}
              >
                {step.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* DESCRIPTION */}
      <div className="z-10 mt-10 hidden max-w-md text-center md:block md:mt-16">
        <p className="text-xl font-semibold">{steps[active].name}</p>
        <p className="text-gray-400 mt-2">{steps[active].desc}</p>
      </div>
    </section>
  );
};

export default Process;



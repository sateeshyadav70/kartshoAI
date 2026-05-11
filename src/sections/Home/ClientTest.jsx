import { useEffect, useRef, useState } from "react";
import useSectionVisibility from "../../hooks/useSectionVisibility";

const testimonials = [
  {
    quote:
      "Kartsho Enterprises helped us simplify our lead qualification process. We're booking more meetings with less overhead.",
    name: "Sarah Chen",
    role: "CEO at TechScale",
  },
  {
    quote:
      "The MVP they built for us validated our market quickly and gave us a clear path to paid customers.",
    name: "Mike Rodriguez",
    role: "Founder at DataFlow",
  },
  {
    quote:
      "Our automated customer workflows now handle the majority of inbound requests without friction.",
    name: "Jennifer Park",
    role: "CTO at CallCare",
  },
  {
    quote:
      "From idea to production quickly. Execution quality was extremely strong.",
    name: "David Kim",
    role: "Head of Product",
  },
];

const waveHeights = [16, 24, 18, 30, 22, 26, 14, 28, 20, 24];

const Testimonials = () => {
  const trackRef = useRef(null);
  const typingTimers = useRef([]);
  const typingProgress = useRef(testimonials.map(() => 0));
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const sectionRef = useRef(null);
  const isVisible = useSectionVisibility(sectionRef);

  const [hovered, setHovered] = useState(null);
  const [typedText, setTypedText] = useState({});

  // 🔥 AUTO TYPE EFFECT
  useEffect(() => {
    typingTimers.current.forEach((timer) => clearInterval(timer));
    typingTimers.current = [];

    if (!isVisible) return undefined;

    testimonials.forEach((t, i) => {
      const timer = setInterval(() => {
        const index = typingProgress.current[i];

        if (index > t.quote.length) {
          clearInterval(timer);
          return;
        }

        setTypedText((prev) => ({
          ...prev,
          [i]: t.quote.slice(0, index),
        }));

        typingProgress.current[i] = index + 1;
      }, 15);

      typingTimers.current.push(timer);
    });

    return () => {
      typingTimers.current.forEach((timer) => clearInterval(timer));
      typingTimers.current = [];
    };
  }, [isVisible]);

  // 🔥 DRAG SCROLL (Apple style)
  const handleDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleUp = () => {
    isDown.current = false;
  };

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">

      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[380px] w-[380px] bg-teal-600/20 blur-[120px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] bg-teal-600/20 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
      </div>

      <div ref={sectionRef} className="relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            What Clients Say
          </h2>
        </div>

        {/* CAROUSEL */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto px-4 sm:gap-8 sm:px-10 cursor-grab active:cursor-grabbing scroll-smooth"
          onMouseDown={handleDown}
          onMouseMove={handleMove}
          onMouseLeave={handleUp}
          onMouseUp={handleUp}
        >

          {testimonials.map((t, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative min-w-[280px] h-[250px] rounded-2xl p-[2px] sm:min-w-[320px] md:min-w-[350px] md:h-[260px]
              bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500
              transform transition duration-300 hover:scale-[1.05]"
            >

              <div
                className="h-full rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl sm:p-6"
                style={{
                  transform:
                    hovered === i
                      ? "perspective(1000px) rotateY(5deg) rotateX(5deg)"
                      : "perspective(1000px)",
                }}
              >

                {/* Sound wave UI */}
                <div className="flex gap-[3px] mb-4">
                  {waveHeights.map((height, idx) => (
                    <span
                      key={idx}
                      className="w-[3px] bg-teal-400 animate-pulse"
                      style={{
                        height: `${height}px`,
                        animationPlayState: isVisible ? "running" : "paused",
                      }}
                    />
                  ))}
                </div>

                {/* Typed text */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  “{typedText[i] || ""}”
                </p>

                {/* Footer */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-xs text-teal-400">{t.role}</p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* hide scrollbar */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </section>
  );
};

export default Testimonials;



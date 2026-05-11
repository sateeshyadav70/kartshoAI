import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand } from "../../data/siteBrand";

import founderImg from "../../assets/R.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function FounderSection() {
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVoice = () => {
    const msg = new SpeechSynthesisUtterance(
      `Hey, I am ${brand.founder.name}. I founded ${brand.companyName}, and we build scalable digital systems.`
    );
    window.speechSynthesis.speak(msg);
    setIsPlaying(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".fadeUp", {
          opacity: 0,
          y: 80,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });

      gsap.to(".stickyText", {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-0 overflow-hidden bg-[#020202] px-6 py-20 text-white sm:py-24 md:px-16 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-[-200px] h-[700px] w-[700px] rounded-full bg-teal-600/20 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[600px] w-[600px] rounded-full bg-teal-600/20 blur-[180px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="stickyText">
          <h2 className="fadeUp mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            Founder-led. <br />
            <span className="text-teal-400">Builder-operated.</span>
            <br />
            Outcome-obsessed.
          </h2>

          <p className="fadeUp mb-6 text-base text-gray-400 sm:text-lg">
            {brand.summary}
          </p>

          <div className="fadeUp mb-6">
            <h3 className="text-xl font-semibold">
              {brand.founder.name} - {brand.founder.title}
            </h3>
            <p className="text-sm text-gray-400">
              {brand.founder.bio}
            </p>
          </div>

          <div className="fadeUp mb-8 flex flex-col gap-5 sm:flex-row sm:gap-8">
            <div>
              <p className="text-xl font-bold text-teal-400">
                {brand.stats[0].value}
              </p>
              <p className="text-sm text-gray-400">Active Ventures</p>
            </div>

            <div>
              <p className="text-xl font-bold text-teal-400">
                {brand.stats[1].value}
              </p>
              <p className="text-sm text-gray-400">Clients Served</p>
            </div>
          </div>

          <div className="fadeUp flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button className="rounded-full bg-gradient-to-r from-teal-600 to-teal-600 px-8 py-3 font-semibold transition hover:scale-105">
              Book Discovery Call
            </button>

            <button className="rounded-full border border-teal-500 px-6 py-3 text-teal-400 transition hover:bg-teal-500/10">
              Explore Ventures
            </button>
          </div>
        </div>

        <div className="fadeUp flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-600 opacity-30 blur-3xl transition group-hover:opacity-70" />

            <div
              onClick={playVoice}
              className="relative h-[380px] w-full max-w-sm overflow-hidden rounded-2xl border-2 border-teal-600 border-white/10 bg-black/60 shadow-[0_0_80px_rgba(34,211,238,0.3)] backdrop-blur-xl sm:h-[420px]"
            >
              <img
                src={founderImg}
                alt={brand.founder.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {isPlaying && (
                <div className="absolute right-4 top-4 rounded-full bg-teal-600 px-3 py-1 text-xs animate-pulse">
                  Speaking...
                </div>
              )}

              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-semibold">{brand.founder.name}</h3>
                <p className="text-sm text-gray-400">
                  {brand.founder.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:mt-24 md:grid-cols-3 md:gap-8">
        {[
          {
            title: "Digital Marketing",
            desc: "Kartsho Digital focuses on SEO, performance ads, and brand growth.",
          },
          {
            title: "Product Systems",
            desc: "Enterprise-ready workflows built for reliability and scale.",
          },
          {
            title: "Growth Strategy",
            desc: "Multi-industry execution backed by measured experiments.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="fadeUp rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 p-[1px]"
          >
            <div className="rounded-xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl transition hover:scale-105">
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



import { useEffect, useRef } from "react";
import gsap from "gsap";
import { brand } from "../../data/siteBrand";

const categories = [
  {
    title: "Creator Profiles",
    subtitle: "The original social links kept for audience reach and content discovery.",
    items: [
      {
        name: "YouTube",
        handle: "@AIwithShreyasRaj",
        desc: "Deep dives, demos, and full tutorials on AI voice agents and MVP development.",
        stats: "≈9.7K subscribers • 50+ tutorials",
        followers: "9,700",
        btn: "Subscribe on YouTube",
        color: "from-red-500 to-red-700",
        glow: "shadow-[0_0_25px_rgba(239,68,68,0.6)]",
        link: "#",
      },
      {
        name: "Instagram",
        handle: "@shreyasrajthe1st",
        desc: "Daily clips, founder routines, and quick wins from building in public.",
        stats: "7.2K+ followers • Daily content",
        followers: "7,200",
        btn: "Follow on Instagram",
        color: "from-cyan-500 via-teal-500 to-orange-400",
        glow: "shadow-[0_0_25px_rgba(236,72,153,0.6)]",
        link: "#",
      },
      {
        name: "X (Twitter)",
        handle: "@TopR9595",
        desc: "Live thoughts, threads on AI automation, and real-time building updates.",
        stats: "Active daily • Industry insights",
        followers: "Active",
        btn: "Follow on X",
        color: "from-gray-700 to-black",
        glow: "shadow-[0_0_25px_rgba(255,255,255,0.2)]",
        link: "#",
      },
    ],
  },
  {
    title: "Kartsho Contact",
    subtitle: "Official company touchpoints and direct contact paths.",
    items: [
      {
        name: "Website",
        handle: "kartsho.com",
        desc: "Main company hub with the enterprise portfolio, contact form, and venture overview.",
        stats: "Global digital innovation conglomerate",
        followers: "Live",
        btn: "Open Website",
        color: "from-teal-500 to-teal-700",
        glow: "shadow-[0_0_25px_rgba(99,102,241,0.45)]",
        link: "https://kartsho.com/",
      },
      {
        name: "Email",
        handle: brand.contact.email,
        desc: "Best channel for partnerships, project discussions, and general inquiries.",
        stats: "Replies within 24 business hours",
        followers: "24h",
        btn: "Email Kartsho",
        color: "from-cyan-500 via-teal-500 to-teal-500",
        glow: "shadow-[0_0_25px_rgba(56,189,248,0.45)]",
        link: `mailto:${brand.contact.email}`,
      },
      {
        name: "Call / WhatsApp",
        handle: brand.contact.phonePrimary,
        desc: "Direct line for high-priority conversations and faster coordination.",
        stats: "Available for serious inquiries",
        followers: "Direct",
        btn: "Call Now",
        color: "from-emerald-500 to-teal-700",
        glow: "shadow-[0_0_25px_rgba(16,185,129,0.45)]",
        link: `https://wa.me/${brand.contact.whatsapp.replace(/\D/g, "")}`,
      },
    ],
  },
];

export default function SocialSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".socialCard", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020202] px-6 py-20 text-white sm:py-24 md:px-16 md:py-32"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-[-200px] h-[420px] w-[420px] bg-teal-600/20 blur-[140px] sm:h-[700px] sm:w-[700px] sm:blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[380px] w-[380px] bg-teal-600/20 blur-[140px] sm:h-[600px] sm:w-[600px] sm:blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-6xl">
            Socials, Contact, and Reach. <br />
            <span className="text-teal-400">
              Creator profiles plus Kartsho channels.
            </span>
          </h2>

          <p className="text-sm text-gray-400 sm:text-base">
            We kept the original social links and added the official company touchpoints.
          </p>
        </div>

        <div className="space-y-14">
          {categories.map((category) => (
            <div key={category.title} className="socialCard">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-teal-300 sm:text-2xl">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {category.subtitle}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {category.items.map((s, i) => (
                  <div
                    key={`${category.title}-${i}`}
                    className="group rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 p-[1px]"
                  >
                    <div className="h-full rounded-2xl border border-white/10 bg-black/70 p-6 backdrop-blur-xl transition hover:scale-[1.04] hover:border-teal-500/40">
                      <h3 className="mb-1 text-lg font-semibold sm:text-xl">
                        {s.name}
                      </h3>

                      <p className="mb-3 text-sm text-teal-400">
                        {s.handle}
                      </p>

                      <p className="mb-5 text-sm text-gray-400">
                        {s.desc}
                      </p>

                      <div className="mb-6">
                        <p className="text-2xl font-bold text-white">
                          {s.followers}
                        </p>
                        <p className="text-sm text-gray-500">
                          {s.stats}
                        </p>
                      </div>

                      <a
                        href={s.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`block rounded-full bg-gradient-to-r ${s.color} py-3 text-center font-semibold transition hover:scale-105 ${s.glow} animate-pulse-slow`}
                      >
                        {s.btn}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ⚡ GLOW ANIMATION */}
      <style>
        {`
          @keyframes pulseSlow {
            0%, 100% { box-shadow: 0 0 20px rgba(34,211,238,0.4); }
            50% { box-shadow: 0 0 40px rgba(34,211,238,0.8); }
          }

          .animate-pulse-slow {
            animation: pulseSlow 2.5s infinite ease-in-out;
          }
        `}
      </style>

    </section>
  );
}



import { useRef } from "react";
import { brand } from "../../data/siteBrand";
import LazySpline from "../../components/LazySpline";
import useSectionVisibility from "../../hooks/useSectionVisibility";

const ecosystem = [
  {
    tone: "Digital Marketing",
    name: "Kartsho Digital",
    desc: "Data-driven marketing and growth engineering. We deliver strategic SEO and performance marketing to elevate brands and ensure enterprise dominance.",
  action: "Explore Agency",
    href: "https://digital.kartsho.com/",
    badge: "Kartsho Digital Logo",
    logo: true,
  },
  {
    tone: "Legal Tech",
    name: "Lawdalat",
    desc: "Democratizing legal access through innovation. A cutting-edge digital ecosystem seamlessly connecting clients with elite legal professionals.",
    action: "comming soon",
    badge: "Lawdalat Logo",
    logo: false,
  },
  {
    tone: "EdTech",
    name: "Kartsho Academy",
    desc: "Forging the innovators of tomorrow. Premium tech-education and rigorous upskilling programs designed to accelerate careers in the digital workforce.",
    action: "Start Learning",
    href:"https://academy.kartsho.com/",
    badge: "Kartsho Academy Learning",
    logo: true,
  },
  {
    tone: "E-Commerce",
    name: "Kartsho Commerce",
    desc: "Redefining digital retail. A sophisticated, high-performance marketplace engineered for premium digital assets and frictionless global transactions.",
    action: "comming-soon",
    badge: "Kartsho Commerce Platform",
    logo: true,
  },
  {
    tone: "Media",
    name: "Knowledge Hub",
    desc: "The ultimate nexus for industry intelligence. Stay ahead with expert analyses, profound insights, and the latest trends shaping global technology.",
    action: "Read Insights",
    href:"https://blog.kartsho.com/",
    badge: "Knowledge Hub Platform",
    logo: true,
  },
  {
    tone: "Counseling",
    name: "Kartsho Counseling",
    desc: "Strategic academic consulting and personalized mentorship. We provide data-backed intelligence to guide ambitious minds toward elite global institutions.",
    action: "Get Guidance",
    href:"https://counselling.kartsho.com/",
    badge: "Kartsho Logo",
    logo: true,
  },
];

export default function OurCoreServices() {
  const sectionRef = useRef(null);
  const isVisible = useSectionVisibility(sectionRef, {
    rootMargin: "160px 0px",
    threshold: 0.18,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-12 md:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-180px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.16),transparent_70%)] md:h-[620px] md:w-[620px]" />
        <div className="absolute bottom-[-180px] right-[-180px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_70%)] md:h-[560px] md:w-[560px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      <LazySpline
        scene="https://prod.spline.design/m8U3XAXCODbIBPI8/scene.splinecode"
        className="pointer-events-none opacity-15 sm:opacity-20 scale-0"
      />

      <div className="relative mx-auto max-w-7xl">
        <div
          className={`mx-auto mb-14 max-w-4xl text-center transition-transform transition-opacity duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="inline-block rounded-full border border-cyan-300/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.55em] text-teal-300/75">
            Our Ecosystem
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
            <span className="text-cyan-200">Six</span>{" "}
            <span>pillars of </span>
            <span className="text-teal-300">innovation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/65 sm:text-base md:text-lg">
            Each engineered to dominate its domain
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ecosystem.map((item, index) => (
            <article
              key={item.name}
              className={`ecosystem-card group relative overflow-hidden rounded-[28px] p-[1px] transition-transform transition-opacity duration-700 ${
                isVisible ? "ecosystem-card--visible" : ""
              }`}
              style={{
                transitionDelay: `${120 + index * 90}ms`,
                ["--card-tilt"]: `${index % 2 === 0 ? "-4deg" : "4deg"}`,
                ["--card-y"]: `${24 + index * 6}px`,
              }}
            >
              <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(90deg,rgba(34,211,238,0.16),rgba(20,184,166,0.16),rgba(255,255,255,0.1),rgba(34,211,238,0.16))] bg-[length:280%_280%] opacity-70 ecosystem-card__ring" />

              <div className="ecosystem-card__panel relative h-full rounded-[27px] border border-white/8 bg-[linear-gradient(180deg,rgba(8,12,16,0.5)_0%,rgba(5,8,12,0.82)_100%)] p-6 shadow-sm transition-transform duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.42em] text-white/40">
                      {item.tone}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold sm:text-[1.75rem]">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    {item.logo ? (
                      <img
                        src="/image/Kartsho.jpeg"
                        alt={`${item.name} logo`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain bg-black/40 p-1"
                      />
                    ) : (
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-teal-300">
                        {item.name.slice(0, 2)}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-teal-400/20 bg-teal-500/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.32em] text-teal-300/70">
                    {item.badge}
                  </span>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium leading-none text-white/85 transition hover:border-cyan-300/60 hover:bg-cyan-300/15 hover:text-white"
                    >
                      {item.action}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="whitespace-nowrap text-sm font-medium leading-none text-white/80 transition group-hover:text-white">
                      {item.action}
                    </span>
                  )}
                </div>

                <div className="mt-6 h-px w-full bg-white/10" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/35">
                    Kartsho Ecosystem
                  </span>
                  <span className="text-xs uppercase tracking-[0.35em] text-teal-300/70">
                    {brand.shortName}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>
        {`
          .ecosystem-card {
            opacity: 0;
            transform: translate3d(0, var(--card-y), 0) rotate(var(--card-tilt)) scale(0.94);
            will-change: transform, opacity;
          }

          .ecosystem-card--visible {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }

          .ecosystem-card__ring {
            animation: ecosystemBorderFlow 9s linear infinite;
          }

          .ecosystem-card:hover .ecosystem-card__panel {
            transform: translateY(-4px);
          }

          @keyframes ecosystemBorderFlow {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 280% 50%;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .ecosystem-card {
              opacity: 1;
              transform: none;
            }

            .ecosystem-card__ring {
              animation: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}

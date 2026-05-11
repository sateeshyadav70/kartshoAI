import { useEffect, useRef } from "react";
import gsap from "gsap";
import { brand } from "../../data/siteBrand";

const sections = [
  {
    title: "Creator Content",
    subtitle: "The original social posts and video-style updates.",
    items: [
      {
        type: "youtube",
        category: "YouTube",
        title: "I Got Indian Phone Numbers for AI Agents",
        desc: "Complete walkthrough of getting working phone numbers in India.",
        embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        stats: "15K views",
      },
      {
        type: "youtube",
        category: "YouTube",
        title: "Setup AI Voice Agent with India Phone Number",
        desc: "Fast setup guide to launch your first agent.",
        embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        stats: "8.2K views",
      },
      {
        type: "youtube",
        category: "YouTube",
        title: "AI Cold Calling & SDR System Demo",
        desc: "Full outbound system that books meetings.",
        embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        stats: "22K views",
      },
      {
        type: "short",
        category: "Shorts",
        title: "Daily routine: Ship -> Measure -> Iterate",
        desc: "Behind-the-scenes founder execution loop.",
        stats: "234 likes",
      },
      {
        type: "short",
        category: "Shorts",
        title: "Build AI Agency Website in 60 Seconds",
        desc: "Quick MVP demo using 3 prompts.",
        stats: "5.1K views",
      },
      {
        type: "thread",
        category: "Threads",
        title: "Why most AI automations fail",
        desc: "Breakdown of mistakes & fixes.",
        stats: "47 replies",
      },
    ],
  },
  {
    title: "Kartsho Ventures",
    subtitle: "The current company data and enterprise portfolio.",
    items: [
      {
        category: "Digital Marketing",
        title: "Kartsho Digital",
        desc: "Data-driven SEO, performance ads, and growth engineering for brands.",
        stats: "Enterprise growth",
      },
      {
        category: "Legal Tech",
        title: "Lawdalat",
        desc: "Digital legal access built to connect clients with the right professionals.",
        stats: "Scalable platform",
      },
      {
        category: "EdTech",
        title: "Kartsho Academy",
        desc: "Education products and upskilling programs for future-ready builders.",
        stats: "Learning ecosystem",
      },
      {
        category: "E-Commerce",
        title: "Kartsho Commerce",
        desc: "High-performance marketplace for premium digital assets and transactions.",
        stats: "Commerce-ready",
      },
      {
        category: "Media",
        title: "Knowledge Hub",
        desc: "Insights, analyses, and trends that keep the enterprise ahead of the curve.",
        stats: "Thought leadership",
      },
      {
        category: "Counseling",
        title: "Kartsho Counseling",
        desc: "Academic guidance and mentorship for ambitious students and families.",
        stats: "Advisory support",
      },
    ],
  },
];

export default function LatestContent() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".row", {
        opacity: 0,
        y: 50,
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
      className="relative overflow-hidden bg-[#020202] px-6 py-20 text-white md:px-16 md:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-[-200px] h-[700px] w-[700px] bg-teal-600/20 blur-[160px]" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[600px] w-[600px] bg-teal-600/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
            Content Categories
          </h2>
          <p className="text-gray-400">
            Creator posts and Kartsho venture data, grouped together so both sets stay visible.
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.title} className="row">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-teal-300">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm text-white/55">
                  {section.subtitle}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {section.items.map((item, i) => (
                  <div
                    key={`${section.title}-${i}`}
                    className="group cursor-pointer transition"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-[1px] transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.32)]">
                      <div className="flex min-h-[240px] flex-col justify-between rounded-2xl bg-white/5 p-6">
                        <div>
                          <p className="text-xs uppercase tracking-[0.35em] text-teal-300/70">
                            {item.category}
                          </p>
                          <h4 className="mt-3 text-xl font-semibold">
                            {item.title}
                          </h4>

                          {item.type === "youtube" && (
                            <iframe
                              src={item.embed}
                              title={item.title}
                              className="mt-4 h-[160px] w-full rounded-xl border border-white/10"
                              allowFullScreen
                            />
                          )}

                          {item.type !== "youtube" && (
                            <p className="mt-3 text-sm leading-6 text-white/60">
                              {item.desc}
                            </p>
                          )}
                        </div>

                        <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/45">
                          <span>{item.stats}</span>
                          <span>{brand.shortName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



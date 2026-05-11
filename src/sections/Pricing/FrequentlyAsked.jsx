import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const faqs = [
  {
    q: "How fast can we go live?",
    a: "Most Launch setups go live in 2–4 weeks. Scale and Enterprise depend on integrations, but we ship usable systems fast—not months of waiting.",
  },
  {
    q: "Do you replace human agents?",
    a: "No. We augment them. AI handles repetitive conversations (qualification, FAQs, follow-ups) so your team focuses on high-value closing.",
  },
  {
    q: "What integrations do you support?",
    a: "CRM (HubSpot, Salesforce), Calendars, Stripe, WhatsApp/SMS, databases, and custom APIs. If it has an API, we can connect it.",
  },
  {
    q: "Is this compliant with regulations (DNC, GDPR, etc.)?",
    a: "Yes. We implement opt-outs, DNC handling, audit trails, and data controls aligned with your business requirements.",
  },
  {
    q: "How do you measure ROI?",
    a: "We track response time, conversion rates, bookings, cost per lead, and revenue attribution—so you see real impact, not vanity metrics.",
  },
  {
    q: "Can we customize the AI voice and scripts?",
    a: "Fully. Tone, language, flows, escalation rules—all tailored to your brand and use case.",
  },
  {
    q: "What happens after launch?",
    a: "We monitor, optimize, and iterate. Weekly insights, A/B testing, and continuous improvements are part of the process.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faqFade", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-[#040404] text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-4xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20 faqFade">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know before scaling with AI Voice & MVP systems.
          </p>
        </div>

        {/* 💎 FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="faqFade p-[1px] rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">

                {/* QUESTION */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-medium text-lg">
                    {item.q}
                  </span>

                  <span className="text-teal-400 text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === i ? "max-h-40 px-6 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-black text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* 🎯 CTA */}
        <div className="text-center mt-20 faqFade">
          <p className="text-gray-400 mb-6">
            Still have questions? Let’s talk.
          </p>

          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 text-lg font-semibold shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 transition">
            Book Your Discovery Call →
          </button>
        </div>

      </div>
    </section>
  );
}


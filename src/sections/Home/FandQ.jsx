const faqs = [
  {
    q: "Is this custom?",
    a: "Yes. Everything is built around your workflow, not templates."
  },
  {
    q: "Voice agent or human?",
    a: "AI handles the front line. Humans step in only when needed."
  },
  {
    q: "How fast can we go live?",
    a: "Usually 7–14 days depending on complexity."
  },
  {
    q: "Security & data?",
    a: "Encrypted, access-controlled, and built with enterprise-grade standards."
  },
  {
    q: "Do you disclose pricing?",
    a: "Yes. Clear pricing based on scope. No hidden layers."
  },
  {
    q: "What tech stacks do you support?",
    a: "Node, React, Next.js, Python, APIs, CRMs, and custom integrations."
  },
];

const FAQSection = () => {
  return (
    <section className="relative bg-black text-white py-28 px-6 md:px-12 overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            FAQs
          </h2>

          <p className="text-gray-400 mt-2">
            (straight talk)
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="group p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
            >
              <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10
                hover:bg-black/60 transition duration-300">

                {/* Question */}
                <h3 className="text-lg font-semibold flex justify-between items-center">
                  {item.q}
                  <span className="text-teal-400 group-hover:rotate-45 transition">
                    +
                  </span>
                </h3>

                {/* Answer */}
                <p className="text-gray-400 mt-3 text-sm leading-6">
                  {item.a}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-16">

          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-teal-600
            shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:scale-[1.05] transition font-semibold">

            Book Your Discovery Call

          </button>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;


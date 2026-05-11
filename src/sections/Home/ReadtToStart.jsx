import { brand } from "../../data/siteBrand";

const CTASection = () => {
  return (
    <section className="relative bg-black text-white py-28 px-6 md:px-12 overflow-hidden">

      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <h1 className="text-4xl md:text-5xl font-bold">
            READY TO START
          </h1>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto text-lg">
            Ready to turn "we should automate this" into "it's already handled"?
          </p>

          <p className="text-gray-400 mt-3">
            Book a 30-minute discovery call or connect with {brand.founder.name} for a deeper strategy session.
          </p>

          <p className="text-teal-400 mt-4 italic">
            Worst case: clarity. Best case: compound advantage.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT MAIN CARD */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500">

            <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">

              <h2 className="text-2xl font-semibold mb-6">
                What to Expect in Your Call
              </h2>

              <ul className="space-y-4 text-sm text-gray-300">
                <li>✔ Understand your current challenges and goals</li>
                <li>✔ Identify automation opportunities in your workflow</li>
                <li>✔ Discuss MVP validation strategies for your market</li>
                <li>✔ Outline potential solutions and realistic timelines</li>
                <li>✔ Define success metrics and ROI expectations</li>
              </ul>

              <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-teal-600 to-teal-600 font-semibold shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:scale-[1.02] transition">
                Book Discovery Call
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                30 minutes • Free consultation
              </p>

            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-6">

            {/* DIRECT CONTACT */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-teal-500 via-teal-500 to-cyan-500">

              <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">

                <h3 className="text-xl font-semibold mb-4">
                  Direct Contact
                </h3>

                <p className="text-gray-300">
                  Prefer to call directly? Reach Kartsho at:
                </p>

                <div className="mt-4 text-lg font-semibold">
                  {brand.contact.phonePrimary}
                </div>

                <div className="mt-4 inline-block px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
                  WhatsApp Available
                </div>

              </div>
            </div>

            {/* SECOND CARD */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-teal-500 via-teal-500 to-blue-500">

              <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">

                <h3 className="text-xl font-semibold mb-2">
                  Discovery Call with {brand.founder.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  Prefer a founder session?
                </p>

                <p className="text-teal-400 mt-3 text-sm">
                  Usually responds within 2 hours
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;



const ServicesHero = () => {
  return (
    <section className="relative min-h-[100svh] bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 py-20">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_70%)]" />

        {/* gradient mix */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(black),transparent_40%)]" />

       
        {/* grid overlay */}
        
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-5xl">

        {/* TOP TEXT */}
        <div className="mb-14 text-center md:mb-16">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
            Build Faster.
            <span className="bg-gradient-to-r from-teal-400 to-teal-400 bg-clip-text text-transparent">
              Sell Smarter.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 sm:text-lg">
            AI Voice & Text that books meetings 24/7 + MVP/Micro-SaaS
            that validates markets before you scale.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

            <button className="px-8 py-4 rounded-full 
              bg-gradient-to-r from-teal-600 to-teal-600
              shadow-[0_0_40px_rgba(34,211,238,0.4)]
              hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.7)]
              transition">

              🚀 Book Your Discovery Call
            </button>

            <button className="px-8 py-4 rounded-full 
              border border-teal-400/40 bg-white/5 backdrop-blur-md
              hover:bg-white/10 transition">

              💎 $250 Deep-Dive
            </button>

          </div>
        </div>

        {/* ================= SERVICE SPLIT ================= */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              AI Voice Agents
            </h2>

            <p className="mb-6 text-gray-300">
              Your always-on receptionist + SDR — polite, persistent,
              and impossible to forget follow-ups.
            </p>

            <ul className="space-y-4 text-sm text-gray-300 sm:text-base">
              <li>✔ Inbound: greet → qualify → route → schedule</li>
              <li>✔ Outbound: campaigns, callbacks, re-engagement</li>
              <li>✔ Follow-ups across SMS / WhatsApp / Email</li>
              <li>✔ CRM sync: notes, tasks, statuses</li>
              <li>✔ Human-like conversations + smart routing</li>
            </ul>

          </div>

          {/* RIGHT CARD */}
          <div className="relative group">

            {/* gradient border */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-teal-500 via-teal-500 to-teal-500">

              <div className="rounded-2xl bg-black/70 backdrop-blur-xl p-8 border border-white/10">

                <p className="text-gray-400 text-sm mb-6">
                  AI Performance
                </p>

                {/* fake progress */}
                <div className="flex justify-center mb-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-teal-500 text-2xl font-bold sm:h-36 sm:w-36 sm:text-3xl">
                24/7
              </div>
                </div>

                <p className="text-center text-gray-400 mb-6 text-sm">
                  Always active. Never misses a lead.
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Voice AI","CRM Sync","Automation","Analytics","Flows"].map((t,i)=>(
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-teal-600/20 border border-teal-500/20">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            {/* glow */}
            <div className="absolute inset-0 blur-2xl bg-teal-600/20 opacity-0 group-hover:opacity-100 transition" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServicesHero;



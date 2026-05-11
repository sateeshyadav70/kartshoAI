import { brand } from "../../data/siteBrand";

const LightBeamHero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-center justify-center px-6 text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* base black */}
        <div className="absolute inset-0 bg-[#05060a]" />

        {/* cyan ambient glow (same vibe) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-teal-900/10" />

        {/* ================= SPLINE ================= */}
        {/* soft overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center max-w-4xl">

        <h1 className="text-3xl font-semibold leading-snug sm:text-4xl md:text-5xl">
          Ready to turn{" "}
          <span className="text-teal-300">"we should automate this"</span>
          <br />
          into{" "}
          <span className="text-teal-300">"it's already handled"</span>?
        </h1>

        <p className="text-gray-300 mt-6">
          Worst case: clarity. Best case: compound advantage.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row md:gap-5">

          <button className="rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 px-8 py-4
            shadow-sm transition-transform duration-300 hover:scale-[1.03]">
            Book Your Discovery Call
          </button>

          <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4
            transition-colors duration-300 hover:bg-white/10">
            Discovery Call with {brand.founder.name}
          </button>

        </div>

      </div>

    </section>
  );
};

export default LightBeamHero;



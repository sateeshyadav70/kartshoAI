const KnowledgeHeader = () => {
  const filters = ["All", "Voice", "MVP", "Auto", "Demo", "Guide"];

  return (
    <section className="w-full bg-black px-6 pt-20 text-white sm:pt-24">

      {/* TITLE BLOCK */}
      <div className="text-center max-w-3xl mx-auto">

        {/* small label */}
        <p className="text-teal-400 text-sm tracking-widest uppercase">
          Knowledge Base
        </p>

        {/* main heading */}
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-6xl">
          Playbooks & Insights
        </h1>

        <p className="mt-4 text-base text-gray-400 sm:text-lg">
          Curated wisdom to help you ship faster, scale smarter, and avoid guesswork.
        </p>

        {/* micro tagline */}
        <div className="mt-3 text-sm text-gray-500">
          Ship smarter. Build systems, not tasks.
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="mx-auto mt-10 max-w-xl">
        <div className="relative">

          <input
            type="text"
            placeholder="Search playbooks, services, videos..."
            className="w-full px-5 py-4 rounded-2xl 
            bg-white/5 border border-white/10 
            backdrop-blur-xl text-white 
            placeholder-gray-500 outline-none
            focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
          />

          {/* glow effect */}
          <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-r from-teal-600/10 to-teal-600/10 blur-2xl -z-10">
          </div>

        </div>
      </div>

      {/* FILTER CHIPS */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 px-2">

        {filters.map((item, i) => (
          <button
            key={i}
            className="px-5 py-2 text-xs rounded-full 
            bg-white/5 border border-white/10 
            hover:bg-white/10 hover:scale-105 transition
            backdrop-blur-xl"
          >
            {item}
          </button>
        ))}

      </div>

      {/* subtle divider */}
      <div className="max-w-6xl mx-auto mt-12 border-t border-white/10"></div>

    </section>
  );
};

export default KnowledgeHeader;



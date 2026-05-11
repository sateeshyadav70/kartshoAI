const Snapshots = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Snapshots
          <span className="text-teal-400"> (Fast Wins We Like to Show)</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Real outcomes. No fluff. Just systems that actually print ROI.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* CARD 1 */}
        <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
          hover:scale-[1.02] transition-all duration-300
          shadow-[0_0_60px_rgba(34,211,238,0.15)]">

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-2xl"></div>

          <h3 className="text-xl font-bold">ContentForge</h3>
          <p className="text-gray-400 mt-2">
            AI content engine for a marketing agency
          </p>

          {/* METRICS */}
          <div className="mt-6 space-y-2 text-sm">
            <p>⚡ 80% cost reduction</p>
            <p>🚀 10× speed</p>
            <p>🎯 85% first-draft acceptance</p>
            <p>💰 300–500% ROI in 3 months</p>
          </div>

          <div className="mt-6 text-xs text-teal-300">
            contentforge.pro
          </div>
        </div>

        {/* CARD 2 */}
        <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
          hover:scale-[1.02] transition-all duration-300
          shadow-[0_0_60px_rgba(59,130,246,0.15)]">

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-t-2xl"></div>

          <h3 className="text-xl font-bold">AdScripts.co</h3>
          <p className="text-gray-400 mt-2">
            AI video ad scripting with Kevin Anson
          </p>

          {/* METRICS */}
          <div className="mt-6 space-y-2 text-sm">
            <p>⚡ 90% cost reduction</p>
            <p>⏱ Weeks → hours</p>
            <p>📈 +60% conversion</p>
            <p>🎬 10+ variants per concept</p>
          </div>

          <div className="mt-6 text-xs text-blue-300">
            adscripts.co
          </div>
        </div>

      </div>

    </section>
  );
};

export default Snapshots;


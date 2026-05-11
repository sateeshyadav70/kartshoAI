import { useRef } from "react";
import { brand } from "../../data/siteBrand";
import LazySpline from "../../components/LazySpline";

const steps = [
  {
    index: "01",
    title: "Discover",
    desc: "Goals, users, jobs-to-be-done. We define success and economics, not just features.",
  },
  {
    index: "02",
    title: "Design",
    desc: "Conversation maps or product flows that remove friction. Scripts that sell. Metrics that matter.",
  },
  {
    index: "03",
    title: "Build",
    desc: "Tight sprints. Early demos. Your stack, your rules. No integration theater.",
  },
  {
    index: "04",
    title: "Deploy & Learn",
    desc: "Ship, instrument, review weekly, iterate. Keep what converts, cut what doesn't.",
  },
];

const HowItWorks = () => {
  const robotZoneRef = useRef(null);
  const robotHeadRef = useRef(null);

  const findRobotHead = (spline) => {
    if (!spline) return null;

    const names = [
      "Head",
      "head",
      "HEAD",
      "RobotHead",
      "robotHead",
      "Head1",
      "head1",
      "Head_1",
      "head_1",
      "Head_01",
      "head_01",
      "Face",
      "face",
      "Neck",
      "neck",
    ];

    for (const name of names) {
      try {
        const found = spline.findObjectByName(name);
        if (found) return found;
      } catch {}
    }

    return null;
  };

  const handleRobotMove = (e) => {
    const el = robotZoneRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 1.2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.5;

    const head = robotHeadRef.current;
    if (head) {
      try {
        head.rotation.y = x;
        head.rotation.z = -x * 0.12;
        head.rotation.x = y * 0.25;
      } catch {}
    }
  };

  const resetRobot = () => {
    const head = robotHeadRef.current;
    if (!head) return;

    try {
      head.rotation.x = 0;
      head.rotation.y = 0;
      head.rotation.z = 0;
    } catch {}
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white sm:px-8 md:px-12 md:py-24">
      {/* 🔥 BG */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[260px] w-[520px] rounded-full bg-teal-600/20 blur-[120px] md:h-[350px] md:w-[700px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[220px] w-[360px] rounded-full bg-teal-600/20 blur-[120px] md:h-[300px] md:w-[500px]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-16">
          <p className="inline-block px-4 py-1 border border-teal-500 rounded-full bg-teal-900 mb-4">
            OUR METHODOLOGY
          </p>

          <h2 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
            How We <span className="text-teal-500">Work</span>
          </h2>

          <p className="text-base text-gray-400 mx-auto sm:text-lg md:text-xl">
            We operate like a product team: ship fast, measure honestly, iterate to traction.
          </p>
        </div>

        {/* 🔥 STEP CARDS */}
        <div className="grid grid-cols-1 gap-6 mb-20 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div key={step.index} className="frame-card group relative min-h-[320px]">

              <div className="frame-card__inner absolute inset-[2px] flex flex-col justify-between 
                bg-[linear-gradient(180deg,rgba(10,10,10,0.95)_0%,rgba(4,4,4,0.95)_100%)] 
                backdrop-blur-xl p-6 border border-teal-900/40">

                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest text-white/40">
                    STEP {step.index}
                  </span>
                  <span className="text-teal-400 text-sm font-bold">
                    {step.index}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-6">
                    {step.desc}
                  </p>
                </div>

                <div className="h-px w-full bg-teal-500/20" />
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 BUTTONS FIXED */}
        <div className="flex flex-col gap-4 justify-center mb-20 sm:flex-row sm:flex-wrap sm:gap-6">
          <button className="inline-flex items-center justify-center h-12 px-6 border border-teal-500 rounded-full whitespace-nowrap hover:bg-teal-600 transition">
            Book Your Discovery Call ⏩
          </button>

          <button className="inline-flex items-center justify-center h-12 px-6 border border-teal-500 rounded-full whitespace-nowrap hover:bg-teal-600 transition">
            Discovery Call with {brand.founder.name} ⏩
          </button>
        </div>

        {/* 🔥 EXPERIENCE CARD WITH ROBOT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="frame-card relative min-h-[420px] p-[2px] rounded-xl border border-4 border-teal-500 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 md:min-h-[700px] md:col-span-2">

            <div className="frame-card__inner absolute inset-[2px] flex h-[calc(100%-4px)] flex-col justify-between overflow-hidden
              bg-[linear-gradient(180deg,rgba(10,10,10,0.95)_0%,rgba(4,4,4,0.95)_100%)] 
              backdrop-blur-xl p-6 border border-teal-900/40 bg-gradient-to-r from-teal-800 via-black to-black sm:p-8 md:flex-row md:p-12">

              {/* LEFT */}
              <div className="relative z-10 flex max-w-xl flex-col justify-center gap-4 md:w-[45%]">
                <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                  Interactive AI Experience
                </h3>

                <p className="text-sm text-gray-400 sm:text-base mb-2">
                  Experience the future of AI-powered automation. Our voice agents create immersive, real-time interactions.
                </p>

                <button className="inline-flex items-center justify-center h-12 px-6 border border-teal-500 rounded-full whitespace-nowrap hover:bg-teal-600 transition">
                  Explore Our Solutions →
                </button>
              </div>

           {/* 🔥 RIGHT ROBOT (HIGH QUALITY FIX) */}
<div className="
  robot-zone
  relative
  mt-4 h-[280px] w-full
  sm:h-[340px]
  md:mt-0 md:h-full md:w-[55%]
  flex items-end justify-end
  overflow-hidden
  transition-transform duration-300 ease-out will-change-transform
">

  {/* NO SCALE — let spline handle zoom */}
  <div
    ref={robotZoneRef}
    onMouseMove={handleRobotMove}
    onMouseLeave={resetRobot}
    className="relative w-full h-full"
  >

    <LazySpline
      scene="https://prod.spline.design/RfO9pt5fJ-SL2ctj/scene.splinecode"
      className="pointer-events-none"
      scaleClassName="scale-[0.96] sm:scale-[1.02]"
      onSplineLoad={(spline) => {
        robotHeadRef.current = findRobotHead(spline);
      }}
    />

  </div>

  {/* GROUND */}
  <div className="absolute bottom-0 left-0 h-20 w-full pointer-events-none bg-gradient-to-t from-black via-black/70 to-transparent" />

  {/* WATERMARK BLUR */}
  <div className="absolute bottom-0 right-0 h-20 w-40 rounded-tl-xl bg-black/30 backdrop-blur-md pointer-events-none" />

</div>

            </div>
          </div>

        </div>
      </div>

      {/* 🔥 STYLE */}
      <style>
        {`
          .frame-card {
            position: relative;
            clip-path: polygon(4% 0, 96% 0, 100% 4%, 100% 96%, 96% 100%, 4% 100%, 0 96%, 0 4%);
            background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
            box-shadow:
              0 0 0 1px rgba(255,255,255,0.05),
              0 20px 80px rgba(0,0,0,0.9);
            transition: all 0.3s ease;
          }

          .frame-card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow:
              0 0 0 1px rgba(34,211,238,0.3),
              0 25px 90px rgba(34,211,238,0.25);
          }

          .frame-card__inner {
            clip-path: inherit;
          }
        `}
      </style>
    </section>
  );
};

export default HowItWorks;



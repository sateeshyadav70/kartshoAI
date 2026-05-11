import { useRef, useState, useEffect } from "react";

const demos = [
  {
    title: "Customer Support Inquiry",
    desc: "AI agent handles customer inquiry in Hindi and English",
    scenario: "Customer calls with a support question",
    outcome: "Issue resolved + satisfaction confirmed",
    audio: "/audio/demo1.mp3",
  },
  {
    title: "Appointment Reminder Call",
    desc: "AI agent confirms appointment and handles rescheduling",
    scenario: "Automated reminder call to customer",
    outcome: "Confirmed + calendar updated",
    audio: "/audio/demo2.mp3",
  },
  {
    title: "Lead Qualification",
    desc: "AI agent qualifies incoming lead and books meeting",
    scenario: "Potential customer inquiry call",
    outcome: "Lead qualified + meeting scheduled",
    audio: "/audio/demo3.mp3",
  },
  {
    title: "Follow-up Call",
    desc: "AI agent follows up on previous interaction",
    scenario: "Automated follow-up sequence",
    outcome: "Engagement maintained + next steps confirmed",
    audio: "/audio/demo4.mp3",
  },
];

const VoiceDemos = () => {
  const audioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [showSpline, setShowSpline] = useState(false);
  const sectionRef = useRef(null);

  // 🔥 Lazy load spline (fix lag)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSpline(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handlePlay = (index) => {
    const current = audioRefs.current[index];
    if (!current) return;

    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (playingIndex === index) {
      current.pause();
      setPlayingIndex(null);
    } else {
      current.play().catch(() => {});
      setPlayingIndex(index);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-black px-6 py-20 text-white transform-gpu md:px-12 md:py-24"
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Glow (optimized blur) */}
      <div className="absolute inset-0 z-[2]">
        <div className="absolute left-[-100px] top-[-100px] h-[240px] w-[240px] bg-teal-600/20 blur-3xl sm:h-[400px] sm:w-[400px]" />
        <div className="absolute bottom-[-80px] right-[-80px] h-[220px] w-[220px] bg-teal-600/20 blur-3xl sm:h-[300px] sm:w-[300px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm tracking-widest mb-3">
            VOICE DEMONSTRATIONS
          </p>

          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Listen to our AI voice in action
          </h2>

          <p className="text-gray-400">
            Real scenarios. Human-grade conversations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {demos.map((demo, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 p-[2px]"
            >
              <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">

                <h3 className="mb-2 text-lg font-semibold sm:text-xl">{demo.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{demo.desc}</p>

                <p className="text-xs text-gray-500 mb-1">
                  <span className="text-teal-400">Scenario:</span> {demo.scenario}
                </p>

                <p className="text-xs text-gray-500 mb-4">
                  <span className="text-teal-400">Outcome:</span> {demo.outcome}
                </p>

                {/* Audio */}
                <audio
                  ref={(el) => (audioRefs.current[i] = el)}
                  src={demo.audio}
                  onEnded={() => setPlayingIndex(null)}
                />

                {/* Controls */}
                <div className="flex items-center justify-between mt-6">

                  <button
                    onClick={() => handlePlay(i)}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 text-sm"
                  >
                    {playingIndex === i ? "Pause" : "Play"}
                  </button>

                  <div className="relative w-10 h-10 flex items-center justify-center">
                    {playingIndex === i && (
                      <span className="absolute w-10 h-10 rounded-full bg-teal-500 blur-lg animate-pulse opacity-70"></span>
                    )}
                    <span className="relative z-10">🎤</span>
                  </div>

                </div>

                {/* Wave */}
                <div className="flex items-end gap-[3px] mt-6 h-10">
                  {[...Array(16)].map((_, idx) => (
                    <span
                      key={idx}
                      className={`block w-[3px] bg-teal-400 ${
                        playingIndex === i ? "wave-bar" : "h-2"
                      }`}
                      style={{ animationDelay: `${idx * 0.08}s` }}
                    />
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Animation */}
      <style>{`
        .wave-bar {
          height: 20%;
          animation: wave 1s ease-in-out infinite;
          transform-origin: bottom;
        }

        @keyframes wave {
          0%,100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
      `}</style>

    </section>
  );
};

export default VoiceDemos;



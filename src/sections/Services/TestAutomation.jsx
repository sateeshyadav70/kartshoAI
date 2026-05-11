import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Inbound", desc: "Greet → qualify → route → schedule" },
  { title: "Outbound", desc: "List manager, throttling, timezone windows" },
  { title: "Knowledge", desc: "KB ingestion & guardrails" },
  { title: "CRM", desc: "2-way sync, tags, lead scoring" },
  { title: "QA", desc: "Transcripts, sentiment, outcome tracking" },
  { title: "Compliance", desc: "DNC, audit trails, redaction options" },
];

const demos = [
  {
    title: "Inbound Lead Qualification",
    text: "Caller: 'Hi, I'm interested in your services...'",
  },
  {
    title: "Outbound Follow-up",
    text: "Agent: 'Hi John, following up on your inquiry...'",
  },
  {
    title: "FAQ & Routing",
    text: "Caller: 'What are your pricing options?'",
  },
];

const waveHeights = [22, 34, 18, 42, 26, 38, 16, 30, 24, 40, 20, 28];

export default function VoiceAI() {
  const sectionRef = useRef(null);

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".fadeUp", {
          opacity: 0,
          y: 60,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🤖 Avatar click → open chat
  const openChat = () => {
    setChatOpen(true);
    setMessages([]);
    setTyping(true);

    const text =
      "Hey 👋 I'm your AI assistant. Want to automate your calls & bookings?";

    let i = 0;
    let temp = "";

    const interval = setInterval(() => {
      temp += text[i];
      setMessages([{ sender: "ai", text: temp }]);
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 25);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-16 md:py-28"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-100px] top-[-200px] h-[420px] w-[420px] bg-teal-600/20 blur-[120px] sm:h-[700px] sm:w-[700px] sm:blur-[150px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[380px] w-[380px] bg-teal-600/20 blur-[120px] sm:h-[600px] sm:w-[600px] sm:blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-16 fadeUp md:mb-20">
          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            AI Voice & Text Automations
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 sm:text-base">
            Inbound reception, outbound SDR, callbacks, reminders — qualifies leads,
            answers FAQs, routes & schedules, logs to CRM.
          </p>
          <p className="mt-4 text-sm text-teal-400 sm:text-base">
            Human-grade conversations with context memory.
          </p>
        </div>

        {/* 🔥 MAIN GRID */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* 🤖 AI AVATAR */}
          <div className="flex justify-center fadeUp">
            <div
              onClick={openChat}
              className="cursor-pointer relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-600 shadow-[0_0_100px_rgba(34,211,238,0.8)] transition hover:scale-105 sm:h-72 sm:w-72"
            >
              <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-pulse" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-4xl sm:text-5xl">🤖</div>

                <div className="mt-3 w-12 h-[3px] bg-teal-300 animate-pulse rounded-full" />

                <p className="text-xs mt-2 text-white/70">
                  Tap to chat
                </p>

                {/* waveform */}
                <div className="flex gap-[3px] mt-4 h-8 items-end">
                  {waveHeights.map((height, i) => (
                    <div
                      key={i}
                      className="w-[3px] bg-teal-300 rounded-full"
                      style={{
                        height: `${height}%`,
                        animation: `wave 1s infinite ${i * 0.08}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 🎧 DEMOS */}
          <div className="space-y-6">
            {demos.map((d, i) => (
              <div
                key={i}
                className="group p-[1px] rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 transition hover:scale-[1.02]"
              >
                <div className="bg-black/80 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-2">{d.title}</h3>
                  <p className="text-gray-400 text-sm">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🧠 FEATURES */}
        <div className="mt-20 grid grid-cols-1 gap-4 fadeUp sm:grid-cols-2 md:mt-24 md:grid-cols-3 md:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-[1px] rounded-xl bg-gradient-to-r from-teal-500 via-teal-500 to-cyan-500 hover:scale-[1.03] transition"
            >
              <div className="bg-black/80 rounded-xl p-5 backdrop-blur-xl border border-white/10">
                <h4 className="font-semibold">{f.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🎯 CTA */}
        <div className="mt-20 text-center fadeUp md:mt-24">
          <button className="rounded-full bg-gradient-to-r from-teal-600 to-teal-600 px-8 py-4 text-base font-semibold shadow-[0_0_40px_rgba(34,211,238,0.5)] transition hover:scale-105 sm:px-10 sm:text-lg">
            Book Your Discovery Call →
          </button>
        </div>
      </div>

      {/* 💬 CHAT POPUP */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-[320px] rounded-2xl border border-teal-500/30 bg-black/90 p-4 shadow-[0_0_40px_rgba(34,211,238,0.4)] backdrop-blur-xl sm:bottom-6 sm:right-6">

          <div className="flex justify-between mb-3">
            <p className="text-sm font-semibold">AI Assistant</p>
            <button onClick={() => setChatOpen(false)}>✕</button>
          </div>

          <div className="h-[120px] overflow-y-auto text-sm text-gray-300 mb-3">
            {messages.map((msg, i) => (
              <div key={i}>
                <span className="text-teal-400">AI:</span> {msg.text}
              </div>
            ))}
            {typing && <p className="text-gray-500">typing...</p>}
          </div>

          <div className="flex flex-col gap-2">
            <button className="text-xs bg-teal-600/20 border border-teal-500/30 px-3 py-2 rounded-lg hover:bg-teal-600/30">
              Book Demo Call
            </button>
            <button className="text-xs bg-teal-600/20 border border-teal-500/30 px-3 py-2 rounded-lg hover:bg-teal-600/30">
              View Pricing
            </button>
          </div>
        </div>
      )}

      {/* 🎧 ANIMATION */}
      <style>
        {`
          @keyframes wave {
            0%,100% { transform: scaleY(0.3); }
            50% { transform: scaleY(1); }
          }
        `}
      </style>
    </section>
  );
}



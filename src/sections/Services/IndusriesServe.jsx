import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const industries = [
  {
    title: "Real Estate",
    desc: "Automated tour booking and lead qualification",
    demo: {
      title: "Property Lead Flow",
      content: "User inquiry → AI qualifies → schedules site visit → CRM entry",
    },
    icon: "🏠",
  },
  {
    title: "Automotive",
    desc: "Test drive scheduling & CRM sync",
    demo: {
      title: "Test Drive Automation",
      content: "Customer selects car → AI schedules → sends reminders",
    },
    icon: "🚗",
  },
  {
    title: "Restaurants",
    desc: "Reservation + feedback automation",
    demo: {
      title: "Table Booking Flow",
      content: "Customer calls → AI books → confirms → collects feedback",
    },
    icon: "🍽️",
  },
  {
    title: "Clinics",
    desc: "Appointment & patient intake automation",
    demo: {
      title: "Patient Booking System",
      content: "Patient calls → AI collects info → schedules doctor",
    },
    icon: "🏥",
  },
  {
    title: "Education",
    desc: "Student inquiry & enrollment automation",
    demo: {
      title: "Admission Funnel",
      content: "Student inquiry → AI qualifies → shares courses → enrolls",
    },
    icon: "🎓",
  },
  {
    title: "Services",
    desc: "Booking + support automation",
    demo: {
      title: "Service Booking",
      content: "Customer request → AI assigns agent → confirms service",
    },
    icon: "⚙️",
  },
];

export default function Industries() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeUp", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[140px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[140px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 fadeUp">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-400">
            Click any industry to see how AI works in real scenarios
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(item)}
              className="cursor-pointer fadeUp group p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
            >
              <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full transition hover:scale-[1.03]">

                <div className="text-4xl mb-4">{item.icon}</div>

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>

                <div className="mt-6 text-teal-400 text-sm">
                  View Demo →
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24 fadeUp">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 text-lg font-semibold hover:scale-105 transition">
            Book Your Discovery Call →
          </button>
        </div>

      </div>

      {/* 🔥 MODAL */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">

          <div className="relative w-[90%] max-w-lg p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500">

            <div className="bg-black rounded-2xl p-8">

              {/* CLOSE */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              {/* CONTENT */}
              <h3 className="text-2xl font-bold mb-4">
                {active.demo.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {active.demo.content}
              </p>

              {/* FLOW VISUAL */}
              <div className="flex items-center justify-between text-sm text-gray-300">

                {active.demo.content.split("→").map((step, i) => (
                  <div key={i} className="text-center flex-1">
                    <div className="mb-2 text-teal-400 font-bold">
                      {i + 1}
                    </div>
                    <p>{step.trim()}</p>
                  </div>
                ))}

              </div>

              {/* CTA */}
              <button className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 font-semibold">
                Try This System →
              </button>

            </div>
          </div>

        </div>
      )}
    </section>
  );
}


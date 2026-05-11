import React from "react";

const ClientResults = () => {
  const cards = [
    {
      name: "Jahmai Nicome",
      role: "Real Estate Investor",
      rating: "5.0",
      text:
        "Absolutely game-changing automation for my business. The voice agent calls 250 brokers twice weekly with better quality than our previous solution—and at 7¢ per connected minute.",
    },
    {
      name: "Justin Cohen",
      role: "Founder, Exsportium",
      rating: "4.9",
      text:
        "Revolutionized our curriculum process. 5 hours per plan is now 10 minutes with better quality. We scaled offerings 4× without adding planning staff.",
    },
    {
      name: "MMG Digital Team",
      role: "Leadership Team",
      rating: "4.8",
      text:
        "We went from 50 to 500 freelancers coached, without expanding the team. 70% overhead reduction. ROI in under 3 months.",
    },
    {
      name: "Restaurant Ops Lead",
      role: "Multi-Location Chain",
      rating: "4.7",
      text:
        "Reservations saved during peak hours, staff freed up, and confirmations handled automatically. The agent never sleeps—our host stand finally can.",
    },
    {
      name: "VEDA Stakeholder",
      role: "Lead Conversion Team",
      rating: "4.9",
      text:
        "From 4 hours to 30 seconds response time. 25–40% lift in qualified bookings and $3–5k/month saved. We actually see where the revenue comes from.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Client Results
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          What buyers say after go-live — real feedback from founders and teams
          who transformed their business with Kartsho solutions.
        </p>
      </div>

      {/* METRICS */}
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 mb-20 text-center">

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <p className="text-3xl font-bold text-teal-400">100%</p>
          <p className="text-sm text-gray-400 mt-1">Delivery Track Record</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <p className="text-3xl font-bold text-blue-400">2–4mo</p>
          <p className="text-sm text-gray-400 mt-1">Average Payback</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <p className="text-3xl font-bold text-green-400">10×</p>
          <p className="text-sm text-gray-400 mt-1">Capacity Gains</p>
        </div>

      </div>

      {/* STACK CARDS */}
      <div className="max-w-3xl mx-auto relative">

        {cards.map((item, i) => (
          <div
            key={i}
            className="sticky top-24 mb-10"
            style={{ zIndex: i + 1 }}
          >
            <div className="p-6 rounded-2xl 
              bg-white/5 backdrop-blur-2xl 
              border border-white/10
              shadow-[0_0_70px_rgba(34,211,238,0.15)]
              hover:scale-[1.02] transition-all duration-300">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{item.name}</h3>
                <span className="text-yellow-400 text-sm">
                  {item.rating} ★
                </span>
              </div>

              <p className="text-xs text-gray-400 mb-3">
                {item.role}
              </p>

              <p className="text-sm text-gray-300 leading-relaxed">
                “{item.text}”
              </p>

            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <button className="px-10 py-4 rounded-xl font-semibold 
          bg-gradient-to-r from-teal-600 to-teal-600
          hover:scale-105 transition
          shadow-[0_0_50px_rgba(34,211,238,0.4)]">
          $250 Deep-Dive — Book Discovery Call
        </button>
      </div>

    </section>
  );
};

export default ClientResults;



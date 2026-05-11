import { useEffect, useState } from "react";

export default function CallsDashboard() {
  const [data, setData] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [totalCalls, setTotalCalls] = useState(12450);

  // 🔥 FAKE LIVE DATA GENERATOR
  useEffect(() => {
    let calls = 12000;
    let rev = 2000;

    const interval = setInterval(() => {
      calls += Math.floor(Math.random() * 200);
      rev += Math.floor(Math.random() * 50);

      setTotalCalls(calls);

      setData((prev) => [...prev.slice(-20), calls]);
      setRevenue((prev) => [...prev.slice(-20), rev]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // 📊 COMPARISON DATA
  const lastMonth = 9800;
  const growth = ((totalCalls - lastMonth) / lastMonth * 100).toFixed(1);

  return (
    <section className="min-h-screen bg-[#050505] text-white px-6 md:px-16 py-20">

      {/* 🔥 HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          📞 Calls Dashboard
        </h2>
        <p className="text-gray-400 mt-2">
          Real-time AI call handling analytics
        </p>
      </div>

      {/* 🔥 TOP METRICS */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">

        <MetricCard title="Monthly Calls" value={totalCalls} />
        <MetricCard title="Last Month" value={lastMonth} />
        <MetricCard title="Growth" value={`+${growth}%`} highlight />
        <MetricCard title="Revenue" value={`₹${revenue.slice(-1)[0] || 0}`} />

      </div>

      {/* 📈 GRAPH CARD */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

        <h3 className="text-xl font-semibold mb-6">
          Calls vs Revenue (Live)
        </h3>

        <div className="relative h-[250px] w-full">

          {/* CALLS LINE */}
          <svg className="absolute inset-0 w-full h-full">
            <polyline
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="3"
              points={data
                .map((val, i) => `${i * 20},${250 - val / 80}`)
                .join(" ")}
            />
          </svg>

          {/* REVENUE LINE */}
          <svg className="absolute inset-0 w-full h-full">
            <polyline
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
              points={revenue
                .map((val, i) => `${i * 20},${250 - val / 20}`)
                .join(" ")}
            />
          </svg>

        </div>

        {/* LEGEND */}
        <div className="flex gap-6 mt-6 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-500 rounded-full" />
            Calls
          </span>

          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            Revenue
          </span>
        </div>
      </div>

      {/* 🔥 INSIGHTS */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">

        <InsightCard
          title="Response Time"
          value="< 2s"
          desc="AI picks calls instantly"
        />

        <InsightCard
          title="Automation Rate"
          value="92%"
          desc="Calls handled without human"
        />

        <InsightCard
          title="Conversion Lift"
          value="+38%"
          desc="Compared to manual process"
        />

      </div>

    </section>
  );
}

/* 🔥 COMPONENTS */

function MetricCard({ title, value, highlight }) {
  return (
    <div
      className={`p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl ${
        highlight ? "ring-2 ring-teal-500" : ""
      }`}
    >
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}

function InsightCard({ title, value, desc }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-teal-600/20 to-teal-600/10 border border-white/10 backdrop-blur-xl">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      <p className="text-gray-500 text-sm mt-1">{desc}</p>
    </div>
  );
}


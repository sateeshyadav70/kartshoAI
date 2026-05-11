import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function EnterpriseValue() {
  const sectionRef = useRef(null);

  // 💰 ROI CALCULATOR STATE
  const [sdrSalary, setSdrSalary] = useState(80000);
  const [numSDRs, setNumSDRs] = useState(3);
  const [conversionLift, setConversionLift] = useState(25);

  const roiData = useMemo(() => {
    const yearlySDRCost = sdrSalary * numSDRs;
    const aiCost = 100000; // your enterprise stack baseline
    const savings = yearlySDRCost - aiCost;
    const revenueLift = (yearlySDRCost * conversionLift) / 100;

    return [
      { name: "SDR Team Cost", value: yearlySDRCost },
      { name: "AI Stack Cost", value: aiCost },
      { name: "Net Savings", value: savings },
      { name: "Revenue Lift", value: revenueLift },
    ];
  }, [sdrSalary, numSDRs, conversionLift]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeUp", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 text-white overflow-hidden bg-[#060606]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-teal-600/20 blur-[160px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-teal-600/20 blur-[160px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 fadeUp">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why It’s Worth <span className="text-teal-400">$100k+</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            You’re not buying software. You’re replacing an entire SDR org with an always-on revenue system.
          </p>
        </div>

        {/* ROI + GRAPH */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 fadeUp">

          {/* ROI CONTROLS */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-6">💰 ROI Calculator</h3>

            <div className="space-y-4 text-sm text-gray-300">

              <div>
                <label>SDR Salary: ${sdrSalary}</label>
                <input
                  type="range"
                  min="30000"
                  max="150000"
                  value={sdrSalary}
                  onChange={(e) => setSdrSalary(+e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label>Number of SDRs: {numSDRs}</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={numSDRs}
                  onChange={(e) => setNumSDRs(+e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label>Conversion Lift: {conversionLift}%</label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  value={conversionLift}
                  onChange={(e) => setConversionLift(+e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-green-400 font-semibold">
                  Net Impact: $
                  {roiData[2].value.toLocaleString()}
                </p>
              </div>

            </div>
          </div>

          {/* GRAPH */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-6">📊 Savings vs SDR Hiring</h3>

            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#a855f7" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* TIER COMPARISON */}
        <div className="mb-24 fadeUp">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Enterprise Tier Comparison
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <TierCard
              title="Starter"
              price="$2k/mo"
              features={[
                "Basic AI Voice Agent",
                "CRM integration",
                "Email follow-ups",
              ]}
            />

            <TierCard
              title="Scale"
              price="$5k/mo"
              highlight
              features={[
                "Multi-channel outreach",
                "Advanced analytics",
                "Auto scheduling",
                "Lead scoring AI",
              ]}
            />

            <TierCard
              title="Enterprise"
              price="$100k+"
              features={[
                "Full orchestration system",
                "Compliance + audit logs",
                "Custom workflows",
                "Dedicated infra & SLAs",
              ]}
            />

          </div>
        </div>

      </div>
    </section>
  );
}

/* 🏢 TIER CARD */
function TierCard({ title, price, features, highlight }) {
  return (
    <div
      className={`p-6 rounded-2xl border backdrop-blur-xl transition hover:scale-[1.03]
      ${highlight
          ? "bg-teal-600/20 border-teal-500"
          : "bg-white/5 border-white/10"
        }`}
    >
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-teal-400 font-semibold mb-4">{price}</p>

      <ul className="space-y-2 text-sm text-gray-300">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
    </div>
  );
}


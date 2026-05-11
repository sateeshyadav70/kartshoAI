const leftHand = { x: "30%", y: "70%" };
const rightHand = { x: "70%", y: "70%" };

function EnergyBeam() {
  return (
    <div
      className="beam-wrap absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <svg className="beam h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
            <stop offset="35%" stopColor="#00ffff" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#00ffff" stopOpacity="1" />
            <stop offset="65%" stopColor="#00ffff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path className="beam-line beam-line--main" d="M250 720 Q 720 410 1190 720" />
        <path className="beam-line beam-line--soft" d="M350 760 Q 720 470 1090 760" />
      </svg>
    </div>
  );
}

function HandGlow({ x, y, delay = 0, size = 100 }) {
  return (
    <div
      className="hand-glow absolute rounded-full bg-teal-400/35 blur-2xl"
      style={{
        left: `calc(${x} - ${size / 2}px)`,
        top: `calc(${y} - ${size / 2}px)`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
      }}
      aria-hidden="true"
    />
  );
}

function HandParticles() {
  const particles = [
    { x: -26, y: -24, d: 0.0 },
    { x: -14, y: -36, d: 0.18 },
    { x: 6, y: -28, d: 0.3 },
    { x: 18, y: -10, d: 0.42 },
    { x: -30, y: 8, d: 0.54 },
    { x: -8, y: 16, d: 0.66 },
    { x: 16, y: 24, d: 0.78 },
    { x: 32, y: -2, d: 0.9 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {[leftHand, rightHand].map((origin, originIndex) =>
        particles.map((particle, index) => (
          <span
            key={`${originIndex}-${index}`}
            className="hand-particle absolute rounded-full bg-teal-200/90"
            style={{
              left: `calc(${origin.x} + ${particle.x}px)`,
              top: `calc(${origin.y} + ${particle.y}px)`,
              width: `${4 + (index % 3)}px`,
              height: `${4 + (index % 3)}px`,
              animationDelay: `${particle.d}s`,
              "--drift-x": `${particle.x / 2}px`,
              "--drift-y": `${particle.y / 2}px`,
            }}
          />
        ))
      )}
    </div>
  );
}

export default function EnergyEffects() {
  return (
    <>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.10),transparent_38%),radial-gradient(circle_at_50%_70%,rgba(34,211,238,0.12),transparent_30%)]" />

      <HandGlow x={leftHand.x} y={leftHand.y} delay={0} size={110} />
      <HandGlow x={rightHand.x} y={rightHand.y} delay={0.3} size={110} />

      <EnergyBeam />
      <HandParticles />

      <style>
        {`
          .beam-wrap {
            z-index: 2;
            transform: translate3d(var(--beam-x), var(--beam-y), 0);
            transition: transform 120ms ease-out;
          }

          .beam {
            opacity: 1;
          }

          .beam-line {
            fill: none;
            stroke: url(#beamGradient);
            stroke-linecap: round;
            stroke-dasharray: 18 24;
            filter: drop-shadow(0 0 14px rgba(0, 255, 255, 0.75));
            animation: beamFlow 5s linear infinite;
          }

          .beam-line--main {
            stroke-width: 4;
          }

          .beam-line--soft {
            stroke-width: 2;
            opacity: 0.7;
            animation-duration: 7s;
            animation-direction: reverse;
          }

          .hand-glow {
            z-index: 3;
            animation: floatHand 4s ease-in-out infinite, handPulse 2.8s ease-in-out infinite;
          }

          .hand-particle {
            z-index: 4;
            animation: handParticle 3.6s ease-in-out infinite;
          }

          @keyframes beamFlow {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -400;
            }
          }

          @keyframes floatHand {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, -18px, 0);
            }
          }

          @keyframes handPulse {
            0%,
            100% {
              opacity: 0.45;
            }
            50% {
              opacity: 0.9;
            }
          }

          @keyframes handParticle {
            0%,
            100% {
              transform: translate3d(var(--drift-x), var(--drift-y), 0) scale(0.75);
              opacity: 0.2;
            }
            50% {
              transform: translate3d(calc(var(--drift-x) * -1), calc(var(--drift-y) * -1), 0) scale(1.2);
              opacity: 1;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .beam-line,
            .hand-glow,
            .hand-particle {
              animation: none !important;
            }
          }
        `}
      </style>
    </>
  );
}



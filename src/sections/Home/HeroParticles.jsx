const particles = [
  { left: "14%", top: "26%", size: 6, delay: "0s" },
  { left: "26%", top: "18%", size: 4, delay: "0.2s" },
  { left: "38%", top: "34%", size: 5, delay: "0.35s" },
  { left: "56%", top: "22%", size: 7, delay: "0.5s" },
  { left: "66%", top: "30%", size: 4, delay: "0.7s" },
  { left: "78%", top: "16%", size: 5, delay: "0.9s" },
  { left: "82%", top: "38%", size: 6, delay: "1.1s" },
  { left: "22%", top: "42%", size: 4, delay: "1.25s" },
];

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="hero-particle absolute rounded-full bg-cyan-200/80"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
          }}
        />
      ))}

      <style>
        {`
          .hero-particle {
            transform: translate3d(0, 0, 0) scale(0.8);
            opacity: 0.22;
            will-change: transform, opacity;
            animation: particleDrift 5.8s ease-in-out infinite;
          }

          @keyframes particleDrift {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(0.8);
              opacity: 0.22;
            }
            50% {
              transform: translate3d(0, -14px, 0) scale(1.15);
              opacity: 1;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-particle {
              animation: none !important;
              opacity: 0.45;
            }
          }
        `}
      </style>
    </div>
  );
}

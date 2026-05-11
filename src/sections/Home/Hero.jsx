import { lazy, Suspense, useEffect, useRef } from "react";
import { brand } from "../../data/siteBrand";

const HeroParticles = lazy(() => import("./HeroParticles"));

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let timerId = 0;

    video.load();

    const startPlayback = () => {
      window.clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        video.play().catch(() => {});
      }, 1200);
    };

    if (video.readyState >= 2) {
      startPlayback();
    } else {
      video.addEventListener("canplay", startPlayback, { once: true });
    }

    return () => {
      window.clearTimeout(timerId);
      video.removeEventListener("canplay", startPlayback);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#04070c] text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        fetchPriority="high"
        disableRemotePlayback
        disablePictureInPicture
        aria-hidden="true"
      >
        <source src="/video/bg2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,11,0.08)_0%,rgba(2,6,11,0.05)_55%,rgba(2,6,11,0.12)_100%)]" />

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute left-1/2 top-[10%] h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_68%)] hero-orbit" />
        <Suspense fallback={null}>
          <HeroParticles />
        </Suspense>
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-end justify-center px-4 py-12 sm:items-center sm:px-6 sm:py-16">
        <div className="hero-content relative w-full max-w-6xl text-center">
          <div className="mx-auto max-w-5xl px-1 py-4 sm:py-8">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.45em] text-cyan-200/80">
              {brand.shortName}
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl text-[clamp(2.8rem,7vw,7.2rem)] font-light leading-[0.84] tracking-[-0.07em] text-white">
              <span className="word-line block overflow-hidden text-white/78">
                <span className="reveal-word inline-block" style={{ "--delay": "0ms" }}>
                  The
                </span>{" "}
                <span className="reveal-word inline-block bg-gradient-to-r from-cyan-200 via-white to-teal-200 bg-clip-text text-transparent" style={{ "--delay": "120ms" }}>
                  future
                </span>{" "}
                <span className="reveal-word inline-block" style={{ "--delay": "240ms" }}>
                  of
                </span>{" "}
                <span className="reveal-word inline-block bg-gradient-to-r from-white via-cyan-100 to-teal-200 bg-clip-text text-transparent" style={{ "--delay": "360ms" }}>
                  development
                </span>
              </span>

              <span className="mt-4 block text-white/96">
                <span className="reveal-word inline-block" style={{ "--delay": "460ms" }}>
                  is
                </span>{" "}
                <span className="reveal-word inline-block font-[cursive] text-cyan-50" style={{ "--delay": "620ms" }}>
                  human
                </span>{" "}
                <span className="reveal-word inline-block text-cyan-300/90" style={{ "--delay": "780ms" }}>
                  +
                </span>{" "}
                <span
                  className="reveal-word inline-flex translate-y-[-0.06em] items-center rounded-full border border-cyan-300/40 bg-[linear-gradient(180deg,rgba(34,211,238,0.22),rgba(20,184,166,0.12))] px-4 py-1 text-[0.72em] font-semibold tracking-[0.18em] text-cyan-50 shadow-sm sm:px-5"
                  style={{ "--delay": "900ms" }}
                >
                  AI
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/82 sm:text-base lg:text-lg">
              We help you map the skills you need, track the skills you have, and close your gaps to thrive in a GenAI world.
            </p>

            <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
              <button
                type="button"
                aria-label="Book Discovery Call"
                className="w-full rounded-2xl border border-white/14 bg-transparent px-7 py-3.5 font-semibold text-white shadow-none transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5 sm:w-auto"
              >
                Book Discovery Call
              </button>
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-[0.72rem] uppercase tracking-[0.28em] text-white/58 sm:text-[0.78rem]">
              Trusted across 6+ ventures, built for fast delivery, premium execution, and measurable growth.
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          .hero-content {
            animation: contentFloat 6.5s ease-in-out infinite;
            will-change: transform;
          }

          .hero-orbit {
            animation: orbitPulse 10s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .reveal-word {
            opacity: 0;
            transform: translate3d(0, 0.45em, 0);
            animation: wordReveal 850ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: var(--delay);
            will-change: transform, opacity;
          }

          @keyframes contentFloat {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, -6px, 0);
            }
          }

          @keyframes orbitPulse {
            0%,
            100% {
              transform: translate3d(-50%, 0, 0) scale(0.96);
              opacity: 0.62;
            }
            50% {
              transform: translate3d(-50%, 8px, 0) scale(1.04);
              opacity: 0.96;
            }
          }

          @keyframes wordReveal {
            0%,
            25% {
              opacity: 0;
              transform: translate3d(0, 0.45em, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-content,
            .hero-orbit,
            .reveal-word {
              animation: none !important;
              transform: none !important;
              opacity: 1 !important;
            }
          }
        `}
      </style>
    </section>
  );
}

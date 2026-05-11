import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const LazySpline = ({
  scene,
  className = "",
  style,
  scaleClassName = "",
  overlayClassName = "",
  onSplineLoad,
  disableOnMobile = true,
}) => {
  const hostRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMode = () => setIsMobile(window.innerWidth < 768);

    updateMode();
    window.addEventListener("resize", updateMode, { passive: true });

    return () => window.removeEventListener("resize", updateMode);
  }, []);

  useEffect(() => {
    if (disableOnMobile && isMobile) {
      return undefined;
    }

    const node = hostRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);

        if (!entry.isIntersecting) {
          setLoaded(false);
        }
      },
      { rootMargin: "250px 0px", threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [disableOnMobile, isMobile]);

  if (disableOnMobile && isMobile) {
    return null;
  }

  return (
    <div
      ref={hostRef}
      className={`absolute inset-0 overflow-hidden bg-[#05060a] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.14),transparent_60%)]" />

      {!inView && (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,0.96)_0%,rgba(10,10,10,0.96)_100%)]" />
      )}

      {inView && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 will-change-transform ${
            loaded ? "opacity-100" : "opacity-0"
          } ${scaleClassName}`}
        >
          <Suspense fallback={null}>
            <Spline
              scene={scene}
              onLoad={(spline) => {
                setLoaded(true);
                if (onSplineLoad) onSplineLoad(spline);
              }}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#000000",
                ...style,
              }}
            />
          </Suspense>
        </div>
      )}

      <div className={`absolute inset-0 pointer-events-none ${overlayClassName}`} />
    </div>
  );
};

export default LazySpline;



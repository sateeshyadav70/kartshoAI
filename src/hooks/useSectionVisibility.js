import { useEffect, useState } from "react";

export default function useSectionVisibility(ref, options = {}) {
  const { rootMargin = "200px 0px", threshold = 0.15 } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin, threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, rootMargin, threshold]);

  return isVisible;
}

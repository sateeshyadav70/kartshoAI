import { Link } from "react-router-dom";
import { brand } from "../data/siteBrand";

const BrandMark = ({ compact = false, className = "", linkClassName = "" }) => {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="flex h-11 w-11 overflow-hidden rounded-2xl bg-black/40 ring-1 ring-cyan-300/25">
        <img
          src="/image/Kartsho.jpeg"
          alt={`${brand.shortName} logo`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </span>

      <span className="leading-tight">
        <span className="block text-base font-bold tracking-[0.2em] uppercase text-white">
          {brand.shortName}
        </span>
        <span className="block text-[0.65rem] tracking-[0.18em] uppercase text-gray-400">
          {brand.sidetName}
        </span>
        {!compact && (
          <span className="block text-[0.68rem] tracking-[0.2em] text-white/55">
            {brand.tagline}
          </span>
        )}
      </span>
    </span>
  );

  return (
    <Link to="/" className={`inline-flex ${linkClassName}`}>
      {content}
    </Link>
  );
};

export default BrandMark;

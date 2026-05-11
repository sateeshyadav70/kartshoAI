import { Link } from "react-router-dom";
import BrandMark from "../../components/BrandMark";
import { brand } from "../../data/siteBrand";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#040404] px-6 pb-10 pt-24 text-white md:px-12">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-220px] top-[-260px] h-[700px] w-[700px] rounded-full bg-teal-600/20 blur-[200px]" />
        <div className="absolute bottom-[-260px] right-[-220px] h-[620px] w-[620px] rounded-full bg-teal-600/20 blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <BrandMark className="mb-5" />

            <p className="max-w-sm text-sm leading-6 text-white/65">
              {brand.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-teal-400/20 bg-teal-500/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-teal-200/80">
                Founded {brand.foundedYear}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-white/60">
                India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-sm">
            <p className="mb-2 font-semibold text-white">Quick Links</p>
            {brand.quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="block text-white/65 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 font-semibold text-white">Contact</p>
            <div className="space-y-3 text-sm text-white/65">
              <a href={`mailto:${brand.contact.email}`} className="block hover:text-white">
                {brand.contact.email}
              </a>
              <a href={`tel:${brand.contact.phonePrimary.replace(/\s+/g, "")}`} className="block hover:text-white">
                {brand.contact.phonePrimary}
              </a>
              <p>{brand.contact.phoneSecondary}</p>
              <p className="max-w-xs">{brand.contact.address}</p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="mb-3 font-semibold text-white">Let&apos;s Build</p>
            <p className="text-sm leading-6 text-white/65">
              Ready to explore a partnership, an AI build, or a digital growth sprint?
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/book"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-teal-600 px-4 py-3 text-sm font-semibold shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:scale-[1.03]"
              >
                Book Discovery Call
              </Link>
              <a
                href={`https://wa.me/${brand.contact.whatsapp.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        <div className="py-14 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-teal-300/70">
            {brand.tagline}
          </p>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Kartsho Enterprises is built for multi-industry scale.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/60">
            One operating system for digital marketing, legal tech, education, commerce, media, and counseling.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {brand.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-left"
              >
                <p className="text-xl font-semibold text-white">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row">
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <Link to="/team" className="transition hover:text-white">
              About
            </Link>
            <Link to="/services" className="transition hover:text-white">
              Ventures
            </Link>
            <Link to="/book" className="transition hover:text-white">
              Contact
            </Link>
          </div>

          <p>
            © 2026 {brand.companyName}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;



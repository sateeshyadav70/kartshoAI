import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { MessageSquarePlus } from "lucide-react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const AISmartExplore = lazy(() => import("./components/AI/AISmartExplore"));
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Content = lazy(() => import("./pages/Content"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Team = lazy(() => import("./pages/Team"));
const Socials = lazy(() => import("./pages/Socials"));
const BookCall = lazy(() => import("./pages/BookCall"));

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.style.backgroundColor = "#020306";
    body.style.backgroundColor = "#020306";
    body.style.color = "#f4f1ff";

    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-transparent text-white">
        <Navbar />
        <ScrollToTop />

        <main id="main-content">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case" element={<CaseStudies />} />
              <Route path="/content" element={<Content />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/socials" element={<Socials />} />
              <Route path="/book" element={<BookCall />} />
            </Routes>
          </Suspense>
        </main>

        {!isOpen ? (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(34,211,238,0.26)] transition hover:scale-[1.03] hover:shadow-[0_24px_70px_rgba(20,184,166,0.26)]"
          >
            <MessageSquarePlus size={18} />
            Explore Ventures
          </button>
        ) : null}

        <Suspense fallback={null}>
          {isOpen ? <AISmartExplore isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;


import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Lightbox from "./components/common/Lightbox";
import ProjectDetails from "./components/common/ProjectDetails";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Academic from "./components/sections/Academic";
import Contact from "./components/sections/Contact";
import { profile } from "./data/site";

const themeStyles = {
  dark: {
    pageBg: "bg-neutral-950", cardBg: "bg-neutral-900", text: "text-neutral-100", muted: "text-neutral-400",
    mutedDot: "bg-neutral-700", border: "border-neutral-800", trackBg: "bg-neutral-800", accent: "text-emerald-400",
    accentBg: "bg-emerald-950/40", accentSolidBg: "bg-emerald-600", timelineLine: "border-emerald-900", inputBg: "bg-neutral-900",
    hoverText: "hover:text-neutral-100", hoverAccent: "hover:text-emerald-400",
  },
  light: {
    pageBg: "bg-white", cardBg: "bg-white", text: "text-neutral-900", muted: "text-neutral-500",
    mutedDot: "bg-neutral-300", border: "border-neutral-200", trackBg: "bg-neutral-100", accent: "text-emerald-700",
    accentBg: "bg-emerald-50", accentSolidBg: "bg-emerald-600", timelineLine: "border-emerald-200", inputBg: "bg-white",
    hoverText: "hover:text-neutral-900", hoverAccent: "hover:text-emerald-700",
  },
};

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxProject, setLightboxProject] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const dark = theme === "dark";
  const c = themeStyles[theme];

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);

      const sections = Array.from(document.querySelectorAll("main section[id]"));
      const offset = 140;
      let current = null;

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (reachedBottom && sections.length > 0) {
        current = sections[sections.length - 1].id;
      } else {
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= offset) {
            current = section.id;
          }
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const openLightbox = (project) => {
    setLightboxProject(project);
    setZoom(1);
  };

  const openProjectDetails = (project) => setProjectDetails(project);

  const closeProjectDetails = () => setProjectDetails(null);

  const closeLightbox = () => {
    setLightboxProject(null);
    setZoom(1);
  };

  const zoomIn = () => setZoom((value) => Math.min(value + 0.5, 3));
  const zoomOut = () => setZoom((value) => Math.max(value - 0.5, 1));
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (id) => {
    window.setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;

      const firstSection = document.querySelector("main section[id]");

      if (section === firstSection) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        return;
      }

      const mobileHeader = document.querySelector("[data-mobile-header]");
      const headerOffset = mobileHeader
        ? mobileHeader.getBoundingClientRect().height + 16
        : 24;

      const targetTop = Math.max(
        0,
        section.getBoundingClientRect().top + window.scrollY - headerOffset
      );

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <div className={`min-h-screen ${c.pageBg} ${c.text} font-sans transition-colors duration-200`}>
      <Header
        c={c}
        dark={dark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setTheme={setTheme}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main className="lg:pl-56">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-14 lg:py-20">
          <Hero c={c} />
          <About c={c} />
          <Experience c={c} />
          <Projects
            c={c}
            onOpenLightbox={openLightbox}
            onOpenDetails={openProjectDetails}
          />
          <Skills c={c} />
          <Services c={c} />
          <Academic c={c} />
          <Contact c={c} dark={dark} />
        </div>
      </main>

      <Footer c={c} />

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <ProjectDetails
        project={projectDetails}
        c={c}
        onClose={closeProjectDetails}
        onOpenLightbox={openLightbox}
      />

      <Lightbox
        project={lightboxProject}
        zoom={zoom}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
        onClose={closeLightbox}
      />
    </div>
  );
}

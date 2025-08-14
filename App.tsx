import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AccessibilityPanel } from "./components/AccessibilityPanel";
import { CaseStudyDetail } from "./components/CaseStudyDetail";
import { AboutPage } from "./components/AboutPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { CaseStudyComunicaIn } from "./components/CaseStudyComunicaIn";
import { LanguageProvider } from "./components/LanguageContext";
import { AccessibilityProvider } from "./components/AccessibilityContext";

export default function App() {
  const [currentPage, setCurrentPage] = useState("about"); // Página inicial alterada para 'about'

  // Simple client-side routing
  const renderPage = () => {
    switch (currentPage) {
      case "case-comunica-in":
        return (
          <>
            <Navbar
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            <main role="main">
              <CaseStudyComunicaIn />
            </main>
            <Footer />
          </>
        );
      case "case-comunica-in-old":
        return (
          <>
            <Navbar
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            <main role="main">
              <CaseStudyDetail />
            </main>
            <Footer />
          </>
        );
      case "projetos":
        return (
          <>
            <Navbar
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            <ProjectsPage />
            <Footer />
          </>
        );
      case "about":
      default:
        return (
          <>
            <Navbar
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            <main role="main">
              <AboutPage />
            </main>
            <Footer />
          </>
        );
    }
  };

  // Override anchor tag behavior for internal navigation
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.href) {
        const url = new URL(target.href);
        if (url.pathname === "/case-comunica-in") {
          e.preventDefault();
          setCurrentPage("case-comunica-in");
        } else if (url.hash === "#sobre") {
          e.preventDefault();
          setCurrentPage("about");
        } else if (url.hash === "#projetos") {
          e.preventDefault();
          setCurrentPage("projetos");
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () =>
      document.removeEventListener("click", handleClick);
  }, []);

  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <div className="min-h-screen bg-background">
          {renderPage()}

          {/* Accessibility Panel */}
          <AccessibilityPanel />
        </div>
      </AccessibilityProvider>
    </LanguageProvider>
  );
}
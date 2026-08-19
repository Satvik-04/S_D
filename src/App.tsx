import { HashRouter, Routes, Route } from "react-router-dom";
import { Ambient, Nav, Footer, ScrollToTop, PageShell } from "./components/chrome";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Founder from "./pages/Founder";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-ink-950 text-fog">
        <Ambient />
        <Nav />
        <PageShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageShell>
        <Footer />
      </div>
    </HashRouter>
  );
}

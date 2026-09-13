import { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Extracurricular from "./components/Extracurricular";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import type { Project } from "./data/projects";

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-paper">
        <Background />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects projects={projects} onOpen={setSelected} />
            <Skills />
            <Experience />
            <Education />
            <Certifications />
            <Extracurricular />
            <Contact />
          </main>
          <Footer />
        </div>
        <AnimatePresence>
          {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
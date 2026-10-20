import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Predictive Process Capability Modelling",
    category: "MACHINE LEARNING",
    year: "2026",
    tech: ["Python", "Pandas", "Random Forest", "SPC"],
    description:
      "Built predictive models for manufacturing process capability using statistical analysis and machine learning on real production data.",
  },
  {
    number: "02",
    title: "Slovak to English PDF Translator",
    category: "NLP",
    year: "2026",
    tech: ["Python", "Flask", "OCR", "MarianMT"],
    description:
      "End-to-end PDF translation system using OCR and neural machine translation for Slovak language documents.",
    github: "https://github.com/muskansancheti/slovak_translator",
    live: "",
  },
  {
    number: "03",
    title: "WebGL2 Ray Tracing",
    category: "COMPUTER GRAPHICS",
    year: "2025",
    tech: ["WebGL2", "GLSL", "JavaScript"],
    description:
      "Real-time ray tracer implemented in WebGL2 with custom GLSL shaders for lighting and reflections.",
    github: "https://github.com/muskansancheti/3D-Graphics-Rendering-System",
  },
  {
    number: "04",
    title: "Fragment Shader Ray Tracing",
    category: "COMPUTER GRAPHICS",
    year: "2025",
    tech: ["WebGL2", "GLSL", "JavaScript"],
    description:
      "GPU-based ray tracer running entirely in fragment shaders for high-performance rendering.",
    github: "https://github.com/muskansancheti/GPU-Based-Ray-Tracer",
  },
  {
    number: "05",
    title: "Stock Direction Prediction",
    category: "MACHINE LEARNING",
    year: "2026",
    tech: ["Python", "Pandas", "Machine Learning"],
    description:
      "Machine learning model to predict stock price movement direction using historical market data.",
    github: "https://github.com/muskansancheti/ML-stock_market_prediction",
  },
  {
    number: "06",
    title: "AI Based Fitness Training System",
    category: "COMPUTER VISION",
    year: "2024",
    tech: ["Python", "OpenCV", "MediaPipe"],
    description:
      "Real-time pose estimation system for fitness tracking and exercise form analysis using computer vision.",
  },
];

const categories = ["ALL", "MACHINE LEARNING", "COMPUTER GRAPHICS", "NLP", "COMPUTER VISION"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="work">
      <div className="section-label">
        <span>02</span>
        <p>SELECTED WORK</p>
      </div>

      <div className="projects-intro">
        <h2>
          Things I've
          <br />
          <em>built.</em>
        </h2>

        <p>
          A collection of projects exploring computer vision,
          graphics, machine learning, statistical analysis
          and software development.
        </p>
      </div>

      <div className="project-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-list">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.article
              className="project-row"
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <div className="project-number">{project.number}</div>

              <div className="project-name">
                <h3>{project.title}</h3>
                <p><b>{project.category}</b></p>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-tech">
                <div className="tech-badges">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
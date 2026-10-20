const projects = [
  {
    number: "01",
    title: "PREDICTIVE PROCESS\nCAPABILITY MODELLING",
    category: "MACHINE LEARNING / STATISTICAL ANALYSIS",
    year: "2026",
    tech: "Python / Pandas / Random Forest / SPC",
    github: "",
  },

  {
    number: "02",
    title: "PDF\nTRANSLATOR",
    category: "NATURAL LANGUAGE PROCESSING",
    year: "2026",
    tech: "Python / Flask / OCR / MarianMT",
    github: "https://github.com/muskansancheti/slovak_translator",
  },

  {
    number: "03",
    title: "WEBGL2\nRAY TRACING",
    category: "COMPUTER GRAPHICS",
    year: "2025",
    tech: "WebGL2 / GLSL / JavaScript",
    github: "https://github.com/muskansancheti/3D-Graphics-Rendering-System",
  },
  {
  number: "04",
  title: "FRAGMENT SHADER\nRAY TRACING",
  category: "COMPUTER GRAPHICS",
  year: "2025",
  tech: "WebGL2 / GLSL / JavaScript",
  github: "https://github.com/muskansancheti/GPU-Based-Ray-Tracer",
},

  {
    number: "05",
    title: "STOCK\nDIRECTION PREDICTION",
    category: "MACHINE LEARNING",
    year: "2026",
    tech: "Python / Pandas / Machine Learning",
    github: "https://github.com/muskansancheti/ML-stock_market_prediction",
  },

  {
    number: "06",
    title: "FITNESS\nCOMPUTER VISION",
    category: "COMPUTER VISION",
    year: "2024",
    tech: "Python / OpenCV / MediaPipe",
    github: "",
  },
];

function Projects() {
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
          A collection of projects exploring
          computer vision, graphics, machine
          learning, statistical analysis and
          software development.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article
            className="project-row"
            key={project.number}
          >
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-name">
              <h3>
                {project.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>

              <p>{project.category}</p>
            </div>

            <div className="project-tech">
              <span>{project.tech}</span>

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
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
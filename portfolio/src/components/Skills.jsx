const groups = [
  {
    title: "LANGUAGES",
    skills: [
      "Python",
      "C",
      "C++",
      "JavaScript",
      "SQL",
    ],
  },

  {
    title: "AI / VISION",
    skills: [
      "Machine Learning",
      "OpenCV",
      "MediaPipe",
      "Computer Vision",
       "Scikit-learn",
        "Hugging Face Transformers",
        "EasyOCR"

    ],
  },

  {
    title: "GRAPHICS / WEB",
    skills: [
      "WebGL2",
      "GLSL",
      "React",
      "HTML / CSS",
    ],
  },

  {
    title: "TOOLS",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
    ],
  },
];

function Skills() {
  return (
    <section
      className="skills"
      id="skills"
    >

      <div className="section-label">

        <span>04</span>

        <p>TECHNICAL INDEX</p>

      </div>

      <div className="skills-heading">

        <h2>
          What I
          <br />
          <em>work with.</em>
        </h2>

      </div>

      <div className="skill-table">

        {groups.map((group, index) => (

          <div
            className="skill-group"
            key={group.title}
          >

            <div className="skill-group-number">
              0{index + 1}
            </div>

            <h3>
              {group.title}
            </h3>

            <div className="skill-items">

              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;
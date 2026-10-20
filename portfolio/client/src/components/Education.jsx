const education = [
  {
    year: "2024 — PRESENT",
    title: "B.Tech — Computer Science & Engineering",
    institution: "JK Lakshmipat University",
    type: "EDUCATION",
    description:
      "Currently pursuing Computer Science Engineering with a focus on programming, algorithms, databases, machine learning and computer systems.",
  },

  {
    year: "2025",
    title: "Semester Exchange",
    institution: "Indian Institute of Technology Kanpur",
    type: "ACADEMIC EXCHANGE",
    description:
      "Completed a semester exchange at IIT Kanpur, studying Data Structures & Algorithms, Computer Graphics and Introduction to Management.",
  },

  {
    year: "2026",
    title: "Predictive Process Capability Modelling",
    institution: "NBC Bearings",
    type: "INTERNSHIP",
    description:
      "Worked on process capability analysis and predictive modelling using manufacturing process data, with a focus on Cpk and statistical quality analysis.",
  },
];

function Education() {
  return (
    <section className="education" id="experience">

      <div className="section-label">
        <span>05</span>
        <p>EDUCATION / EXPERIENCE</p>
      </div>

      <div className="education-heading">
        <h2>
          Where I've
          <br />
          <em>been.</em>
        </h2>

        <p>
          A timeline of the places, people and
          experiences that have shaped my journey
          so far.
        </p>
      </div>

      <div className="timeline">

        {education.map((item, index) => (

          <article className="timeline-item" key={index}>

            <div className="timeline-year">
              {item.year}
            </div>

            <div className="timeline-dot">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="timeline-content">

              <span className="timeline-type">
                {item.type}
              </span>

              <h3>
                {item.title}
              </h3>

              <h4>
                {item.institution}
              </h4>

              <p>
                {item.description}
              </p>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Education;
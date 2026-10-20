import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025 — Present",
    title: "B.Tech Computer Science Engineering",
    organization: "JK Lakshmipat University",
    description:
      "Pursuing Computer Science Engineering with a focus on problem solving, machine learning, computer graphics and software development.",
    type: "Education",
  },

  {
    year: "Semester Exchange",
    title: "Academic Exchange",
    organization: "IIT Kanpur",
    description:
      "Completed a semester exchange and studied Data Structures & Algorithms, Computer Graphics and Introduction to Management while experiencing campus life at IIT Kanpur.",
    type: "Education",
  },

  {
    year: "2026",
    title: "Predictive Process Capability Modelling",
    organization: "NBC Bearings",
    description:
      "Worked on manufacturing process data, capability analysis and predictive modelling using historical process measurements.",
    type: "Experience",
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-tag">
            MY JOURNEY
          </p>

          <h2>
            Education &
            <span> experience.</span>
          </h2>

        </div>

        <div className="timeline">

          {timeline.map((item, index) => (

            <motion.div
              className="timeline-item"
              key={item.title}

              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
              }}
            >

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <div className="timeline-header">

                  <span>
                    {item.year}
                  </span>

                  <small>
                    {item.type}
                  </small>

                </div>

                <h3>
                  {item.title}
                </h3>

                <h4>
                  {item.organization}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;
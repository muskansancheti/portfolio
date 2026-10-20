import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🎓",
    title: "IIT Kanpur Semester Exchange",
    description:
      "Completed an academic semester exchange at IIT Kanpur.",
  },

  {
    icon: "🏢",
    title: "NBC Bearings Internship",
    description:
      "Worked on predictive process capability modelling and manufacturing data analysis.",
  },

  {
    icon: "💻",
    title: "Competitive Programming",
    description:
      "Actively developing problem-solving and algorithmic thinking through programming contests.",
  },

  {
    icon: "📜",
    title: "Certifications",
    description:
      "Technical certifications and learning achievements will be added here.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">

      <div className="section-container">

        <div className="section-heading-row">

          <div>
            <p className="section-tag">
              ACHIEVEMENTS
            </p>

            <h2>
              Milestones &
              <span> learning.</span>
            </h2>
          </div>

        </div>

        <div className="achievement-grid">

          {achievements.map((item, index) => (

            <motion.div
              className="achievement-card"
              key={item.title}

              initial={{
                opacity: 0,
                y: 25,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: index * 0.1,
              }}
            >

              <div className="achievement-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

              <button>
                View Details →
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;
import { motion } from "framer-motion";

const groups = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "C++", level: 90 },
      { name: "C", level: 80 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "AI / VISION",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "OpenCV", level: 80 },
      { name: "MediaPipe", level: 70 },
      { name: "Scikit-learn", level: 60 },
    ],
  },
  {
    title: "GRAPHICS / WEB",
    skills: [
      { name: "React", level: 75 },
      { name: "WebGL2", level: 75 },
      { name: "GLSL", level: 72 },
      { name: "HTML / CSS", level: 85 },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 92 },
      { name: "Google Colab", level: 85 },
    ],
  },
];

function CircularProgress({ level, delay = 0 }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg width="90" height="90" viewBox="0 0 90 90">
        {/* Background circle */}
        <circle
          cx="45"
          cy="45"
          r={radius}
          fill="none"
          stroke="var(--light-grey)"
          strokeWidth="6"
        />
        {/* Animated progress circle */}
        <motion.circle
          cx="45"
          cy="45"
          r={radius}
          fill="none"
          stroke="var(--blue)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            delay: delay,
            ease: "easeOut",
          }}
          transform="rotate(-90 45 45)"
        />
      </svg>
      <span className="circular-percent">{level}%</span>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills" id="skills">
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

      <div className="skills-grid">
        {groups.map((group, groupIndex) => (
          <motion.div
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
          >
            <div className="skill-card-header">
              <span className="skill-card-number">0{groupIndex + 1}</span>
              <h3>{group.title}</h3>
            </div>

            <div className="skill-card-body circular">
              {group.skills.map((skill, index) => (
                <div className="skill-circular-item" key={skill.name}>
                  <CircularProgress
                    level={skill.level}
                    delay={0.15 + index * 0.08}
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
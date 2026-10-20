function About() {
  return (
    <section
      className="about"
      id="about"
    >

      <div className="section-label">

        <span>03</span>

        <p>ABOUT ME</p>

      </div>

      <div className="about-grid">

        <div className="about-heading">

          <h2>
            Student.
            <br />
            Builder.
            <br />
            <em>Curious.</em>
          </h2>

        </div>

        <div className="about-text">

          <p className="large-text">
            I'm a Computer Science Engineering
            student at JK Lakshmipat University,
            interested in building technology that
            is both useful and interesting.
          </p>

          <p>
            My interests currently revolve around
            machine learning, computer vision,
            computer graphics and algorithms.
            I enjoy understanding how things work
            and then building them myself.
          </p>

          <p>
            I've also had the opportunity to study
            at IIT Kanpur through a semester exchange
            and work with NBC Bearings on predictive
            process capability modelling.
          </p>

          <div className="cv-links">
            <div>
          <a
            className="text-link"
            href={`${import.meta.env.VITE_API_URL}/api/cv/pdf`}
          >
            Download PDF CV →
          </a>
            <p/>
          <a
            className="text-link"
            href={`${import.meta.env.VITE_API_URL}/api/cv/docx`}
          >
            Download DOCX CV →
          </a>
          </div>
        </div>

        </div>
        

      </div>

    </section>
  );
}

export default About;
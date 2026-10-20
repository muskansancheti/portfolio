const certifications = [
  {
    number: "01",
    title: "CERTIFICATION",
    organization: "Programming for Everybody (Getting Started with Python)",
    year: "2024",
    link: "https://coursera.org/share/3530c942a2cb9723276c90c76eb1d77a",
  },
  {
    number: "02",
    title: "CERTIFICATION",
    organization: "Red Hat System Administration I",
    year: "2025",
    link: "https://www.credly.com/badges/a5e17e08-9331-49ef-98ac-67f90a396d48/public_url",
  },
  {
    number: "03",
    title: "INTERNSHIP CERTIFICATE",
    organization: "NBC Bearings - Internship , National",
    year: "2026",
    link: "https://go.fliplink.me/view/66E8AA32-75C8-45F3-874F-1167E0967ACD",
  },
];

function Certifications() {
  return (
    <section
      className="certifications"
      id="achievements"
    >

      <div className="section-label">

        <span>06</span>

        <p>CERTIFICATIONS / ACHIEVEMENTS</p>

      </div>

      <div className="cert-heading">

        <h2>
          More than
          <br />
          <em>code.</em>
        </h2>

        <p>
          Certifications and
          achievements that add to the journey.
        </p>

      </div>

      <div className="cert-list">

        {certifications.map((item) => (

          <div
            className="cert-row"
            key={item.number}
          >

            <span className="cert-number">
              {item.number}
            </span>

            <div className="cert-name">

              <span>
                {item.title}
              </span>

              <h3>
                {item.organization}
              </h3>

            </div>

            <span className="cert-year">
              {item.year}
            </span>

            <a
            className="cert-arrow"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const goToWork = () => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">

      <div className="hero-top">

        <span>
          01 — PORTFOLIO / 2026
        </span>

        <span>
          JAIPUR, INDIA
        </span>

      </div>

      <div className="hero-main">

        <div className="hero-title">

          <p className="eyebrow">
            COMPUTER SCIENCE / DEVELOPER
          </p>

          <h1>
            MUSKAN
            <br />
            <span>SANCHETI</span>
          </h1>

        </div>

        <div className="hero-photo">

          <img
            src="/profile.jpg"
            alt="Muskan Sancheti"
          />

        </div>

      </div>

      <div className="hero-bottom">

        <div className="hero-description">

          <p>
            I build things at the intersection of
            software, machine learning and visual
            computing.
          </p>

          <div className="typing">

            <span>Currently exploring → </span>

            <TypeAnimation
              sequence={[
                "Machine Learning",
                1800,
                "Computer Vision",
                1800,
                "Computer Graphics",
                1800,
                "Algorithms",
                1800,
                "Competitive Programming",1800,
              ]}
              speed={45}
              repeat={Infinity}
            />

          </div>

        </div>

        <button
          className="work-button"
          onClick={goToWork}
        >
          Explore my work
          <span>↓</span>
        </button>

      </div>

    </section>
  );
}

export default Hero;
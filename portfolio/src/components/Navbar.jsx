import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">

      <div className="nav-logo">
        MS<span>.</span>
      </div>

      <div className="nav-center">
        <button onClick={() => scrollTo("work")}>
          Work
        </button>

        <button onClick={() => scrollTo("about")}>
          About
        </button>

        <button onClick={() => scrollTo("experience")}>
          Experience
        </button>

        <button onClick={() => scrollTo("contact")}>
          Contact
        </button>
      </div>

      <div className="nav-right">

        <a
          href="https://github.com/muskansancheti"
          target="_blank"
          rel="noreferrer"
          className="nav-social"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/muskan-sancheti-577b1131b/"
          target="_blank"
          rel="noreferrer"
          className="nav-social"
        >
          LinkedIn
        </a>

        <button
          className="theme"
          onClick={toggleTheme}
        >
          {dark ? "☼" : "◐"}
        </button>

        <button
          className="nav-contact"
          onClick={() => scrollTo("contact")}
        >
          Let's talk →
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
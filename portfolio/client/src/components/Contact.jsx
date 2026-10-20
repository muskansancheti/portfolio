import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Unable to connect to server.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-top">
        <div className="section-label">
          <span>07</span>
          <p>CONTACT</p>
        </div>

        <p className="contact-location">
          OPEN TO INTERNSHIPS / PROJECTS
        </p>
      </div>

      <div className="contact-title">
        <h2>
          HAVE AN
          <br />
          <em>IDEA?</em>
        </h2>

        <h2>
          LET'S TALK<span>.</span>
        </h2>
      </div>

      <div className="contact-content">
        <div>
          <p>
            Whether it's a project, internship
            opportunity or just a conversation
            about technology — feel free to reach out.
          </p>

          <a href="mailto:muskansancheti5@gmail.com">
            muskansancheti5@gmail.com →
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="MESSAGE"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            SEND MESSAGE →
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
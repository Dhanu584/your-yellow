import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <main className="contact-page">

      {/* =========================
          CONTACT / JOIN SECTION
      ========================= */}
      <section className="contact-section">

        {/* Center Paper */}
        <div className="contact-paper">

          <div className="contact-paper-content">

            <p className="contact-small-title">
              YOUR YELLOW
            </p>

            <h1 className="contact-title">
              join us!
            </h1>

            <p className="contact-subtitle">
              want to create, explore & make something new?
            </p>

            {/* Form */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Name */}
              <div className="contact-field">
                <label htmlFor="name">name</label>

                <input
                  id="name"
                  type="text"
                  required
                />
              </div>

              {/* Email */}
              <div className="contact-field">
                <label htmlFor="email">email</label>

                <input
                  id="email"
                  type="email"
                  required
                />
              </div>

              {/* Message */}
              <div className="contact-field contact-message-field">
                <label htmlFor="message">message</label>

                <textarea
                  id="message"
                  rows="2"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="contact-submit"
              >
                join us ↗
              </button>

            </form>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-instagram"
            >
              Instagram ↗
            </a>

          </div>
        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="contact-footer">

        <div className="footer-top">

          <div className="footer-brand">

            <span className="footer-brand-script">
              Your Yellow
            </span>

            <span className="footer-brand-small">
              The Dopamine Boost
            </span>

          </div>


          <div className="footer-links">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>

            <a href="mailto:hello@youryellow.in">
              Email ↗
            </a>

          </div>

        </div>


        <div className="footer-line"></div>


        <div className="footer-bottom">

          <p>
            made for girls with too many hobbies.
          </p>

          <p>
            © 2026 Your Yellow
          </p>

        </div>

      </footer>

    </main>
  );
};

export default Contact;
import { useState } from "react";
import Reveal from "../components/Reveal";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "https://formsubmit.co/ajax/jaskeerat.rai@ucalgary.ca";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({
    type: "idle",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onFieldChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Inquiry",
          message: formData.message,
          _subject: `Portfolio Inquiry: ${formData.subject || "New Message from Website"}`
        })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus({
        type: "success",
        message: "Thanks for reaching out. Your message was sent successfully."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Could not send the form right now. Please email jaskeerat.rai@ucalgary.ca directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section page-shell">
      <div className="container narrow">
        <Reveal className="section-head page-head">
          <p className="eyebrow">Contact</p>
          <h1>Let us build something impactful.</h1>
          <p>
            I am actively seeking Summer 2026 co-op opportunities in software engineering, data
            engineering, and analytics.
          </p>
        </Reveal>

        <Reveal className="contact-card">
          <div className="contact-grid">
            <article className="contact-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:jaskeerat.rai@ucalgary.ca">jaskeerat.rai@ucalgary.ca</a>
              </p>
            </article>
            <article className="contact-item">
              <h3>Phone</h3>
              <p>
                <a href="tel:+18257351377">825-735-1377</a>
              </p>
            </article>
            <article className="contact-item">
              <h3>Location</h3>
              <p>Calgary, Alberta</p>
            </article>
            <article className="contact-item">
              <h3>Resume</h3>
              <p>
                <a href="/resume/Jaskeerat-Rai-Resume.pdf" target="_blank" rel="noreferrer">
                  Open PDF Resume
                </a>
              </p>
            </article>
            <article className="contact-item">
              <h3>LinkedIn</h3>
              <p>
                <a href="https://www.linkedin.com/in/jaskeeratr22/" target="_blank" rel="noreferrer">
                  linkedin.com/in/jaskeeratr22
                </a>
              </p>
            </article>
            <article className="contact-item">
              <h3>GitHub</h3>
              <p>
                <a href="https://github.com/Jaskeeratr" target="_blank" rel="noreferrer">
                  github.com/Jaskeeratr
                </a>
              </p>
            </article>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-grid">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onFieldChange}
                  required
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onFieldChange}
                  required
                  placeholder="your@email.com"
                />
              </label>
              <label className="full">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={onFieldChange}
                  placeholder="Opportunity, collaboration, or project discussion"
                />
              </label>
              <label className="full">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onFieldChange}
                  rows={6}
                  required
                  placeholder="Tell me about the role, project, or opportunity."
                />
              </label>
            </div>

            {status.type !== "idle" ? (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            ) : null}

            <div className="contact-actions">
              <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <a className="btn btn-secondary" href="mailto:jaskeerat.rai@ucalgary.ca">
                Email Directly
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

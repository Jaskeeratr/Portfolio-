import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import StatCard from "../components/StatCard";
import { projects } from "../data/projects";
import { skillGroups, statCards } from "../data/siteContent";

const rotatingRoles = [
  "Data Engineering",
  "Full-Stack Development",
  "Backend Systems",
  "AI Product Integration"
];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((index) => (index + 1) % rotatingRoles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">Software Engineering Student | University of Calgary</p>
            <h1>Jaskeerat Rai</h1>
            <p className="lead">
              I build production-ready data systems and full-stack experiences that solve real
              business problems. I am currently pursuing a <strong>Summer 2026 co-op</strong> in
              software development, data engineering, or analytics.
            </p>
            <p className="role-line">
              Specializing in <span className="role-rotator">{rotatingRoles[roleIndex]}</span>
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/projects">
                Explore Projects
              </Link>
              <a
                className="btn btn-secondary"
                href="/resume/Jaskeerat-Rai-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </div>
            <ul className="quick-facts">
              <li>Calgary, AB</li>
              <li>
                <a href="mailto:jaskeerat.rai@ucalgary.ca">jaskeerat.rai@ucalgary.ca</a>
              </li>
              <li>
                <a href="tel:+18257351377">825-735-1377</a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="hero-visual">
            <img
              src="/images/hero-illustration.svg"
              alt="Dashboard-style data and product illustration"
            />
            <div className="floating-card top-card">
              <h3>Production Delivery</h3>
              <p>Built and shipped 3 web applications end-to-end in a real organization.</p>
            </div>
            <div className="floating-card bottom-card">
              <h3>Pipeline Scale</h3>
              <p>Automated ETL workflows processing 500K+ records per monthly run.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="stats section section-tight">
        <div className="container stats-grid">
          {statCards.map((card) => (
            <Reveal key={card.label}>
              <StatCard {...card} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about section">
        <div className="container about-grid">
          <Reveal className="about-image">
            <img
              src="/images/profile-pattern.svg"
              alt="Decorative profile panel with initials"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="about-copy">
            <p className="eyebrow">About</p>
            <h2>Shipping measurable impact through software and data.</h2>
            <p>
              I focus on designing systems that are both technically strong and product-aware. My
              work combines backend engineering, automated pipelines, and user-facing product
              thinking so teams can move faster with confidence.
            </p>
            <p>
              From AI evaluation systems to analytics infrastructure, I prioritize reliability,
              transparency, and execution speed.
            </p>
            <div className="about-tags">
              <span>End-to-End Shipping</span>
              <span>API Design</span>
              <span>Data Reliability</span>
              <span>Product Mindset</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="projects section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Featured Work</p>
            <h2>Projects built with clear architecture and outcomes.</h2>
          </Reveal>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal className="section-cta-wrap">
            <Link className="btn btn-primary" to="/projects">
              View All Project Pages
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="skills section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Technical Stack</p>
            <h2>Tools I use to build across product, data, and AI.</h2>
          </Reveal>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <Reveal key={group.title}>
                <article className="skill-group">
                  <h3>{group.title}</h3>
                  <div className="chip-wrap">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-preview">
        <div className="container">
          <Reveal className="contact-card">
            <p className="eyebrow">Open to Opportunities</p>
            <h2>Looking for Summer 2026 co-op roles.</h2>
            <p>
              If your team is building product or data-heavy systems, I would love to contribute.
            </p>
            <div className="contact-actions">
              <Link className="btn btn-primary" to="/contact">
                Contact Me
              </Link>
              <Link className="btn btn-secondary" to="/experience">
                View Experience
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

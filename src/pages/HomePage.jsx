import { useEffect, useState } from "react";
import { ArrowRight, FileText, Mail, RadioTower } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectVisual from "../components/ProjectVisual";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { projects } from "../data/projects";
import { recruiterHighlights, skillGroups, statCards } from "../data/siteContent";

const rotatingRoles = [
  "Data Engineering",
  "Full-Stack Development",
  "Backend Systems",
  "AI Product Integration"
];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const featuredProjects = projects.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((index) => (index + 1) % rotatingRoles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-pro">
      <section className="section page-shell home-pro-hero">
        <div className="container home-pro-hero-grid">
          <Reveal className="home-pro-copy" delay={60}>
            <p className="eyebrow">Software Engineering Student | University of Calgary</p>
            <h1>Jaskeerat Rai</h1>
            <p className="home-pro-role">
              Specializing in <strong>{rotatingRoles[roleIndex]}</strong>
            </p>
            <p className="home-pro-lead">
              I build production-ready software and data systems that solve real business
              problems. I am actively pursuing a <strong>Summer 2026 co-op</strong> in software
              development, data engineering, or analytics.
            </p>
            <div className="home-pro-actions">
              <Link className="btn btn-primary" to="/projects">
                <RadioTower size={17} aria-hidden="true" />
                Explore Projects
              </Link>
              <a
                className="btn btn-secondary"
                href="/resume/Jaskeerat-Rai-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={17} aria-hidden="true" />
                View Resume
              </a>
            </div>
            <div className="home-pro-links">
              <a href="mailto:jaskeerat.rai@ucalgary.ca">jaskeerat.rai@ucalgary.ca</a>
              <a href="tel:+18257351377">825-735-1377</a>
              <a href="https://www.linkedin.com/in/jaskeeratr22/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal className="home-pro-visual" delay={140}>
            <div className="home-pro-scene">
              <div className="home-pro-layer home-pro-layer-back" />
              <div className="home-pro-layer home-pro-layer-mid" />
              <img
                className="home-pro-scene-image"
                src="/images/hero-illustration.svg"
                alt="Data product dashboard visualization"
              />
              <article className="home-pro-float-card top">
                <h3>Production Delivery</h3>
                <p>Shipped full-stack products end-to-end with measurable impact.</p>
              </article>
              <article className="home-pro-float-card bottom">
                <h3>Pipeline Scale</h3>
                <p>Automated ETL workflows processing 500K+ records per monthly cycle.</p>
              </article>
              <div className="home-pro-code-panel" aria-hidden="true">
                <span>pipeline.run()</span>
                <span>score.match = 92%</span>
                <span>deploy.status = live</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section home-pro-stats">
        <div className="container">
          <div className="home-pro-stat-grid">
            {statCards.map((card, index) => (
              <Reveal key={card.label} delay={index * 70}>
                <article className="home-pro-stat-card">
                  <p className="value">
                    {card.value}
                    {card.suffix}
                  </p>
                  <p className="label">{card.label}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-pro-projects">
        <div className="container">
          <Reveal className="home-pro-section-head">
            <p className="eyebrow">Featured Work</p>
            <h2>Portfolio projects with architecture and measurable outcomes.</h2>
          </Reveal>

          <div className="home-pro-project-grid">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 90}>
                <TiltCard className="home-pro-project-card" strength={5}>
                  <ProjectVisual project={project} />
                  <div className="home-pro-project-body">
                    <h3>{project.name}</h3>
                    <p>{project.tagline}</p>
                    <p className="stack">{project.stack.join(" | ")}</p>
                    <div className="home-pro-project-actions">
                      <Link className="btn btn-secondary" to={`/projects/${project.slug}`}>
                        <ArrowRight size={16} aria-hidden="true" />
                        View Project
                      </Link>
                      {project.demoUrl ? (
                        <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                          <RadioTower size={16} aria-hidden="true" />
                          Live Demo
                        </a>
                      ) : (
                        <a className="btn btn-primary" href={project.repoUrl} target="_blank" rel="noreferrer">
                          <ArrowRight size={16} aria-hidden="true" />
                          Repository
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-pro-focus">
        <div className="container home-pro-focus-grid">
          <Reveal className="home-pro-highlights">
            <p className="eyebrow">How I Work</p>
            <h2>Reliable execution, clear communication, and measurable delivery.</h2>
            <ul>
              {recruiterHighlights.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="home-pro-skills" delay={120}>
            <p className="eyebrow">Technical Stack</p>
            <h2>Cross-stack capability map.</h2>
            <div className="home-pro-skill-groups">
              {skillGroups.map((group) => (
                <article key={group.title} className="home-pro-skill-group">
                  <h3>{group.title}</h3>
                  <div className="home-pro-chip-wrap">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section home-pro-cta">
        <div className="container">
          <Reveal className="home-pro-cta-card">
            <p className="eyebrow">Open to Opportunities</p>
            <h2>Looking for Summer 2026 co-op roles.</h2>
            <p>
              If your team is building data-heavy or product-focused systems, I would love to
              contribute.
            </p>
            <div className="home-pro-actions">
              <Link className="btn btn-primary" to="/contact">
                <Mail size={17} aria-hidden="true" />
                Contact Me
              </Link>
              <Link className="btn btn-secondary" to="/experience">
                <ArrowRight size={17} aria-hidden="true" />
                View Experience
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

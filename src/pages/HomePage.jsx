import { lazy, Suspense } from "react";
import { ArrowRight, FileText, Mail, RadioTower } from "lucide-react";
import { Link } from "react-router-dom";
import KineticRoleText from "../components/KineticRoleText";
import PinnedProjectStory from "../components/PinnedProjectStory";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { recruiterHighlights, skillGroups, statCards } from "../data/siteContent";

const HeroSystemScene = lazy(() => import("../components/HeroSystemScene"));

export default function HomePage() {
  return (
    <div className="home-pro">
      <section className="section page-shell home-pro-hero">
        <div className="container home-pro-hero-grid">
          <Reveal className="home-pro-copy" delay={60}>
            <p className="eyebrow">Software Engineering Student | University of Calgary</p>
            <h1>Jaskeerat Rai</h1>
            <p className="home-pro-role">
              Building <KineticRoleText />
            </p>
            <p className="home-pro-positioning">
              Software engineering student building reliable data-heavy systems. Seeking Summer
              2026 software, backend, data engineering, or ML co-op roles.
            </p>
            <p className="home-pro-lead">
              I build production-grade pipelines, APIs, automation, and full-stack products with
              clear proof: validated data, shipped systems, measured speedups, and model lift.
            </p>
            <div className="hero-proof-chips" aria-label="Proof points">
              <span>500K+ records/run</span>
              <span>3 production systems</span>
              <span>66.8% ML accuracy</span>
              <span>1,000+ QA outputs</span>
            </div>
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
              <a href="https://github.com/Jaskeeratr" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal className="home-pro-visual" delay={140}>
            <div className="home-pro-scene">
              <div className="home-pro-layer home-pro-layer-back" />
              <div className="home-pro-layer home-pro-layer-mid" />
              <Suspense fallback={null}>
                <HeroSystemScene />
              </Suspense>
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

      <PinnedProjectStory projects={projects} />

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

import { lazy, Suspense } from "react";
import { ArrowRight, FileText, Mail, RadioTower } from "lucide-react";
import { Link } from "react-router-dom";
import KineticRoleText from "../components/KineticRoleText";
import PinnedProjectStory from "../components/PinnedProjectStory";
import Reveal from "../components/Reveal";
import SkillsConstellation from "../components/SkillsConstellation";
import { featuredProjects } from "../data/projects";
import { recruiterHighlights, skillGroups, statCards } from "../data/siteContent";

const CinematicHeroScene = lazy(() => import("../components/CinematicHeroScene"));

export default function HomePage() {
  return (
    <div className="home-pro">
      <section className="section page-shell home-pro-hero">
        <div className="container home-pro-hero-grid">
          <Reveal className="home-pro-copy" eager>
            <p className="eyebrow">4th-Year Software Engineering | University of Calgary | May 2028</p>
            <h1>Jaskeerat Rai</h1>
            <p className="home-pro-role">
              Building <KineticRoleText />
            </p>
            <p className="home-pro-positioning">
              I build full-stack AI, ML, and data systems, and the infrastructure to ship them.
            </p>
            <p className="home-pro-lead">
              Open to Summer 2027 internship and co-op roles in software, backend, data, or ML
              engineering.
            </p>
            <div className="hero-proof-chips" aria-label="Proof points">
              <span>2 live AI products</span>
              <span>Terraform on AWS</span>
              <span>59x faster pitch analysis</span>
              <span>11K-line C++ simulation</span>
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

          <Reveal className="home-pro-visual" eager>
            <div className="home-pro-scene">
              <div className="home-pro-layer home-pro-layer-back" />
              <div className="home-pro-layer home-pro-layer-mid" />
              <Suspense fallback={null}>
                <CinematicHeroScene />
              </Suspense>
              <img
                className="home-pro-scene-image"
                src="/images/hero-illustration.svg"
                alt="Data product dashboard visualization"
              />
              <article className="home-pro-float-card top">
                <h3>Live Products</h3>
                <p>GapCheck and SurSadhana AI are deployed and public.</p>
              </article>
              <article className="home-pro-float-card bottom">
                <h3>Infrastructure as Code</h3>
                <p>ECS Fargate, RDS, and ALB in Terraform, with security scans in CI.</p>
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

      <PinnedProjectStory projects={featuredProjects} />

      <section className="section home-pro-focus">
        <div className="container home-pro-focus-grid">
          <Reveal className="home-pro-highlights">
            <p className="eyebrow">About</p>
            <h2>Fourth-year software engineering student at the University of Calgary.</h2>
            <p className="home-pro-about">
              I like owning a system end to end: designing the schema and API, building the UI,
              writing the Terraform, and adding the tests that prove it works. My projects span
              AI job matching, audio ML, sports prediction, simulation, and data pipelines. Outside
              of code, I co-lead the Sikh Student Association at UCalgary.
            </p>
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
            <h2>Tools I use.</h2>
            <SkillsConstellation groups={skillGroups} />
          </Reveal>
        </div>
      </section>

      <section className="section home-pro-cta">
        <div className="container">
          <Reveal className="home-pro-cta-card">
            <p className="eyebrow">Open to Opportunities</p>
            <h2>Open to Summer 2027 internship and co-op roles.</h2>
            <p>
              If your team is building data-heavy or AI-powered products, I'd love to talk.
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

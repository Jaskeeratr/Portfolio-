import { ArrowLeft, Code2, ExternalLink, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProjectVisual from "../components/ProjectVisual";
import Reveal from "../components/Reveal";
import { getProjectBySlug } from "../data/projects";

const projectThemes = {
  gapcheck: {
    kicker: "AI Matching Platform",
    accent: "#1ec8a5",
    glow: "rgba(30, 200, 165, 0.36)",
    gradient: "linear-gradient(130deg, rgba(15, 56, 66, 0.9), rgba(11, 28, 46, 0.84))"
  },
  "alberta-energy-data-pipeline": {
    kicker: "Data Infrastructure",
    accent: "#ff9f5a",
    glow: "rgba(255, 159, 90, 0.34)",
    gradient: "linear-gradient(130deg, rgba(62, 44, 22, 0.9), rgba(23, 30, 43, 0.84))"
  },
  "macro-finder": {
    kicker: "Consumer Product",
    accent: "#82d67f",
    glow: "rgba(130, 214, 127, 0.32)",
    gradient: "linear-gradient(130deg, rgba(27, 57, 38, 0.9), rgba(19, 32, 46, 0.84))"
  },
  "premier-league-predictor": {
    kicker: "Machine Learning Pipeline",
    accent: "#6fb3ff",
    glow: "rgba(111, 179, 255, 0.32)",
    gradient: "linear-gradient(130deg, rgba(26, 41, 72, 0.9), rgba(25, 27, 48, 0.84))"
  }
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="section page-shell">
        <div className="container narrow">
          <Reveal>
            <p className="eyebrow">Project Not Found</p>
            <h1>That project page does not exist.</h1>
            <p>The link may be outdated or the project was moved.</p>
            <Link className="btn btn-primary" to="/projects">
              Back to Projects
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  const theme = projectThemes[project.slug] ?? {
    kicker: "Engineering Build",
    accent: "#23b2ff",
    glow: "rgba(35, 178, 255, 0.32)",
    gradient: "linear-gradient(130deg, rgba(15, 39, 60, 0.9), rgba(11, 28, 46, 0.84))"
  };

  return (
    <section className="section page-shell project-detail-page">
      <div
        className="container project-detail-shell"
        style={{
          "--project-accent": theme.accent,
          "--project-glow": theme.glow,
          "--project-gradient": theme.gradient
        }}
      >
        <Reveal className="project-story-hero" delay={50}>
          <div className="project-story-copy">
            <p className="eyebrow">Project Deep Dive | {theme.kicker}</p>
            <h1>{project.name}</h1>
            <p className="project-story-tagline">{project.tagline}</p>
            <div className="project-stack-chips">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="detail-actions top-actions">
              {project.demoUrl ? (
                <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} aria-hidden="true" />
                  Live Demo
                </a>
              ) : (
                <span className="repo-coming-soon">Live demo link will be added soon</span>
              )}
              {project.repoUrl ? (
                <a className="btn btn-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
                  <Code2 size={16} aria-hidden="true" />
                  View Repository
                </a>
              ) : (
                <span className="repo-coming-soon">Repository link will be added soon</span>
              )}
              {project.caseStudyPdf ? (
                <a className="btn btn-secondary" href={project.caseStudyPdf} target="_blank" rel="noreferrer">
                  <FileText size={16} aria-hidden="true" />
                  Case Study PDF
                </a>
              ) : null}
            </div>
          </div>

          <div className="project-story-visual">
            <div className="project-hero-backdrop" aria-hidden="true" />
            <ProjectVisual project={project} className="project-hero" />
            <div className="project-stat-floats" aria-hidden="true">
              {project.resultsSnapshot.slice(0, 2).map((item) => (
                <article key={item.label} className="project-stat-float">
                  <p>{item.value}</p>
                  <h3>{item.label}</h3>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="section-head page-head" delay={120}>
          <p className="eyebrow">Project Narrative</p>
          <h2>Built for measurable outcomes, not vanity features.</h2>
          <p>{project.summary}</p>
        </Reveal>

        <Reveal className="results-snapshot" delay={180}>
          {project.resultsSnapshot.map((item) => (
            <article key={item.label} className="snapshot-card">
              <p className="snapshot-value">{item.value}</p>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </Reveal>

        <div className="project-detail-grid">
          <Reveal className="detail-card" delay={60}>
            <h2>Project Summary</h2>
            <p>{project.summary}</p>
          </Reveal>

          <Reveal className="detail-card" delay={110}>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </Reveal>

          <Reveal className="detail-card" delay={160}>
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </Reveal>

          <Reveal className="detail-card" delay={210}>
            <h2>Architecture</h2>
            <ul className="architecture-list">
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="detail-card detail-card-wide" delay={260}>
            <h2>Architecture Flow</h2>
            <img
              className="architecture-diagram"
              src={project.architectureDiagram}
              alt={`${project.name} architecture diagram`}
              loading="lazy"
            />
          </Reveal>

          <Reveal className="detail-card detail-card-wide" delay={300}>
            <h2>Key Outcomes</h2>
            <ul>
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="detail-card detail-card-wide" delay={340}>
            <h2>Challenges + Tradeoffs</h2>
            <ul>
              {project.challengesTradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="detail-card detail-card-wide" delay={380}>
            <h2>Impact Highlights</h2>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="detail-actions">
              <Link className="btn btn-secondary" to="/projects">
                <ArrowLeft size={16} aria-hidden="true" />
                Back to Projects
              </Link>
              {project.caseStudyPdf ? (
                <a className="btn btn-secondary" href={project.caseStudyPdf} target="_blank" rel="noreferrer">
                  <FileText size={16} aria-hidden="true" />
                  Case Study PDF
                </a>
              ) : null}
              <a className="btn btn-primary" href="/resume/Jaskeerat-Rai-Resume.pdf" target="_blank" rel="noreferrer">
                <FileText size={16} aria-hidden="true" />
                Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

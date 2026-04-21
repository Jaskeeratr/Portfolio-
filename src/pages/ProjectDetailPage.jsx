import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { getProjectBySlug } from "../data/projects";

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

  return (
    <section className="section page-shell project-detail-page">
      <div className="container">
        <Reveal className="section-head page-head">
          <p className="eyebrow">Project Deep Dive</p>
          <h1>{project.name}</h1>
          <p>{project.tagline}</p>
          <p className="stack stack-block">{project.stack.join(" | ")}</p>
          <div className="detail-actions top-actions">
            {project.demoUrl ? (
              <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            ) : (
              <span className="repo-coming-soon">Live demo link will be added soon</span>
            )}
            {project.repoUrl ? (
              <a className="btn btn-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
                View Repository
              </a>
            ) : (
              <span className="repo-coming-soon">Repository link will be added soon</span>
            )}
            {project.caseStudyPdf ? (
              <a className="btn btn-secondary" href={project.caseStudyPdf} target="_blank" rel="noreferrer">
                Case Study PDF
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal>
          <img className="project-hero" src={project.image} alt={`${project.name} interface illustration`} />
        </Reveal>

        <Reveal className="results-snapshot">
          {project.resultsSnapshot.map((item) => (
            <article key={item.label} className="snapshot-card">
              <p className="snapshot-value">{item.value}</p>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </Reveal>

        <div className="project-detail-grid">
          <Reveal className="detail-card">
            <h2>Project Summary</h2>
            <p>{project.summary}</p>
          </Reveal>

          <Reveal className="detail-card">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </Reveal>

          <Reveal className="detail-card">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </Reveal>

          <Reveal className="detail-card">
            <h2>Architecture</h2>
            <ul>
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="detail-card detail-card-wide">
            <h2>Architecture Flow</h2>
            <img
              className="architecture-diagram"
              src={project.architectureDiagram}
              alt={`${project.name} architecture diagram`}
              loading="lazy"
            />
          </Reveal>

          <Reveal className="detail-card detail-card-wide">
            <h2>Key Outcomes</h2>
            <ul>
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="detail-card detail-card-wide">
            <h2>Challenges + Tradeoffs</h2>
            <ul>
              {project.challengesTradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="detail-card detail-card-wide">
            <h2>Impact Highlights</h2>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="detail-actions">
              <Link className="btn btn-secondary" to="/projects">
                Back to Projects
              </Link>
              {project.caseStudyPdf ? (
                <a className="btn btn-secondary" href={project.caseStudyPdf} target="_blank" rel="noreferrer">
                  Case Study PDF
                </a>
              ) : null}
              <a className="btn btn-primary" href="/resume/Jaskeerat-Rai-Resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

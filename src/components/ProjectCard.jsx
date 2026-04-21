import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
      <div className="project-body">
        <h3>{project.name}</h3>
        <p className="stack">{project.stack.join(" | ")}</p>
        <p>{project.summary}</p>
        <ul>
          {project.highlights.slice(0, 2).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-actions">
          <Link className="btn btn-secondary project-link" to={`/projects/${project.slug}`}>
            View Project Details
          </Link>
          {project.demoUrl ? (
            <a
              className="btn btn-primary project-link"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : (
            <span className="repo-coming-soon">Live demo coming soon</span>
          )}
          {project.repoUrl ? (
            <a
              className="btn btn-primary project-link"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          ) : (
            <span className="repo-coming-soon">Repository link coming soon</span>
          )}
          {project.caseStudyPdf ? (
            <a
              className="btn btn-secondary project-link"
              href={project.caseStudyPdf}
              target="_blank"
              rel="noreferrer"
            >
              Case Study PDF
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

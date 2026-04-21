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
          {project.repoUrl ? (
            <a
              className="btn btn-primary project-link"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          ) : (
            <span className="repo-coming-soon">GitHub link coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

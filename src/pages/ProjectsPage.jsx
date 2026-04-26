import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section className="section page-shell projects-story-page">
      <div className="container">
        <Reveal className="section-head page-head">
          <p className="eyebrow">Projects</p>
          <h1>Project Portfolio</h1>
          <p>
            Each project has a dedicated page with deeper architecture, challenge, and outcome
            details.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

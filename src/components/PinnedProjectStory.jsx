import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProjectVisual from "./ProjectVisual";

gsap.registerPlugin(ScrollTrigger);

const clamp01 = (value) => Math.min(Math.max(value, 0), 1);

const projectAccents = {
  gapcheck: "#1ec8a5",
  "alberta-energy-data-pipeline": "#ff9f5a",
  "macro-finder": "#82d67f",
  "premier-league-predictor": "#6fb3ff"
};

export default function PinnedProjectStory({ projects }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] ?? projects[0];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    if (reduced || isMobile || !sectionRef.current) return undefined;

    const segmentCount = Math.max(1, projects.length - 1);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${projects.length * 680}`,
      pin: ".pinned-story-stage",
      scrub: 0.65,
      snap: {
        snapTo: (value) => Math.round(value * segmentCount) / segmentCount,
        duration: { min: 0.16, max: 0.34 },
        delay: 0.05,
        ease: "power2.out"
      },
      anticipatePin: 1,
      onUpdate: (self) => {
        const exact = self.progress * segmentCount;
        const next = Math.min(projects.length - 1, Math.round(exact));
        const distanceToRest = Math.abs(exact - Math.round(exact));
        const turn = clamp01(distanceToRest * 2);
        const direction = exact - Math.round(exact);
        setActiveIndex(next);
        sectionRef.current?.style.setProperty("--pinned-progress", self.progress.toFixed(4));
        sectionRef.current?.style.setProperty("--story-turn", turn.toFixed(4));
        sectionRef.current?.style.setProperty("--story-direction", direction.toFixed(4));
      }
    });

    return () => trigger.kill();
  }, [projects.length]);

  return (
    <section
      ref={sectionRef}
      className="pinned-story"
      style={{ "--active-accent": projectAccents[activeProject.slug] ?? "#55d2ff" }}
      aria-labelledby="pinned-story-title"
    >
      <div className="pinned-story-stage">
        <div className="container pinned-story-grid">
          <div className="pinned-revolve-track">
            <div className="pinned-story-copy">
              <p className="eyebrow">Core Signal</p>
              <h2 id="pinned-story-title">Production systems, not toy projects.</h2>
              <p>
                Scroll through the work as a systems map: ingestion, APIs, validation, model
                signals, product UX, and measured outcomes.
              </p>
              <div className="pinned-story-progress" aria-hidden="true">
                {projects.map((project, index) => (
                  <button
                    key={project.slug}
                    className={index === activeIndex ? "active" : ""}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${project.name}`}
                  />
                ))}
              </div>
            </div>

            <article className="pinned-story-project">
              <span className="pinned-kicker">{String(activeIndex + 1).padStart(2, "0")} / {projects.length}</span>
              <h3>{activeProject.name}</h3>
              <p>{activeProject.tagline}</p>
              <div className="pinned-proof-grid">
                {activeProject.resultsSnapshot.slice(0, 3).map((metric) => (
                  <span key={metric.label}>
                    <strong>{metric.value}</strong>
                    {metric.label}
                  </span>
                ))}
              </div>
              <div className="pinned-role-proof">
                <span>My role: {activeProject.myRole}</span>
                <span>{activeProject.whyItMatters}</span>
              </div>
              <div className="pinned-story-actions">
                <Link className="btn btn-primary" to={`/projects/${activeProject.slug}`}>
                  <ArrowRight size={16} aria-hidden="true" />
                  Case Study
                </Link>
                {activeProject.demoUrl ? (
                  <a className="btn btn-secondary" href={activeProject.demoUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} aria-hidden="true" />
                    Live Demo
                  </a>
                ) : (
                  <a className="btn btn-secondary" href={activeProject.repoUrl} target="_blank" rel="noreferrer">
                    <Code2 size={16} aria-hidden="true" />
                    Repository
                  </a>
                )}
              </div>
            </article>
          </div>

          <div className="pinned-story-visual">
            <Link
              className="pinned-visual-link"
              to={`/projects/${activeProject.slug}`}
              aria-label={`Open ${activeProject.name} case study`}
            >
              <ProjectVisual project={activeProject} />
              <span>{activeProject.name}</span>
            </Link>
            <div className="pinned-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

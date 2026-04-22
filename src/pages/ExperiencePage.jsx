import Reveal from "../components/Reveal";
import { experiences, skillGroups } from "../data/siteContent";

export default function ExperiencePage() {
  return (
    <section className="section page-shell">
      <div className="container">
        <Reveal className="section-head page-head">
          <p className="eyebrow">Experience</p>
          <h1>Professional Experience and Leadership</h1>
          <p>
            Delivery-focused roles across full-stack development and AI quality systems.
          </p>
        </Reveal>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company}-${experience.role}`}
              className="timeline-item"
              delay={index * 90}
            >
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <h3>
                    {experience.role} | {experience.company}
                  </h3>
                  <p>
                    {experience.period} | {experience.location}
                  </p>
                </div>
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="leadership-card section-card-gap">
          <p className="eyebrow">Leadership</p>
          <h2>Co-President | Sikh Student Association, University of Calgary</h2>
          <p>
            Leading a 100+ member organization and coordinating executive teams to run 10+
            cultural and community events annually.
          </p>
        </Reveal>

        <Reveal className="section-head section-card-gap">
          <p className="eyebrow">Core Skills</p>
          <h2>Current Technical Focus</h2>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
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
  );
}

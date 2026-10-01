import { BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import Reveal from "../components/Reveal";
import { experiences, skillGroups } from "../data/siteContent";

export default function ExperiencePage() {
  return (
    <section className="section page-shell experience-page">
      <div className="container">
        <Reveal className="section-head page-head" eager>
          <p className="eyebrow">Experience</p>
          <h1>Professional Experience and Leadership</h1>
          <p>Full-stack development and AI evaluation work, plus education and leadership.</p>
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
                    <BriefcaseBusiness size={18} aria-hidden="true" />
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
          <p className="eyebrow">Education</p>
          <h2>
            <GraduationCap size={22} aria-hidden="true" />
            B.Sc. Software Engineering | University of Calgary
          </h2>
          <p>
            Schulich School of Engineering, 4th year. Expected graduation: May 2028.
          </p>
          <p>
            Coursework: Data Structures and Algorithms, Software Architecture, Databases,
            Object-Oriented Programming, Operating Systems, Probability and Statistics.
          </p>
        </Reveal>

        <Reveal className="leadership-card section-card-gap">
          <p className="eyebrow">Leadership</p>
          <h2>
            <Users size={22} aria-hidden="true" />
            Co-President | Sikh Student Association, University of Calgary
          </h2>
          <p>
            Lead a 100+ member student organization across cross-functional executive teams,
            running 10+ events a year with budget, timeline, and stakeholder ownership.
            Coordinate between student executives, university administration, and community
            partners.
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

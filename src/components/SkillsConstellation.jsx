import { motion } from "framer-motion";

const projectMap = {
  Python: "Energy Pipeline, Predictor",
  React: "GapCheck, Portfolio, Macro Finder",
  TypeScript: "GapCheck",
  SQL: "Energy Pipeline, Predictor",
  PostgreSQL: "GapCheck, Energy Pipeline, Macro Finder",
  "Apache Airflow": "GapCheck, Energy Pipeline",
  Docker: "GapCheck, Energy Pipeline",
  "FastAPI": "GapCheck",
  "Power BI": "Energy Pipeline",
  "Claude API": "GapCheck"
};

export default function SkillsConstellation({ groups }) {
  return (
    <div className="skills-constellation" aria-label="Interactive skill constellation">
      {groups.map((group, groupIndex) => (
        <motion.article
          key={group.title}
          className="skill-cluster"
          initial={{ opacity: 0, y: 22, rotateX: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: groupIndex * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="skill-cluster-core">
            <span>{String(groupIndex + 1).padStart(2, "0")}</span>
            <h3>{group.title}</h3>
          </div>
          <div className="skill-node-cloud">
            {group.items.map((item, itemIndex) => (
              <motion.span
                key={item}
                className="skill-node"
                title={projectMap[item] ? `Used in ${projectMap[item]}` : `Used across project work`}
                whileHover={{ y: -6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 360, damping: 22 }}
                style={{ "--node-delay": `${itemIndex * 0.08}s` }}
              >
                {item}
                {projectMap[item] ? <small>{projectMap[item]}</small> : null}
              </motion.span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

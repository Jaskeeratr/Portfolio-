export const projects = [
  {
    slug: "gapcheck",
    name: "GapCheck",
    tagline: "AI-powered internship matching and resume gap analysis platform",
    stack: ["React", "FastAPI", "PostgreSQL", "Claude API", "Apache Airflow"],
    image: "/images/gapcheck.svg",
    repoUrl: "https://github.com/Jaskeeratr/gapcheck",
    summary:
      "Built and deployed a full-stack platform that aggregates internship listings and evaluates candidate-job fit using weighted scoring and LLM-assisted reasoning.",
    highlights: [
      "Aggregates 100+ Calgary tech internships daily from LinkedIn and Indeed",
      "Runs scheduled Airflow pipelines with deduplication and cleanup",
      "Uses a 5-dimension weighted match algorithm",
      "Generates structured verdicts: strong match, close miss, or significant gap"
    ],
    problem:
      "Students waste time manually filtering job postings and often do not know exactly what skills are missing for target roles.",
    solution:
      "GapCheck automates ingestion, ranking, and gap analysis so users can prioritize the right applications and build targeted improvement plans.",
    architecture: [
      "React frontend for search, filters, and candidate-job match visualization",
      "FastAPI backend exposing scoring and recommendation endpoints",
      "PostgreSQL for jobs, resumes, scores, and enrichment metadata",
      "Airflow DAG for scraping, deduplication, and scheduled refresh",
      "Claude API integration for resume parsing and tailored suggestions"
    ],
    outcomes: [
      "Reduced internship search friction with one centralized ranking workflow",
      "Delivered transparent score breakdowns that users can act on immediately",
      "Provided company-intent inference from historical hiring patterns"
    ]
  },
  {
    slug: "alberta-energy-data-pipeline",
    name: "Alberta Energy Data Pipeline",
    tagline: "Automated ETL and analytics stack for large-scale production datasets",
    stack: ["Python", "Apache Airflow", "PostgreSQL", "Power BI", "Docker"],
    image: "/images/alberta-pipeline.svg",
    repoUrl: "https://github.com/Jaskeeratr/alberta-energy-pipeline",
    summary:
      "Engineered an end-to-end ETL pipeline for Alberta Energy Regulator production data with robust validation, indexing, and dashboarding.",
    highlights: [
      "Processes 500K+ records per pipeline run",
      "Removes 33K invalid records and flags 6% data quality issues each cycle",
      "Improved query performance by 70% (420ms to 120ms)",
      "Ships interactive Power BI dashboards for drill-down analysis"
    ],
    problem:
      "Raw monthly energy datasets were large, inconsistent, and difficult for analysts to query and trust in decision workflows.",
    solution:
      "Built a scheduled ETL workflow that validates and transforms raw feeds into reliable relational tables, then surfaces trends in Power BI.",
    architecture: [
      "Airflow monthly DAG orchestrating ingestion, validation, transformation, and load",
      "Python ETL modules handling normalization and anomaly checks",
      "PostgreSQL warehouse with auditable staging and production tables",
      "Targeted B-tree indexes on key dimensions for analytics speed",
      "Power BI dashboard layer for operator and field-level trend analysis"
    ],
    outcomes: [
      "Created a repeatable analytics pipeline with strong observability",
      "Improved trust in downstream reporting through automated validation",
      "Enabled faster exploratory analysis on 500K+ row workloads"
    ]
  },
  {
    slug: "macro-finder",
    name: "Macro Finder",
    tagline: "Personalized full-stack nutrition app with scalable meal tracking",
    stack: ["React", "Node.js", "PostgreSQL"],
    image: "/images/macro-finder.svg",
    repoUrl: null,
    summary:
      "Developed a responsive nutrition platform that calculates personalized macro targets based on goals, activity, and dietary preferences.",
    highlights: [
      "Computes user-specific macro distributions with edge-case handling",
      "Supports meal logging and historical tracking workflows",
      "Uses normalized relational schema for scalability",
      "Designed for intuitive, mobile-friendly user experience"
    ],
    problem:
      "Generic calculators often ignore user-specific constraints and make long-term meal tracking difficult.",
    solution:
      "Macro Finder combines flexible profile inputs, personalized calculations, and persistent tracking so users can follow a realistic nutrition plan.",
    architecture: [
      "React client for onboarding, macro recommendations, and logs",
      "Node.js API managing profile and nutrition endpoints",
      "PostgreSQL schema for users, meals, macro snapshots, and history",
      "Reusable query patterns for aggregate views over time"
    ],
    outcomes: [
      "Delivered a practical nutrition workflow instead of one-off calculations",
      "Created a data model ready for future recommendation features",
      "Maintained responsive performance across desktop and mobile"
    ]
  },
  {
    slug: "premier-league-predictor",
    name: "Premier League Match Predictor",
    tagline: "End-to-end ML pipeline for high-variance sports outcomes",
    stack: ["Python", "Scikit-learn", "SQL"],
    image: "/images/epl-predictor.svg",
    repoUrl: null,
    summary:
      "Built a machine learning pipeline that predicts Premier League match outcomes using engineered historical features and optimized SQL extraction.",
    highlights: [
      "Achieved 66.8% prediction accuracy",
      "Outperformed naive baseline by 17%",
      "Engineered 20+ performance-driven features",
      "Reduced SQL extraction time by 22% on 10K+ records"
    ],
    problem:
      "Sports outcomes are noisy, making it hard to produce meaningful predictive lift over baseline assumptions.",
    solution:
      "Constructed robust feature pipelines and model evaluation loops that improve signal extraction and benchmark transparently against baseline.",
    architecture: [
      "SQL feature extraction from historical match and team data",
      "Python preprocessing and training workflow with reproducible experiments",
      "Scikit-learn modeling and evaluation pipeline",
      "Performance tracking against naive and tuned benchmark models"
    ],
    outcomes: [
      "Established measurable improvement in a noisy prediction domain",
      "Built reusable feature engineering templates for future experiments",
      "Balanced model quality with practical extraction performance"
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

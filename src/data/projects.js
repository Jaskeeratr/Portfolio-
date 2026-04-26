export const projects = [
  {
    slug: "gapcheck",
    name: "GapCheck",
    tagline: "AI-powered internship matching and resume gap analysis platform",
    stack: ["React", "FastAPI", "PostgreSQL", "Claude API", "Apache Airflow"],
    image: "/images/gapcheck.svg",
    storyImage: "/images/projects/gapcheck.svg",
    storyImageAlt:
      "Abstract dashboard showing resume parsing, internship cards, and AI match scoring for GapCheck",
    architectureDiagram: "/images/arch-gapcheck.svg",
    repoUrl: "https://github.com/Jaskeeratr/gapcheck",
    demoUrl: "https://gapcheck-1.onrender.com",
    caseStudyPdf: "/case-studies/gapcheck-case-study.pdf",
    summary:
      "Built and deployed a full-stack platform that aggregates internship listings and evaluates candidate-job fit using weighted scoring and LLM-assisted reasoning.",
    resultsSnapshot: [
      { value: "100+", label: "Listings Aggregated Daily", note: "Across Calgary internship sources" },
      { value: "5", label: "Scoring Dimensions", note: "Skills, experience, education, projects, domain" },
      { value: "3", label: "Verdict Classes", note: "Strong match, close miss, significant gap" }
    ],
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
    challengesTradeoffs: [
      "Challenge: Resume text quality varied widely. Change: Added normalization and schema-guarded parsing before scoring.",
      "Challenge: Duplicate postings across sources. Change: Implemented deterministic deduplication keys in ingestion.",
      "Tradeoff: LLM reasoning quality vs cost. Decision: Restricted model calls to key analysis stages with structured prompts."
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
    storyImage: "/images/projects/alberta-energy-pipeline.svg",
    storyImageAlt:
      "Abstract ETL pipeline with raw energy data, Airflow orchestration, and analytics dashboard panels",
    architectureDiagram: "/images/arch-alberta.svg",
    repoUrl: "https://github.com/Jaskeeratr/alberta-energy-pipeline",
    demoUrl: null,
    caseStudyPdf: "/case-studies/alberta-energy-pipeline-case-study.pdf",
    summary:
      "Engineered an end-to-end ETL pipeline for Alberta Energy Regulator production data with robust validation, indexing, and dashboarding.",
    resultsSnapshot: [
      { value: "500K+", label: "Rows Per Run", note: "Automated monthly ingestion at scale" },
      { value: "33K", label: "Invalid Rows Removed", note: "Validation and cleanup in each cycle" },
      { value: "70%", label: "Query Speed Gain", note: "420ms to 120ms with targeted indexes" }
    ],
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
    challengesTradeoffs: [
      "Challenge: Source data inconsistency across fields. Change: Added schema checks and quality scoring before load.",
      "Challenge: Slow analytical grouping queries. Change: Benchmarked and applied B-tree indexes on high-selectivity columns.",
      "Tradeoff: Full historical reload vs incremental updates. Decision: Used scheduled batch runs for reliability and auditability."
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
    storyImage: "/images/projects/macro-finder.svg",
    storyImageAlt:
      "Premium nutrition app visual with macro cards, food labels, meal tracking, and mobile UI panels",
    architectureDiagram: "/images/arch-macro.svg",
    repoUrl: "https://csgit.ucalgary.ca/jashan.bhinder/seng513-202601-pg-17",
    demoUrl: null,
    caseStudyPdf: "/case-studies/macro-finder-case-study.pdf",
    summary:
      "Developed a responsive nutrition platform that calculates personalized macro targets based on goals, activity, and dietary preferences.",
    resultsSnapshot: [
      { value: "3", label: "Core Inputs", note: "Goals, activity level, dietary preference" },
      { value: "1", label: "Unified Tracking Flow", note: "Daily logs and historical summaries" },
      { value: "100%", label: "Responsive UI", note: "Designed for desktop and mobile usage" }
    ],
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
    challengesTradeoffs: [
      "Challenge: Personalized recommendations across varied profiles. Change: Added edge-case handling for goals and activity combinations.",
      "Challenge: Keeping meal history performant. Change: Normalized schema and optimized aggregate query paths.",
      "Tradeoff: Rich UX interactions vs implementation simplicity. Decision: Prioritized clarity and speed over heavy UI complexity."
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
    storyImage: "/images/projects/premier-league-predictor.svg",
    storyImageAlt:
      "Machine learning prediction dashboard with model nodes, charts, and sports outcome data signals",
    architectureDiagram: "/images/arch-epl.svg",
    repoUrl: "https://github.com/Jaskeeratr/Premier-predictor",
    demoUrl: null,
    caseStudyPdf: "/case-studies/premier-league-predictor-case-study.pdf",
    summary:
      "Built a machine learning pipeline that predicts Premier League match outcomes using engineered historical features and optimized SQL extraction.",
    resultsSnapshot: [
      { value: "66.8%", label: "Model Accuracy", note: "On noisy real-world outcome data" },
      { value: "+17%", label: "Lift vs Baseline", note: "Outperformed naive predictor" },
      { value: "20+", label: "Engineered Features", note: "Performance and match-context features" }
    ],
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
    challengesTradeoffs: [
      "Challenge: High variance and unpredictable match dynamics. Change: Expanded feature set and benchmarked against baseline continuously.",
      "Challenge: Feature extraction cost on larger sets. Change: Optimized SQL selection and reduced query runtime by 22%.",
      "Tradeoff: Model complexity vs interpretability. Decision: Kept an interpretable pipeline while improving lift."
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

export const statCards = [
  { value: 59, suffix: "x", label: "Faster pitch analysis (717 ms to 12 ms)" },
  { value: 66.8, suffix: "%", label: "Match-outcome accuracy over 1,140+ games", decimals: 1 },
  { value: 1000, suffix: "+", label: "AI responses evaluated at Outlier" },
  { value: 8.49, suffix: "x", label: "Source-data overstatement caught by audit", decimals: 2 }
];

export const recruiterHighlights = [
  {
    title: "Ship the whole stack",
    detail:
      "Schema, API, UI, infrastructure, and CI, from my internship at Humility Kindness Love to GapCheck's Terraform deployment on AWS."
  },
  {
    title: "Back claims with evidence",
    detail:
      "Benchmarks, tests, and data-quality checks: 82 tests on SurSadhana, 47 on Underdog Manager, and idempotency proven in CI."
  },
  {
    title: "Work well with people",
    detail:
      "Co-president of a 100+ member student association; turned non-technical stakeholder requests into working software."
  }
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "C++", "Java"]
  },
  {
    title: "AI & LLMs",
    items: [
      "Claude API",
      "Prompt engineering",
      "RAG pipelines",
      "LLM evaluation",
      "Agentic workflows",
      "Structured output parsing"
    ]
  },
  {
    title: "ML & Data",
    items: [
      "PyTorch",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Feature engineering",
      "Model evaluation",
      "Signal processing"
    ]
  },
  {
    title: "Backend & Data Engineering",
    items: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Apache Airflow",
      "dbt",
      "REST API design",
      "ETL pipelines"
    ]
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      "Terraform",
      "AWS (ECS Fargate, RDS, ALB, VPC, IAM)",
      "Docker",
      "GitHub Actions",
      "Trivy",
      "tflint",
      "Infracost"
    ]
  },
  {
    title: "Frontend & Visualization",
    items: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Power BI", "Three.js", "React Three Fiber"]
  }
];

export const experiences = [
  {
    role: "Software Developer Intern",
    company: "Humility Kindness Love",
    period: "Sep 2025 - Apr 2026",
    location: "Remote",
    bullets: [
      "Developed and maintained full-stack internal systems (FastAPI, PostgreSQL, Tailwind CSS, Docker Compose) for event operations, user submissions, admin workflows, and reporting.",
      "Built REST API endpoints and backend logic that let non-technical stakeholders submit forms, track events, and generate accurate reports.",
      "Added structured error handling and input validation to backend APIs, reducing recurring data-consistency issues in production."
    ]
  },
  {
    role: "AI Training Specialist",
    company: "Outlier (Contract)",
    period: "Oct 2024 - Dec 2025",
    location: "Remote",
    bullets: [
      "Evaluated 1,000+ AI-generated responses for coding, reasoning, SQL, and data-processing tasks against ground-truth criteria, reducing false-positive rates by 20% through documented failure-pattern analysis.",
      "Reviewed Python scripts and SQLite queries to find and resolve errors and ambiguities, improving the reliability of LLM-assisted evaluation workflows.",
      "Documented recurring LLM failure patterns (weak edge-case coverage, incorrect SQL logic, unsupported factual claims) to make evaluations more consistent."
    ]
  }
];

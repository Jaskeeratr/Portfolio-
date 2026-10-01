export const projects = [
  {
    slug: "gapcheck",
    featured: true,
    name: "GapCheck",
    tagline: "AI job-fit platform with explainable resume scoring and a Terraform-defined AWS deployment",
    stack: ["Claude API", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "React", "TypeScript", "Terraform", "AWS", "GitHub Actions"],
    image: "/images/projects/gapcheck.svg",
    storyImage: "/images/screens/gapcheck.jpg",
    storyImageAlt: "GapCheck job board with search filters, live job sources, and match-scoring controls",
    architectureDiagram: "/images/arch-gapcheck.svg",
    repoUrl: "https://github.com/Jaskeeratr/gapcheck",
    demoUrl: "https://gapcheck-1.onrender.com",
    caseStudyPdf: "/case-studies/gapcheck-case-study.pdf",
    myRole: "Full-stack and infrastructure engineer",
    whyItMatters: "Explains why a resume fits a job, then shows what to build to close the gap.",
    proofNote: "Validated Claude prompt chains, 5-dimension scoring, Terraform on AWS with security-scanned CI.",
    summary:
      "Built a full-stack platform that uses multi-step Claude API prompt chains to turn resumes and job postings into structured data, score fit across five weighted dimensions, and explain the gaps. I also wrote the full AWS deployment in Terraform behind a credential-free CI pipeline.",
    resultsSnapshot: [
      { value: "5", label: "Scoring Dimensions", note: "Skills, experience, education, projects, domain" },
      { value: "5", label: "HIGH/CRITICAL Findings Fixed", note: "Static-analysis issues in the Terraform config" },
      { value: "0", label: "Cloud Credentials in CI", note: "Mocked-provider tests, tflint, and Trivy on every PR" }
    ],
    highlights: [
      "Multi-step Claude API prompt chains extract structured JSON from resumes and job postings",
      "Backend validation rejects malformed AI responses before they reach users",
      "Weighted, explainable compatibility scores with frequency-weighted required skills",
      "Full AWS deployment in Terraform: ECS Fargate, ALB, RDS PostgreSQL, VPC, IAM, CloudWatch",
      "Credential-free CI runs a mocked-provider test suite, tflint, and Trivy on every pull request",
      "Separated liveness from readiness probes after finding the readiness check shared the app's connection pool"
    ],
    problem:
      "Students waste time filtering job postings and rarely know which skills are actually missing for the roles they want. Generic AI feedback is vague and sometimes malformed.",
    solution:
      "GapCheck parses both sides into structured data, validates every AI response, and produces weighted, explainable scores and ranked gaps. Missing skills turn into concrete portfolio-project recommendations.",
    architecture: [
      "React + TypeScript frontend: job board, resume profile, match verdict, tracker",
      "FastAPI REST endpoints with SQLAlchemy models and Alembic migrations on PostgreSQL",
      "Claude API prompt chains with schema validation on every response",
      "Pluggable job-source adapters and an Airflow ingestion pipeline for repeatable updates",
      "Terraform: ECS Fargate behind an ALB, RDS PostgreSQL, VPC, IAM, CloudWatch",
      "GitHub Actions: mocked-provider tests, tflint, and Trivy security scanning"
    ],
    challengesTradeoffs: [
      "Challenge: LLM output was sometimes malformed. Change: Schema-validated every response and rejected bad ones before they reached users.",
      "Challenge: Static analysis flagged 5 HIGH/CRITICAL issues in the infrastructure. Change: Hardened the Terraform and locked the fixes in as regression tests.",
      "Challenge: The readiness probe shared a connection pool with app traffic, so load could fail health checks. Change: Split liveness from readiness.",
      "Tradeoff: Real cloud credentials in CI vs safety. Decision: A mocked-provider suite, so pull requests never need AWS keys."
    ],
    outcomes: [
      "One workflow from resume upload to ranked, explainable job matches",
      "Infrastructure is reviewable code, with production decisions captured as tests",
      "Missing skills become concrete project recommendations with difficulty, timeline, and stack"
    ]
  },
  {
    slug: "sursadhana-ai",
    featured: true,
    name: "SurSadhana AI",
    tagline: "Vocal pitch trainer for Indian classical music with a real-time in-browser tuner",
    stack: ["React", "FastAPI", "NumPy", "Web Audio API", "AudioWorklet", "scikit-learn", "GitHub Actions"],
    image: "/images/projects/sursadhana-ai.svg",
    storyImage: "/images/screens/sursadhana-ai.jpg",
    storyImageAlt: "SurSadhana AI harmonium practice page with sargam keyboard, selected target note, and analysis panels",
    architectureDiagram: "/images/arch-sursadhana.svg",
    repoUrl: "https://github.com/Jaskeeratr/sur-ai",
    demoUrl: "https://sur-ai.vercel.app",
    caseStudyPdf: "/case-studies/sursadhana-ai-case-study.pdf",
    myRole: "Full-stack and audio/ML engineer",
    whyItMatters: "Gives singers objective, note-by-note pitch feedback that a generic tuner can't.",
    proofNote: "59x faster analysis, 1.83-cent mean error, 82 automated tests in CI.",
    summary:
      "Built a full-stack singing practice app that records vocals, extracts pitch contours with a custom YIN-style detector, scores them against harmonium and sargam targets in cents, and classifies vocal stability. A real-time tuner runs the same detector on the browser's audio thread.",
    resultsSnapshot: [
      { value: "59x", label: "Faster Pitch Analysis", note: "717 ms to 12 ms at identical accuracy" },
      { value: "1.83¢", label: "Mean Pitch Error", note: "100% note detection on a 96-recording benchmark" },
      { value: "82", label: "Automated Tests", note: "45 backend + 37 frontend, run in CI" }
    ],
    highlights: [
      "Custom YIN-style detector, vectorized in NumPy with an FFT-based difference function (717 ms to 12 ms)",
      "100% note detection and 1.83-cent mean error on a 96-recording synthetic benchmark",
      "Real-time tuner: the detector is ported to an AudioWorklet, so live feedback needs no server round-trip",
      "Onset-aware phrase scoring with a monotonic Viterbi alignment of sung frames to target notes",
      "Models all ten Hindustani thaats, with alankar drills, a tanpura drone, and 'Find my Sa' calibration",
      "Installable PWA with 82 automated tests (45 backend, 37 frontend) in CI"
    ],
    problem:
      "Singers practicing Hindustani music against a harmonium get no objective feedback. Generic tuners don't understand sargam, thaats, or a movable Sa, and can't tell you which notes you consistently miss.",
    solution:
      "SurSadhana AI pairs a playable harmonium with recorded and live pitch analysis. It returns cents-level feedback, classifies vocal stability, scores whole phrases, and tracks which swaras you tend to sing sharp or flat.",
    architecture: [
      "React client: harmonium keyboard, practice, sargam, and progress pages",
      "AudioWorklet live tuner running YIN on the browser audio thread",
      "Recordings compressed to 16 kHz WAV and uploaded to FastAPI",
      "FFT-based YIN pitch contour extraction and cents-offset feedback",
      "Stability classification from signal-processing features",
      "Viterbi aligner for multi-note phrases; Vercel + Render deployment with CI"
    ],
    challengesTradeoffs: [
      "Challenge: Pure-Python pitch detection took 717 ms per clip. Change: Vectorized YIN with an FFT difference function, reaching 12 ms with identical accuracy.",
      "Challenge: Live feedback through the server was too slow. Change: Ported the detector to an AudioWorklet so the tuner runs entirely in the browser.",
      "Challenge: Unevenly held notes shifted every later scoring window. Change: A monotonic Viterbi alignment maps frames to notes where the pitch actually changes.",
      "Tradeoff: A heavy ML runtime vs a light server. Decision: NumPy-only inference at runtime, with a heuristic fallback."
    ],
    outcomes: [
      "A public, installable app that turns practice sessions into measurable pitch data",
      "Per-swara analytics tell singers exactly which note to work on",
      "A benchmark script makes the latency and accuracy numbers reproducible"
    ]
  },
  {
    slug: "alberta-energy-data-pipeline",
    featured: true,
    name: "Alberta Energy Data Pipeline",
    tagline: "Airflow-orchestrated ETL with a quarantine-based audit layer, idempotent loads, and dbt marts",
    stack: ["Python", "Apache Airflow", "PostgreSQL", "dbt", "Docker", "GitHub Actions", "Power BI"],
    image: "/images/alberta-pipeline.svg",
    storyImage: "/images/projects/alberta-energy-pipeline.svg",
    storyImageAlt: "ETL pipeline with raw energy data, Airflow orchestration, and analytics dashboard panels",
    architectureDiagram: "/images/arch-alberta.svg",
    repoUrl: "https://github.com/Jaskeeratr/alberta-energy-pipeline",
    demoUrl: null,
    caseStudyPdf: "/case-studies/alberta-energy-pipeline-case-study.pdf",
    myRole: "Data pipeline engineer",
    whyItMatters: "Turns report-style regulator spreadsheets into validated, auditable, re-runnable analytics tables.",
    proofNote: "Quarantine-based validation, idempotent upserts proven in CI, dbt-tested marts.",
    summary:
      "Built an Airflow-orchestrated ETL pipeline for Alberta Energy Regulator production data. A validation and audit layer quarantines bad records, loads are idempotent upserts, and a dbt analytics layer feeds Power BI. CI runs the whole pipeline twice against live PostgreSQL to prove re-runs are safe.",
    resultsSnapshot: [
      { value: "2x", label: "CI Runs per Build", note: "Whole pipeline run twice on live PostgreSQL to prove idempotency" },
      { value: "~299x", label: "Faster Extraction", note: "53.3 s to 0.18 s, output verified identical" },
      { value: "85%", label: "Coverage Gate", note: "Enforced by pytest in GitHub Actions" }
    ],
    highlights: [
      "Validation quarantines nulls, bad dates, negative volumes, and duplicates into quality-issue tables",
      "Per-run audit records track row counts and error rates",
      "Idempotent incremental loading: chunked upserts against natural-key unique indexes",
      "dbt staging views, a unified fact table, and summary marts, all enforced by dbt data tests",
      "Two-stage CI: unit tests, then an integration job that runs the pipeline twice and executes dbt build",
      "Extraction cut from 53.3 s to 0.18 s by removing a duplicate parse and switching to a Rust-backed reader"
    ],
    problem:
      "AER publishes production data as report-style Excel workbooks with merged cells and year columns. The format is hard for analysts to query or trust, and naive reloads either duplicate or wipe history.",
    solution:
      "A scheduled pipeline extracts, transforms, validates, and upserts records into PostgreSQL, quarantining anything invalid. dbt models the analytics layer, and Power BI reads it. Every run is audited.",
    architecture: [
      "Airflow DAG: optional source download, then crude oil and natural gas ETL in parallel",
      "Python extract / transform / validate / load modules",
      "Quality-issue tables and a pipeline_runs audit table",
      "PostgreSQL with natural-key unique indexes backing chunked upserts",
      "dbt staging views, fct_production, and summary marts with data tests",
      "Docker Compose (Airflow + PostgreSQL 16), Power BI dashboard"
    ],
    challengesTradeoffs: [
      "Challenge: Re-running a load could duplicate rows or erase history. Change: Chunked upserts on natural keys, proven in CI by running the pipeline twice.",
      "Challenge: Deleting bad rows hides data problems. Change: Quarantine them into quality-issue tables and record error rates per run.",
      "Challenge: Extraction took 53 s per run. Change: Removed a duplicate workbook parse and switched to python-calamine, getting 0.18 s with identical output.",
      "Tradeoff: Requiring the fast reader vs portability. Decision: Fall back to pandas' default engine if it isn't installed."
    ],
    outcomes: [
      "A repeatable, observable pipeline with an audit trail for every run",
      "Re-runs are provably safe, so backfills and retries are low-risk",
      "Benchmark scripts included so the performance claims are reproducible"
    ]
  },
  {
    slug: "underdog-manager",
    featured: true,
    name: "Underdog Manager",
    tagline: "C++ basketball management simulation in Unreal Engine 5.8 with a deterministic match engine",
    stack: ["C++", "Unreal Engine 5.8", "Slate/UMG", "Unreal Automation Tests"],
    image: null,
    storyImage: "/images/projects/underdog-manager.svg",
    storyImageAlt: "Top-down basketball court with player dots and ball trajectory beside a broadcast-style scoreboard",
    architectureDiagram: "/images/arch-underdog-manager.svg",
    repoUrl: "https://github.com/Jaskeeratr/underdog-manager",
    demoUrl: null,
    caseStudyPdf: "/case-studies/underdog-manager-case-study.pdf",
    myRole: "Game systems engineer (C++)",
    whyItMatters: "A large stateful simulation that stays deterministic and tested across ten simulated seasons.",
    proofNote: "11,000+ lines of C++, 21 service classes, 22 screens, 47 passing automated tests.",
    summary:
      "Architected a C++-first basketball management simulation in Unreal Engine 5.8. You inherit the weakest club in a generated 12-team league and rebuild it over multiple seasons. A deterministic possession-based match engine drives everything, with zero external asset dependencies.",
    resultsSnapshot: [
      { value: "11K+", label: "Lines of C++", note: "21 static service classes, clear module boundaries" },
      { value: "22", label: "Dashboard Screens", note: "Built in code with Slate/UMG" },
      { value: "47", label: "Automated Tests", note: "Soak, schedule, match, roster, payroll, and cash" }
    ],
    highlights: [
      "Generated 12-team, 180-player league with a validated 22-game double round-robin schedule",
      "Deterministic possession-based match simulator with overtime and box-score reconciliation",
      "Standings, playoffs, development, injuries, morale, contracts, free agency, draft, and AI managers",
      "Async save snapshots with versioned schema validation and deterministic RNG",
      "47 passing automated tests, including a ten-season soak",
      "All UI and audio generated in code, with zero marketplace assets"
    ],
    problem:
      "Management sims carry a lot of interlocking state (rosters, finances, staff, morale). Without determinism and tests, one bug can quietly corrupt a ten-season save.",
    solution:
      "The core simulation is seed-driven and deterministic, every score and box score is reconciled, saves are versioned and validated, and long soak tests simulate a full career to catch drift.",
    architecture: [
      "UE 5.8 runtime and test modules with clear boundaries",
      "21 static service classes for league, schedule, match, finances, and staff",
      "Possession-based match simulator emitting explicit play events",
      "Game-instance orchestration with atomic round advancement",
      "Async save snapshots with versioned schema validation",
      "22-screen Slate/UMG dashboard and 2D tactical court viewer"
    ],
    challengesTradeoffs: [
      "Challenge: Simulation bugs hide over many seasons. Change: A deterministic ten-season soak test covering career, roster, payroll, and cash.",
      "Challenge: Save formats changed as features grew. Change: A versioned schema validated on load.",
      "Tradeoff: Licensed art vs zero dependencies. Decision: All UI and audio built procedurally, so the project needs no marketplace content."
    ],
    outcomes: [
      "A playable vertical slice covering roster, tactics, trades, playoffs, staff, and finances",
      "The full automation suite passes headlessly on UE 5.8",
      "Adds C++ and systems-design depth alongside the web and data work"
    ]
  },
  {
    slug: "premier-league-predictor",
    featured: false,
    name: "Multi-Sport Match Outcome Predictor",
    tagline: "Full-stack ML platform forecasting match outcomes across five sports",
    stack: ["Python", "Flask", "scikit-learn", "pandas", "SQLite", "Docker"],
    image: "/images/epl-predictor.svg",
    storyImage: "/images/projects/premier-league-predictor.svg",
    storyImageAlt: "Machine learning prediction dashboard with model nodes, charts, and sports outcome data",
    architectureDiagram: "/images/arch-epl.svg",
    repoUrl: "https://github.com/Jaskeeratr/Premier-predictor",
    demoUrl: null,
    caseStudyPdf: "/case-studies/premier-league-predictor-case-study.pdf",
    myRole: "ML systems builder",
    whyItMatters: "Measurable lift over baseline in a noisy domain, with explained, confidence-scored predictions.",
    proofNote: "66.8% accuracy over 1,140+ Premier League matches, +17% vs baseline, 5 sports.",
    summary:
      "Developed a full-stack ML platform that predicts match outcomes across five sports using engineered features, adaptive retraining, injury adjustments, and confidence scoring, served through Flask REST APIs.",
    resultsSnapshot: [
      { value: "66.8%", label: "Model Accuracy", note: "Across 1,140+ Premier League matches" },
      { value: "+17%", label: "Lift vs Baseline", note: "Outperformed a naive predictor" },
      { value: "22%", label: "Faster Feature Extraction", note: "SQL improved through profiling" }
    ],
    highlights: [
      "66.8% accuracy across 1,140+ Premier League matches, 17% above a naive baseline",
      "Covers football, basketball, American football, volleyball, and cricket",
      "Adaptive per-sport retraining with time-series cross-validation and calibration tracking",
      "Injury adjustments, confidence tiers, and top-factor explanations for each prediction",
      "Flask REST APIs, SQLite prediction history, and what-if simulations",
      "SQL feature extraction made 22% faster through profiling"
    ],
    problem:
      "Sports outcomes are noisy, so meaningful lift over a baseline is hard to get. Raw win probabilities are also useless if they're poorly calibrated or unexplained.",
    solution:
      "Feature pipelines and model-selection loops benchmark against a baseline, track calibration, and explain each prediction. A dashboard adds history, injury adjustments, and what-if scenarios.",
    architecture: [
      "Flask app factory with page, REST API, and health/readiness routes",
      "Service layer for predictions, history, and injuries",
      "Adaptive per-sport training with versioned, rollback-safe model artifacts",
      "Premier League pipeline with rolling and exponentially weighted form features",
      "SQLite persistence for history, injuries, and model runs",
      "Docker Compose and GitHub Actions with pytest and ruff"
    ],
    challengesTradeoffs: [
      "Challenge: High variance in match outcomes. Change: Expanded features (xG, points, and rest differentials) and benchmarked against a baseline continuously.",
      "Challenge: Feature extraction was slow on larger sets. Change: Profiled and rewrote the SQL, 22% faster.",
      "Challenge: Live sports feeds are flaky. Change: Automatic fallback to deterministic demo data, with a banner in the UI.",
      "Tradeoff: Model complexity vs interpretability. Decision: Kept the pipeline explainable while still improving lift."
    ],
    outcomes: [
      "Measurable improvement in a noisy prediction domain",
      "A model-health endpoint reports status (Healthy, Needs More Data, Undertrained)",
      "Reusable feature-engineering templates for future experiments"
    ]
  },
  {
    slug: "grid-reliability-analytics",
    featured: false,
    name: "Grid Reliability Analytics",
    tagline: "Azure SQL + Power BI audit of 526K U.S. outage records that caught an 8.49x overstatement",
    stack: ["T-SQL", "Azure SQL", "Python", "pandas", "Power BI", "DAX"],
    image: "/images/projects/grid-reliability-analytics.svg",
    storyImage: "/images/screens/grid-reliability-analytics.jpg",
    storyImageAlt: "Power BI reliability overview with KPI cards, customer-hours by year, cause breakdown, and a U.S. state map",
    architectureDiagram: "/images/arch-grid-reliability.svg",
    repoUrl: "https://github.com/Jaskeeratr/grid-reliability-analytics",
    demoUrl: null,
    caseStudyPdf: "/case-studies/grid-reliability-analytics-case-study.pdf",
    myRole: "Data / analytics engineer",
    whyItMatters: "Shows that summing this public dataset naively overstates outage impact by 8.49x.",
    proofNote: "526,165 rows, 20 data-quality rules, 273,291 duplicate rows quarantined, independent pandas check.",
    summary:
      "Built a layered Azure SQL warehouse and Power BI dashboard over 526K U.S. electric outage records (2014-2023), with an explicit data-quality audit layer between source and report. The audit found that a naive sum overstates customer-hours lost by 8.49x.",
    resultsSnapshot: [
      { value: "8.49x", label: "Overstatement Caught", note: "21.5B naive vs 2.53B customer-hours at the correct grain" },
      { value: "526K", label: "Source Rows Audited", note: "168,858 unique outage spells across 48 states" },
      { value: "20", label: "Data-Quality Rules", note: "273,291 duplicate rows quarantined, not deleted" }
    ],
    highlights: [
      "Found that 51.94% of source rows are surplus exact-duplicate copies",
      "Layered warehouse: raw (all text), staging, data quality, dims/facts, mart views, then Power BI",
      "A bridge table for the many-to-many spell-to-event relationship stops a second round of double counting",
      "Rows always reconcile: landed = surviving + quarantined",
      "Headline KPIs checked against an independent pandas calculation",
      "External check against EIA-861: r = 0.793 across 45 states, with the magnitude gap reported honestly"
    ],
    problem:
      "Public outage data looks analysis-ready, but exact duplicates and many-to-many event attribution quietly inflate every additive measure. A dashboard built straight on the source would report numbers several times too high.",
    solution:
      "The raw data lands as text, so no defect is silently coerced away. A 20-rule audit layer quarantines bad rows instead of deleting them, the model is built at the correct grain, and the report has a data-quality page instead of hiding the caveats.",
    architecture: [
      "Python download and raw loader into Azure SQL (all NVARCHAR, nothing rejected or coerced)",
      "Staging layer typed with TRY_CONVERT only",
      "dq schema: 20 rules with severity (BLOCK / WARN / INFO) and quarantine tables",
      "Dimensions, fact table, and a bridge for the many-to-many spell-to-event relationship",
      "Mart views: the only surface Power BI touches (Import mode)",
      "Independent pandas expected-results check plus verify.sql"
    ],
    challengesTradeoffs: [
      "Challenge: SQL Server ignores trailing spaces in comparisons, so a TRIM check found only 16 of 327 whitespace defects. Change: Switched to DATALENGTH.",
      "Challenge: event_id isn't unique and repeats across years for unrelated events. Change: Keyed events on (event_id, began, restored, cause).",
      "Challenge: 75 raw cause strings covering typos, mixed conventions, and NBSP delimiters. Change: Mapped them to 10 categories with documented precedence.",
      "Tradeoff: A third drill-through page vs verified numbers. Decision: Cut the page and shipped two pages that reconcile to the independent check."
    ],
    outcomes: [
      "Recovered the correct customer-hours total (2.53B vs a naive 21.5B)",
      "The data-quality page lists all 20 rules, including the 14 that passed",
      "Limitations documented openly: no true SAIDI/SAIFI, trend not coverage-adjusted, results depend on attribution"
    ]
  },
  {
    slug: "ai-code-reviewer",
    featured: false,
    name: "AI Code Reviewer",
    tagline: "Autonomous GitHub App that reviews pull requests with RAG over the whole codebase",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "tree-sitter", "GitHub Apps", "LLM Tool Use"],
    image: null,
    storyImage: "/images/projects/ai-code-reviewer.svg",
    storyImageAlt: "Pull request diff with inline AI review comments, connected to a vector search index of the codebase",
    architectureDiagram: "/images/arch-ai-code-reviewer.svg",
    repoUrl: null,
    demoUrl: null,
    caseStudyPdf: null,
    status: "In active development (private repository)",
    myRole: "Backend / AI systems engineer",
    whyItMatters: "Reviews a PR with context from the whole repository, not just the diff, and keeps comments low-noise.",
    proofNote: "Agentic tool-use loop, hybrid pgvector + full-text retrieval, schema-validated findings.",
    summary:
      "Building a GitHub App that reviews pull requests like a senior engineer. It fetches the diff, retrieves relevant code with RAG over the whole repository, runs a multi-step agentic tool-use loop, and posts structured findings, while tracking which comments get accepted.",
    resultsSnapshot: [
      { value: "5", label: "Agent Tools", note: "read_file, grep_repo, semantic_search, find_references, list_directory" },
      { value: "Hybrid", label: "Retrieval", note: "pgvector cosine + Postgres full-text, fused with RRF" },
      { value: "$0", label: "Infra Cost Target", note: "Neon, GitHub Models, and AWS free tiers" }
    ],
    highlights: [
      "AST-aware indexing: tree-sitter chunks code at function and class boundaries",
      "Incremental re-indexing diffs git SHAs and only re-embeds changed chunks",
      "Hybrid search fuses vector similarity and full-text with reciprocal rank fusion",
      "Findings outside the diff are dropped, duplicates removed, nits suppressed when criticals exist",
      "HMAC-verified webhook with GitHub App JWT and installation-token auth",
      "Typed and tested: uv, ruff, mypy, and pytest in CI"
    ],
    problem:
      "LLM code reviewers that only see the diff miss how a change interacts with the rest of the codebase, and they bury real issues under nitpicks, which erodes trust.",
    solution:
      "The agent investigates with real tools (reads files, greps, runs semantic search over a RAG index, finds references), then submits schema-validated findings that are filtered, deduplicated, and capped.",
    architecture: [
      "FastAPI webhook receiver with HMAC signature verification",
      "GitHub App auth: JWT to installation token",
      "Indexer: tree-sitter chunking, embeddings, pgvector (HNSW) plus a full-text column",
      "Hybrid retrieval merged with reciprocal rank fusion",
      "Provider-agnostic LLM agent loop with 5 investigation tools",
      "Planned: AWS Lambda + SQS workers and a golden-PR evaluation harness"
    ],
    challengesTradeoffs: [
      "Challenge: Re-embedding a whole repo on every push is slow and costly. Change: Only re-embed chunks whose git SHA changed.",
      "Challenge: Pure vector search misses exact identifiers. Change: Fused pgvector similarity with Postgres full-text using RRF.",
      "Challenge: Noisy comments erode trust. Change: Severity gate, deduplication, a comment cap, and dropping findings outside the diff.",
      "Tradeoff: Paid frontier model vs a free tier. Decision: A provider-agnostic client, so paid models can be swapped in for eval comparisons."
    ],
    outcomes: [
      "Works end to end from the CLI against any PR URL or local branch",
      "Semantic search degrades gracefully to grep when no database is configured",
      "Next: serverless deployment on AWS and acceptance-rate metrics from real PR feedback"
    ]
  },
  {
    slug: "macro-finder",
    featured: false,
    name: "Macro Finder",
    tagline: "Full-stack nutrition app with personalized macro targets and meal tracking",
    stack: ["React", "Node.js", "PostgreSQL"],
    image: "/images/macro-finder.svg",
    storyImage: "/images/projects/macro-finder.svg",
    storyImageAlt: "Nutrition app visual with macro cards, food labels, meal tracking, and mobile UI panels",
    architectureDiagram: "/images/arch-macro.svg",
    repoUrl: null,
    demoUrl: null,
    caseStudyPdf: "/case-studies/macro-finder-case-study.pdf",
    status: "University team project (course repository is private)",
    myRole: "Full-stack developer (SENG 513 team project)",
    whyItMatters: "Moves nutrition tracking from one-off calculators into a persistent product workflow.",
    proofNote: "Personalized macro engine, normalized schema, and responsive meal-history flows.",
    summary:
      "Developed a responsive nutrition platform as part of a university team. It calculates personalized macro targets from goals, activity level, and dietary preferences, and supports ongoing meal logging.",
    resultsSnapshot: [
      { value: "3", label: "Personalization Inputs", note: "Goals, activity level, dietary preference" },
      { value: "Full", label: "Meal History", note: "Daily logs and historical summaries" },
      { value: "Mobile", label: "First UI", note: "Responsive across desktop and mobile" }
    ],
    highlights: [
      "Computes user-specific macro distributions with edge-case handling",
      "Supports meal logging and historical tracking",
      "Normalized relational schema for aggregation queries",
      "Mobile-friendly, responsive interface"
    ],
    problem:
      "Generic calculators ignore user-specific constraints and make long-term meal tracking difficult.",
    solution:
      "Macro Finder combines flexible profile inputs, personalized calculations, and persistent tracking so users can follow a realistic nutrition plan.",
    architecture: [
      "React client for onboarding, macro recommendations, and logs",
      "Node.js API managing profile and nutrition endpoints",
      "PostgreSQL schema for users, meals, macro snapshots, and history",
      "Reusable query patterns for aggregate views over time"
    ],
    challengesTradeoffs: [
      "Challenge: Personalized recommendations across varied profiles. Change: Edge-case handling for goal and activity combinations.",
      "Challenge: Keeping meal history performant. Change: Normalized the schema and optimized aggregate queries.",
      "Tradeoff: Rich interactions vs simplicity. Decision: Prioritized clarity and speed over heavy UI complexity."
    ],
    outcomes: [
      "A practical nutrition workflow instead of one-off calculations",
      "A data model ready for future recommendation features",
      "Responsive performance across desktop and mobile"
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

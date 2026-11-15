export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  role: string;
  category: string;
  stack: string[];
  abstract: string;
  details: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "chestxr",
    title: "ChestXR: Pediatric Pneumonia Detection",
    tagline: "Deep learning vision system with a companion Android app",
    role: "AI & Machine Learning Engineer",
    category: "AI and Machine Learning",
    stack: ["PyTorch", "MobileNetV3", "FastAPI", "Kotlin", "Jetpack Compose", "Retrofit"],
    abstract:
      "I built this medical vision project to help clinicians screen for pediatric pneumonia using chest X-rays. Because missing a diagnosis in children can be dangerous, I focused on reducing false negatives by setting a strict 0.8 decision threshold rather than simply relying on overall accuracy.",
    details: [
      "I fine-tuned MobileNetV3-Large using transfer learning on over 5,800 pediatric chest radiographs.",
      "I balanced sparse positive clinical cases using a custom weighted sampler to protect diagnostic sensitivity.",
      "I achieved a 98 percent recall rate and built confidence indicators for secondary clinical reviews.",
      "I containerized the inference pipeline with FastAPI and built a native Android app using Jetpack Compose.",
    ],
    metrics: [
      { label: "Recall Rate", value: "98%" },
      { label: "Accuracy", value: "87%" },
      { label: "X-ray Dataset", value: "5,800+ scans" },
    ],
    githubUrl: "https://github.com/fairishayan/ChestXR-Android",
    featured: true,
  },
  {
    id: "studyplay",
    title: "StudyPlay: Interactive Learning Platform",
    tagline: "Active recall quizzes and visual concept exploration",
    role: "Full-Stack Developer",
    category: "Full-Stack Engineering",
    stack: ["React", "Next.js", "Tailwind CSS", "Vercel", "SVG Visuals"],
    abstract:
      "I created StudyPlay to help students break away from passive reading. Instead of just highlighting notes, learners test their understanding with interactive flashcards, quick quizzes, and custom diagrams across 888 curriculum topics.",
    details: [
      "I structured and deployed an accessible web app on Vercel covering 888 core academic concepts across 23 units.",
      "I implemented real-time active recall checkpoints that test conceptual comprehension during reading sessions.",
      "I designed an extensible schema allowing educators to publish new modules without editing frontend code.",
      "I built high-performance responsive SVG mental models optimized for low-end mobile devices.",
    ],
    metrics: [
      { label: "Topics Covered", value: "888+" },
      { label: "Course Units", value: "23 Units" },
      { label: "Design Target", value: "Mobile First" },
    ],
    githubUrl: "https://github.com/fairishayan/StudyPlay",
    liveUrl: "https://study-play-gray.vercel.app",
    featured: true,
  },
  {
    id: "smart-classroom-scheduler",
    title: "Smart Classroom Timetable Scheduler",
    tagline: "Automated schedule optimizer for schools with limited teachers",
    role: "Lead Developer & Researcher",
    category: "Optimization Systems",
    stack: ["Python", "Google OR-Tools", "CP-SAT Solver", "CSP Modeling", "Offline-First"],
    abstract:
      "More than 9,000 rural primary schools in India operate with just one teacher managing multiple grade levels. I formulated this timetable puzzle mathematically and used Google OR-Tools to generate conflict-free schedules where teachers rotate between grades without fatigue.",
    details: [
      "I formulated multi-grade classroom rotations as a discrete constraint satisfaction problem.",
      "I programmed hard mathematical bounds that guarantee zero teacher collisions and enforce room quotas.",
      "I implemented weighted penalty functions that prioritize analytical subjects during early morning hours.",
      "I built local SQLite synchronization so headmasters can compute conflict-free rosters entirely offline.",
      "The project advanced through early competitive evaluation rounds at the Smart India Hackathon.",
    ],
    metrics: [
      { label: "Target Schools", value: "9,000+ Schools" },
      { label: "Core Solver", value: "OR-Tools CP-SAT" },
      { label: "Recognition", value: "SIH Qualified" },
    ],
    githubUrl: "https://github.com/fairishayan/smart-classroom-scheduler",
    featured: true,
  },
  {
    id: "elms",
    title: "Behavioral Learning Management System",
    tagline: "Active comprehension checks and automated question routing",
    role: "Full-Stack & NLP Developer",
    category: "AI and Machine Learning",
    stack: ["Python", "NLP Tokenization", "MongoDB", "Express.js", "React", "Node.js"],
    abstract:
      "Many online students lose focus during pre-recorded lectures. I built this learning system with an engaging Truth or Dare check where students either explain a concept in plain words or solve a quick coding challenge, keeping them attentive throughout the course.",
    details: [
      "I invented the interactive Truth or Dare protocol where students explain theories or solve timed code puzzles.",
      "I created a tokenization and intent heuristic service in Python to automatically evaluate short student prose.",
      "I architected the platform with Node.js and MongoDB to log comprehension latency across each lecture chapter.",
      "Drafted a complete academic research paper presenting the system as my undergraduate capstone project.",
    ],
    metrics: [
      { label: "Study Method", value: "Truth or Dare" },
      { label: "Tech Stack", value: "MERN and Python" },
      { label: "Research", value: "Paper Drafted" },
    ],
    githubUrl: "https://github.com/fairishayan",
    featured: true,
  },
  {
    id: "documind",
    title: "DocuMind: Document Question and Answer",
    tagline: "Grounded semantic search and document exploration",
    role: "AI & Backend Developer",
    category: "AI and Machine Learning",
    stack: ["LangChain", "ChromaDB", "OpenAI API", "Python", "Streamlit"],
    abstract:
      "Skimming through dense research papers and textbooks takes hours. I built DocuMind to allow users to ask questions directly to their PDFs, retrieving the exact matching excerpts and generating clear answers backed by the source text.",
    details: [
      "I built a document ingestion pipeline that extracts and splits lengthy PDF files into semantic text windows.",
      "I integrated ChromaDB vector indexing to perform fast cosine similarity searches on incoming queries.",
      "I authored strict prompt verification rules that enforce verbatim excerpt attribution and eliminate hallucinations.",
      "I constructed a streamlined Streamlit interface supporting drag-and-drop file uploads and conversational querying.",
    ],
    metrics: [
      { label: "Architecture", value: "Dense RAG" },
      { label: "Vector Index", value: "ChromaDB" },
      { label: "Interface", value: "Streamlit UI" },
    ],
    githubUrl: "https://github.com/fairishayan/DocuMind",
  },
  {
    id: "visionguard",
    title: "VisionGuard: Real-Time Object Detection",
    tagline: "Fast video processing pipeline with low latency inference",
    role: "Computer Vision Engineer",
    category: "AI and Machine Learning",
    stack: ["YOLOv8", "OpenCV", "Python", "FastAPI"],
    abstract:
      "I built this computer vision service to detect and track entities in live video streams. It keeps latency low enough for monitoring use cases while maintaining dependable object recognition under real-world lighting.",
    details: [
      "I adapted YOLOv8 neural network weights for multi-target tracking across streaming camera inputs.",
      "I integrated OpenCV frame transformations to correct for uneven lighting, shadows, and compression noise.",
      "I created asynchronous REST endpoints in FastAPI that deliver bounding box coordinates with high frame rates.",
    ],
    metrics: [
      { label: "Model Family", value: "YOLOv8" },
      { label: "Frame Rate", value: "Real Time FPS" },
      { label: "API Framework", value: "FastAPI" },
    ],
    githubUrl: "https://github.com/fairishayan",
  },
  {
    id: "findash",
    title: "FinDash: Financial Analytics Dashboard",
    tagline: "Clear market trends and anomaly indicators",
    role: "Data Analyst & Developer",
    category: "Data and Systems",
    stack: ["Python", "Pandas", "Plotly", "Streamlit", "REST APIs"],
    abstract:
      "Financial metrics are often buried in dense spreadsheets. I created FinDash to give everyday investors a clear, visual snapshot of stock and crypto trends with interactive moving averages and volume shifts.",
    details: [
      "I engineered resilient Pandas data pipelines with localized caching to respect external API rate limits.",
      "I built multi-layered Plotly time-series visuals tracking Bollinger Bands and moving average crossovers.",
      "I designed an interactive Streamlit UI that enables multi-asset comparisons and automated outlier alerts.",
    ],
    metrics: [
      { label: "Data Pipeline", value: "Pandas" },
      { label: "Visual Charts", value: "Plotly" },
      { label: "Market Focus", value: "Stocks and Crypto" },
    ],
    githubUrl: "https://github.com/fairishayan",
  },
  {
    id: "taskflow",
    title: "TaskFlow: Secure Team Workflow API",
    tagline: "Reliable REST backend with role-based permissions",
    role: "Backend Engineer",
    category: "Backend Systems",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Docker", "JWT"],
    abstract:
      "I built TaskFlow as a dependable backend service for teams coordinating everyday projects. It features role-based access control, clean data transactions, and a resilient database schema that prevents conflicting edits.",
    details: [
      "I structured the Express backend into clean controller, service, and repository layers for testability.",
      "I secured route access with stateless JSON Web Tokens and granular role-based authorization guards.",
      "I wrote typed database migrations for PostgreSQL and packaged the service into production Docker images.",
    ],
    metrics: [
      { label: "Security", value: "JWT Auth" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Deployment", value: "Docker Ready" },
    ],
    githubUrl: "https://github.com/fairishayan",
  },
  {
    id: "github-explorer",
    title: "GitHub Profile Explorer",
    tagline: "Visual developer analytics and repository activity",
    role: "Frontend Engineer",
    category: "Full-Stack Engineering",
    stack: ["React", "GitHub REST API", "Tailwind CSS", "Chart.js"],
    abstract:
      "I built this tool to help developers see their coding journey visually. It pulls public data from GitHub and turns it into clean charts showing language preferences, repository growth, and commit rhythms.",
    details: [
      "I connected GitHub public REST endpoints with search debouncing to deliver instant developer metrics.",
      "I configured responsive Chart.js visual graphs displaying language breakdown and weekly commit cadence.",
      "I styled a polished emerald-themed dashboard with clear typography and quick data readability.",
    ],
    metrics: [
      { label: "Data Source", value: "GitHub API" },
      { label: "Chart Engine", value: "Chart.js" },
      { label: "Styling", value: "Tailwind CSS" },
    ],
    githubUrl: "https://github.com/fairishayan",
  },
];

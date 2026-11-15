export interface SkillCategory {
  title: string;
  skills: { name: string; tag: string }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Artificial Intelligence and Optimization",
    skills: [
      { name: "Constraint Satisfaction Problems", tag: "Mathematical Modeling" },
      { name: "Google OR-Tools", tag: "Discrete CP-SAT Solver" },
      { name: "Natural Language Processing", tag: "Text Processing and Intent" },
      { name: "Retrieval Augmented Generation", tag: "LangChain and ChromaDB" },
      { name: "Computer Vision", tag: "YOLOv8 and OpenCV" },
      { name: "Deep Learning", tag: "PyTorch and MobileNet" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", tag: "Machine Learning and AI Research" },
      { name: "TypeScript and JavaScript", tag: "Modern Web and Next.js" },
      { name: "Java", tag: "Object-Oriented Architecture" },
      { name: "Kotlin", tag: "Android and Jetpack Compose" },
      { name: "SQL", tag: "Relational Queries" },
      { name: "HTML and Modern CSS", tag: "Responsive Design" },
    ],
  },
  {
    title: "Algorithms and Math",
    skills: [
      { name: "Divide and Conquer", tag: "Core Algorithmic Design" },
      { name: "Greedy Algorithms", tag: "Optimization Heuristics" },
      { name: "Complexity Analysis", tag: "Big O Performance" },
      { name: "Scheduling Heuristics", tag: "Resource Allocation" },
      { name: "Mathematical Formulations", tag: "Discrete Optimization" },
    ],
  },
  {
    title: "Databases and Storage",
    skills: [
      { name: "PostgreSQL", tag: "Relational ACID Database" },
      { name: "MongoDB", tag: "Document Storage" },
      { name: "MySQL", tag: "Relational Database" },
      { name: "ChromaDB", tag: "Vector Embeddings Store" },
      { name: "SQLite", tag: "Local Embedded Database" },
    ],
  },
  {
    title: "Web and Systems Engineering",
    skills: [
      { name: "Next.js and React", tag: "Modern Frontend Engineering" },
      { name: "FastAPI", tag: "High-Speed Python APIs" },
      { name: "Node.js and Express", tag: "Backend Web Services" },
      { name: "Streamlit", tag: "Rapid AI Prototyping" },
      { name: "Docker", tag: "Containerization" },
      { name: "Git and GitHub", tag: "Version Control" },
      { name: "REST API Design", tag: "System Integration" },
    ],
  },
  {
    title: "Current Focus Areas",
    skills: [
      { name: "Empirical AI Research", tag: "Experimental Rigor" },
      { name: "Deep Learning Foundations", tag: "Advanced Neural Study" },
      { name: "Research Writing", tag: "Paper Composition" },
      { name: "Embodied AI Systems", tag: "Physical World Agency" },
    ],
  },
];

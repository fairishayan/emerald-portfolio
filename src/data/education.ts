export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  summary: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "M.Sc. Computer Science (AI)",
    institution: "Sacred Heart College, Thevara",
    location: "Kochi, India",
    period: "Discontinued",
    grade: "Completed foundational coursework",
    summary:
      "I pursued graduate studies focused on artificial intelligence and neural computing before choosing to transition into full-time independent research and real-world system building.",
    highlights: [
      "Completed advanced coursework in artificial intelligence and machine learning models",
      "Shifted focus to independent research on constraint satisfaction and practical AI systems",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Integral University",
    location: "Lucknow, India",
    period: "2023 to 2026",
    grade: "Semesters 4 to 6 SGPA: 9.50 (CGPA 8.0 out of 10)",
    summary:
      "I built strong habits and study discipline to consistently score at the top of my class. After finding my rhythm in the first year, I achieved a steady 9.50 SGPA across my fourth, fifth, and sixth semesters.",
    highlights: [
      "Scored a consistent 9.50 SGPA across Semesters 4, 5, and 6",
      "Studied software engineering principles, algorithms, data structures, and database systems",
      "Completed advanced subjects in machine learning, data analytics, and artificial intelligence",
      "Built a behavioral learning system with active concept quizzes as my final capstone project",
    ],
  },
  {
    degree: "Class 12 Higher Secondary Education",
    institution: "Municipal Inter College",
    location: "Sitapur, India",
    period: "2021",
    grade: "Aggregate: 66 percent",
    summary:
      "I studied computer applications and discovered my passion for writing code and breaking down complex problems.",
    highlights: [
      "Learned core programming logic and computer applications",
      "Built early interest in software development",
    ],
  },
  {
    degree: "Class 10 Secondary Education",
    institution: "Government Inter College",
    location: "Sitapur, India",
    period: "2019",
    grade: "Aggregate: 55.8 percent",
    summary:
      "Completed secondary schooling with a focus on science and mathematics fundamentals.",
    highlights: [
      "Built a strong foundation in science and math",
    ],
  },
];

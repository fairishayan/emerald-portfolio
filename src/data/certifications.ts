export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  type: string;
}

export const certificationsData: CertificationItem[] = [
  {
    title: "Prime AI and Machine Learning Program",
    issuer: "Intensive Technical Training",
    description:
      "Hands-on program covering fundamental machine learning algorithms, deep neural network training, evaluation metrics, and end-to-end data processing.",
    type: "Certification",
  },
  {
    title: "Advanced Machine Learning and AI Workshop",
    issuer: "Academic Technical Intensive",
    description:
      "Two days of practical lab work covering data cleaning, classification heuristics, statistical analysis, and software integration.",
    type: "Workshop",
  },
];

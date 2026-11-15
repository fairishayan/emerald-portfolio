export interface ResearchInterest {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  inquiryFocus: string;
}

export const researchInterests: ResearchInterest[] = [
  {
    id: "embodied",
    title: "Embodied General Intelligence",
    subtitle: "Robotics and Physical Environments",
    description:
      "I explore how intelligent systems can move beyond text screens to perceive, reason, and take action in physical spaces. This means investigating how models handle continuous sensory input and navigate unpredictable environments.",
    inquiryFocus:
      "Connecting discrete reasoning with perception and action in physical environments.",
  },
  {
    id: "hai",
    title: "Human AI Interaction",
    subtitle: "Adaptive Learning and Active Recall",
    description:
      "I study how people and AI systems communicate effectively. Instead of letting students passively consume computer outputs, I design interfaces that test understanding and support independent human judgment.",
    inquiryFocus:
      "Building interactive verification checks that keep learners actively thinking and engaged.",
  },
  {
    id: "ethics",
    title: "AI Safety and Alignment",
    subtitle: "Reliable Rules for Autonomous Systems",
    description:
      "I examine how we can hold autonomous software accountable. We need mathematical and behavioral safeguards so that intelligent agents remain honest, reliable, and aligned with human values.",
    inquiryFocus:
      "Creating verifiable boundary rules to keep model outputs safe and grounded.",
  },
  {
    id: "constraint",
    title: "Constraint Optimization",
    subtitle: "Discrete Problem Solving for Social Good",
    description:
      "I translate challenging societal puzzles, such as single-teacher rural school timetables, into mathematical constraint satisfaction problems that computers can solve without conflict.",
    inquiryFocus:
      "Using exact solvers like Google OR-Tools to solve real-world logistical bottlenecks.",
  },
  {
    id: "agents",
    title: "Grounded Language Systems",
    subtitle: "Semantic Retrieval and Search",
    description:
      "I build question-answering systems that ground their responses in factual source documents. This prevents models from inventing facts and makes them trustworthy assistants for research work.",
    inquiryFocus:
      "Designing multi-step retrieval workflows that deliver verifiable answers.",
  },
];

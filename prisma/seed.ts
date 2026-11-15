import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding initial demo submissions...");

  await prisma.submission.deleteMany({});

  await prisma.submission.createMany({
    data: [
      {
        name: "Dr. Arvind Sharma",
        email: "arvind.sharma@research-lab.org",
        subject: "Research Collaboration on Multi-Grade CSP Scheduling",
        message:
          "Hello Fairish, I reviewed your Smart Classroom Scheduler project based on OR-Tools CP-SAT. Your 'Focused Rotation' timetable model addressing rural single-teacher constraints is very compelling. We would love to discuss a potential research internship collaboration.",
        type: "COLLABORATION",
      },
      {
        name: "Priya Patel",
        email: "priya.patel@edtech-innovations.io",
        subject: "Feedback regarding Behavioral ELMS",
        message:
          "The 'Truth or Dare' active verification concept in ELMS provides a very fresh approach to tackling passive video consumption in digital education. Have you considered benchmarking recall latency against spaced repetition?",
        type: "FEEDBACK",
      },
      {
        name: "Marcus Vance",
        email: "marcus.v@healthai-consortium.com",
        subject: "Inquiry on ChestXR Pediatric False Negative Threshold",
        message:
          "Loved your clinical emphasis on optimizing recall (98%) over raw accuracy with the 0.8 custom decision boundary. Are you planning an open benchmark evaluation?",
        type: "QUERY",
      },
    ],
  });

  console.log("Seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


import { z } from "zod";

export const submissionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(255, "Email cannot exceed 255 characters.")
    .toLowerCase(),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(200, "Subject cannot exceed 200 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long.")
    .max(3000, "Message cannot exceed 3000 characters."),
  type: z.enum(["FEEDBACK", "QUERY", "COLLABORATION", "GENERAL"], {
    errorMap: () => ({ message: "Please select a valid submission type." }),
  }),
});

export type SubmissionInput = z.infer<typeof submissionSchema>;


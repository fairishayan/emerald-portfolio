import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { submissionSchema } from "@/lib/validations";
export const dynamic = 'force-dynamic';
export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const validatedData = submissionSchema.parse(json);

    const submission = await prisma.submission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        type: validatedData.type,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received successfully. Thank you for connecting!",
        id: submission.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error?.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          issues: error.issues.map((i: any) => ({
            field: i.path.join("."),
            message: i.message,
          })),
        },
        { status: 400 }
      );
    }

    console.error("Failed to process submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your message.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        name: true,
        email: true,
        subject: true,
        message: true,
        type: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      count: submissions.length,
      submissions,
    });
  } catch (error) {
    console.error("Failed to fetch submissions:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch submissions." },
      { status: 500 }
    );
  }
}


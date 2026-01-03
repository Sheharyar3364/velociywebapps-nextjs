import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Invalid email").max(255),
  phone: z.string().min(1, "Phone is required").max(20),
  country: z.string().min(1, "Country is required").max(100),
  project_type: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    console.log("Validated contact data:", validatedData);

    await sendContactEmail(validatedData);

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting us! We will get back to you within 2 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.issues, // ✅ Changed from error.errors to error.issues
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try WhatsApp.",
      },
      { status: 500 }
    );
  }
}

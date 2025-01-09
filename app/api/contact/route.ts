import { NextResponse } from "next/server";
import { sendContactEmail } from "../../services/emailService";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received contact form submission:", data);

    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      console.log("Validation failed:", data);
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const result = await sendContactEmail(data);
    console.log("Email send result:", result);

    if (result.success) {
      return NextResponse.json({ message: "Email sent successfully" });
    } else {
      console.error("Failed to send email:", result.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

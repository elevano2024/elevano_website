import { testEmail } from "@/app/services/emailService";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await testEmail();
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Test email failed:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

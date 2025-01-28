import { Resend } from "resend";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (data: EmailData) => {
  console.log("Starting email send process...", data);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://eleveno.com";

  const notificationTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="${baseUrl}/images/logo.png" alt="Eleveno Logo" style="max-width: 150px;" />
      </div>
      <h2 style="color: #4C42D9;">New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <h3 style="color: #4C42D9;">Message:</h3>
        <p style="white-space: pre-wrap;">${data.message}</p>
      </div>
      <div style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;">
        <p>This email was sent from the Eleveno contact form.</p>
        <img src="${baseUrl}/images/logo-small.png" alt="Eleveno" style="max-width: 80px; margin-top: 10px;" />
      </div>
    </div>
  `;

  //   const acknowledgmentTemplate = `
  //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  //       <div style="text-align: center; margin-bottom: 20px;">
  //         <img src="${baseUrl}/images/logo.png" alt="Eleveno Logo" style="max-width: 150px;" />
  //       </div>
  //       <h2 style="color: #4C42D9;">Thank You for Contacting Eleveno</h2>
  //       <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
  //         <p>Dear ${data.name},</p>
  //         <p>Thank you for reaching out to us. We have received your message and our team will review it shortly.</p>
  //         <p>Here's a copy of your message:</p>
  //         <div style="background-color: white; padding: 15px; border-radius: 4px; margin: 15px 0;">
  //           <p><strong>Message:</strong></p>
  //           <p style="white-space: pre-wrap;">${data.message}</p>
  //         </div>
  //         <p>We typically respond within 24-48 business hours.</p>
  //         <p>Best regards,<br>The Eleveno Team</p>
  //       </div>
  //       <div style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;">
  //         <p>This is an automated response. Please do not reply to this email.</p>
  //         <img src="${baseUrl}/images/logo-small.png" alt="Eleveno" style="max-width: 80px; margin-top: 10px;" />
  //       </div>
  //     </div>
  //   `;

  try {
    // Send notification to Eleveno
    console.log("Sending notification email...");
    const notificationResult = await resend.emails.send({
      from: "Eleveno Contact <onboarding@resend.dev>", // Important: Use verified domain
      to: "ravi.singh@elevano.io",
      subject: `Contact Form: ${data.name}`,
      html: notificationTemplate,
      replyTo: data.email,
    });
    console.log("Notification email result:", notificationResult);

    // Send acknowledgment to sender
    // console.log("Sending acknowledgment email...", data.email);
    // const ackResult = await resend.emails.send({
    //   from: "Eleveno <onboarding@resend.dev>", // Important: Use verified domain
    //   to: data.email,
    //   subject: "Thank you for contacting Eleveno",
    //   html: acknowledgmentTemplate,
    // });
    // console.log("Acknowledgment email result:", ackResult);

    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
};

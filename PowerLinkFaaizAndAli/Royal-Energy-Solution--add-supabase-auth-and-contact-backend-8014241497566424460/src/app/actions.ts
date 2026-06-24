"use server";

import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : { emails: { send: async () => ({ error: { message: "RESEND_API_KEY not set" }, data: null }) } } as unknown as Resend;

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  console.log("Server Action Triggered: Sending to Gmail for testing.");

  if (!name || !email || !message) {
    return { success: false, message: "Name, email, and message are required." };
  }

  // Insert into Supabase
  try {
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone,
      message,
    });

    if (dbError) {
      console.error("Supabase Insertion Error:", dbError);
      // We continue to send email even if DB insert fails, or you could return error here.
      // For now, logging it is safer to ensure they at least get the email.
    } else {
      console.log("Data saved to Supabase successfully.");
    }
  } catch (error) {
    console.error("Supabase Error:", error);
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Royal Energy Solutions <info@respk.com>",
      to: "faaizzaheer8@gmail.com",
      subject: `Message from ${name}`,
      replyTo: email, 
      html: `
        <h1>New Contact Form Submission</h1>
        <p>This is a test message.</p>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, message: "Something went wrong while sending the email." };
    }

    console.log("Email sent successfully to mail!", data);
    return { success: true, message: "Message sent successfully!" };

  } catch (error) {
    console.error("Server-side Error:", error); 
    return { success: false, message: "Something went wrong on the server." };
  }
}

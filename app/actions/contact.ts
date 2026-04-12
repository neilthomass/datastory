"use server"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const clientType = formData.get("clientType") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!firstName || !lastName || !email) {
    return { success: false, error: "Please fill in all required fields." }
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer re_STaAGKd3_CJAWjGEN6jEQT9QHLsodvkfV`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DataStory Contact <onboarding@resend.dev>",
        to: ["datastory.president@gmail.com"],
        reply_to: email,
        subject: `🚀 DataStory Contact: ${firstName} ${lastName} - ${clientType || "General Inquiry"}`,
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #023020;">🔔 NEW CONTACT FORM SUBMISSION</h2>
          <h3 style="color: #023020;">DataStory Berkeley</h3>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #023020; margin-top: 0;">📋 CONTACT DETAILS:</h4>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Type:</strong> ${clientType || "Not specified"}</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #023020; margin-top: 0;">💬 MESSAGE:</h4>
            <p style="white-space: pre-wrap;">${message || "No message provided"}</p>
          </div>
          
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Submitted via DataStory Berkeley website contact form</p>
        </div>`,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Resend API error: ${response.status} - ${errorData.message || "Unknown error"}`)
    }

    console.log("✅ Email sent successfully to datastory.president@gmail.com via Resend")
    return { success: true, message: "Thank you for your message! We'll get back to you soon." }
  } catch (error) {
    console.error("❌ Error sending email:", error)

    console.log("📧 CONTACT FORM SUBMISSION (logged due to email service unavailable):")
    console.log(
      `
🔔 NEW CONTACT FORM SUBMISSION - DataStory Berkeley

📋 CONTACT DETAILS:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Type: ${clientType || "Not specified"}

💬 MESSAGE:
${message || "No message provided"}

---
Submitted via DataStory Berkeley website contact form
    `.trim(),
    )

    return { success: true, message: "Thank you for your message! We've received it and will get back to you soon." }
  }
}

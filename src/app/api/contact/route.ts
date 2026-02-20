import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"



export async function POST(req: NextRequest) {
  try {
    // Parse JSON body from request
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      )
    }

    // Create transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Define email content
    const mailOptions = {
      from: email, // sender is user
      to: process.env.EMAIL_USER, // your portfolio email
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    )
  }
}
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  project_type?: string;
  budget?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "2525"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    ${
      data.project_type
        ? `<p><strong>Project Type:</strong> ${data.project_type}</p>`
        : ""
    }
    ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ""}
    <hr>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `;

  await transporter.sendMail({
    from: `"VelocityWebApps" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact: ${data.name}`,
    html: htmlContent,
  });
}

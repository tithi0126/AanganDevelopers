import nodemailer from 'nodemailer';

export const sendInquiryEmail = async ({ name, email, company, summary }) => {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    // Email is optional; log and exit quietly.
    console.warn('Email env vars missing; skipping email notification');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT || 587),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const toAddress = process.env.NOTIFY_EMAIL || process.env.EMAIL_USER;

  await transporter.sendMail({
    from: `"AanganDevelopers" <${process.env.EMAIL_USER}>`,
    to: toAddress,
    subject: 'New project inquiry – AanganDevelopers',
    text: `
New inquiry from AanganDevelopers website

Name: ${name}
Email: ${email}
Company: ${company || '-'}

Project summary:
${summary}
    `.trim(),
    html: `
      <h2>New inquiry from AanganDevelopers website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || '-'}</p>
      <p><strong>Project summary:</strong></p>
      <p>${summary.replace(/\n/g, '<br/>')}</p>
    `
  });
};



import nodemailer from 'nodemailer';

export const sendInquiryEmail = async (inquiryData) => {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Email env vars missing; skipping email notification');
    return;
  }

  const { name, email, ...rest } = inquiryData;

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

  const detailsText = Object.entries(inquiryData)
    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
    .join('\n');

  const detailsHtml = Object.entries(inquiryData)
    .map(([key, value]) => `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${String(value).replace(/\n/g, '<br/>')}</p>`)
    .join('');

  await transporter.sendMail({
    from: `"AanganDevelopers" <${process.env.EMAIL_USER}>`,
    to: toAddress,
    subject: `New project inquiry from ${name} – AanganDevelopers`,
    text: `
New inquiry from AanganDevelopers website

${detailsText}

Sent at: ${new Date().toLocaleString()}
    `.trim(),
    html: `
      <h2>New inquiry from AanganDevelopers website</h2>
      <div style="font-family: sans-serif; line-height: 1.6;">
        ${detailsHtml}
        <hr/>
        <p style="font-size: 0.8em; color: #666;">Sent at: ${new Date().toLocaleString()}</p>
      </div>
    `
  });
};



import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'vatsalvaishnav0503@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact: Message from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thank you for contacting me, ${name}!`,
            text: `
        Hi ${name},

        Thank you for reaching out! I have received your message and will get back to you as soon as possible.

        Best regards,
        Vatsal Vaishnav
      `,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px; }
              .header { background-color: #ffffff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; border-bottom: 2px solid #eaeaea; }
              .content { background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; }
              .footer { text-align: center; font-size: 12px; color: #666; margin-top: 20px; }
              .button { display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 20px; }
              h1 { color: #111; font-size: 24px; margin-bottom: 10px; }
              p { margin-bottom: 16px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thanks for reaching out!</h1>
              </div>
              <div class="content">
                <p>Hi <strong>${name}</strong>,</p>
                <p>I received your message and appreciate you contacting me. I'll review your inquiry and get back to you as soon as possible.</p>
                <p>In the meantime, feel free to check out more of my work on my portfolio.</p>
                <div style="text-align: center;">
                  <a href="https://vatsal-portfolio.vercel.app/" class="button">View Portfolio</a>
                </div>
                <hr style="border: none; border-top: 1px solid #eaeaea; margin: 30px 0;">
                <p style="margin-bottom: 0;">Best regards,</p>
                <p style="font-weight: bold; margin-top: 5px;">Vatsal Vaishnav</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Vatsal Vaishnav. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
        };

        await Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}

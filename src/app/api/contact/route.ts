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
        <h3>Hi ${name},</h3>
        <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Vatsal Vaishnav</strong></p>
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

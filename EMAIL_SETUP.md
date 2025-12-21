# EmailJS Setup Instructions

To make the contact form work, you need to configure EmailJS keys.

1.  **Create a file named `.env.local`** in the root directory (`d:\portfolio\.env.local`).
2.  **Add the following content** to it:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3.  **Get your keys**:
    *   Sign up/Login at [EmailJS](https://www.emailjs.com/)
    *   **Service ID**: Create a new service (e.g., Gmail) and copy the Service ID.
    *   **Template ID**: Create a new email template and copy the Template ID.
    *   **Public Key**: Go to Account > General and copy the Public Key.

4.  **Restart the server**: Run `npm run dev` again to load the new environment variables.

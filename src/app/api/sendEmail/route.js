import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, service } = body;

        if (!name || !email || !phone || !service) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Use an App Password
            },
        });

        let info = await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: "sa0587676@gmail.com",
            subject: `New Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone:</strong> ${phone}</p>
                   <p><strong>Service:</strong> ${service}</p>`,
        });

        return new Response(JSON.stringify({ message: "Email sent successfully!", info }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }
}

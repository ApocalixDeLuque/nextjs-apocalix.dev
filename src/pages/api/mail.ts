import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        try {
            const emailRes = await transporter.sendMail({
                from: email,
                to: 'contact@apocalix.dev',
                subject: `Mensaje nuevo de ${name}: ${subject} en apocalix.dev`,
                html: `<p>Nueva respuesta en el formulario:</p><br>
                        <p><strong>Name: </strong> ${name}</p>
                        <p><strong>Email: </strong> ${email}</p>
                        <p><strong>Subject: </strong> ${subject}</p>
                        <p><strong>Message: </strong> ${message}</p>`
            });
            res.status(200).json({ success: true });
        } catch (err) {
            res.status(500).json({ success: false });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

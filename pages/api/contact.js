import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: data.subject,
                html: `<h1>${data.subject}</h1><h2>${data.name}</h2><h2>${data.email}</h2><p>${data.message}</p>`,
            });
            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });
        }
    }
    res.status(400).json({ message: "Bad request" });
};

export default handler;

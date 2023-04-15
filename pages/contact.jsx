import { useState } from "react";
import TopPage from "../components/topPage";
import { sendContactForm } from "../lib/api";

const initValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const initState = { values: initValues };

export default function Contact() {
    const [state, setState] = useState(initState);

    const { values } = state;

    const handleFormChange = (e) => {
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [e.target.name]: e.target.value,
            },
        }));
    };

    const onSubmit = async () => {
        if (values.name && values.email && values.subject) {
            await sendContactForm(values);
        }
    };

    return (
        <TopPage>
            <h1 className="site-header">Contact Me</h1>
            <form className="contact-form">
                <label htmlFor="email">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleFormChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleFormChange}
                    required
                />
                <label htmlFor="email">Subject</label>
                <input
                    type="subject"
                    name="subject"
                    id="subject"
                    value={values.subject}
                    onChange={handleFormChange}
                    required
                />
                <label htmlFor="email">Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={handleFormChange}
                />
                <button onClick={onSubmit}>Submit</button>
            </form>
        </TopPage>
    );
}

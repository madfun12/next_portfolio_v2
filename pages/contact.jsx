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

    const onSubmit = async (e) => {
        e.preventDefault();
        setState((prev) => ({
            ...prev,
            loading: true,
        }));
        if (values.name && values.email && values.subject) {
            try {
                await sendContactForm(values);
                setState({
                    loading: false,
                    success: true,
                    values: initValues,
                });
            } catch (error) {
                setState({
                    loading: false,
                    error: true,
                    values: initValues,
                });
            }
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
                <button onClick={onSubmit}>
                    {state.loading ? "Patience..." : "Submit"}
                </button>
                {state.success && (
                    <p className="form-success">
                        Hell yeah, it worked! I'll be in touch soon.
                    </p>
                )}
                {state.error && (
                    <p className="form-failure">
                        Ah, shit. Something's broken. Email me at
                        madfun12@gmail.com while I fix it.
                    </p>
                )}
            </form>
        </TopPage>
    );
}

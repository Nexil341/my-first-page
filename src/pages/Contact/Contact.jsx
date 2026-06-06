import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const sendEmail = async (e) => {
        e.preventDefault();

        if (loading) return;

        try {
            setLoading(true);
            setStatus({
                type: "",
                message: "",
            });

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus({
                type: "success",
                message: "Wiadomość została wysłana.",
            });

            e.target.reset();
        } catch (error) {
            console.error("EmailJS error:", error);

            setStatus({
                type: "error",
                message: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact">
            <h1>Kontakt</h1>

            <form onSubmit={sendEmail} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Imię"
                    autoComplete="name"
                    maxLength={100}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    maxLength={150}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Wiadomość"
                    rows={6}
                    maxLength={1000}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Wysyłanie..." : "Wyślij"}
                </button>

                {status.message && (
                    <p
                        className={`contact-message ${status.type}`}
                        role="alert"
                    >
                        {status.message}
                    </p>
                )}
            </form>
        </section>
    );
}
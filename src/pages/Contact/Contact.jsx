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
            setStatus({ type: "", message: "" });

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
            setStatus({
                type: "error",
                message: "Nie udało się wysłać wiadomości.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* CONTACT */}
            <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-white dark:bg-black">

                {/* LIGHTWEIGHT BACKGROUND (no heavy blur) */}
                <div className="absolute inset-0 -z-10 opacity-70">
                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/10 rounded-full" />
                    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-500/10 rounded-full" />
                </div>

                <div className="w-full max-w-2xl">

                    <h1 className="text-center text-4xl md:text-5xl font-bold mb-10">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Kontakt
                        </span>
                    </h1>

                    <form
                        onSubmit={sendEmail}
                        className="bg-white/60 dark:bg-zinc-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 space-y-5 shadow-md"
                    >

                        {/* INPUT */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Imię"
                            required
                            className="w-full px-4 py-3 rounded-xl
                            bg-white dark:bg-zinc-900
                            border border-gray-200 dark:border-gray-800
                            focus:outline-none focus:border-blue-500
                            transition-colors"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 rounded-xl
                            bg-white dark:bg-zinc-900
                            border border-gray-200 dark:border-gray-800
                            focus:outline-none focus:border-blue-500
                            transition-colors"
                        />

                        <textarea
                            name="message"
                            placeholder="Wiadomość"
                            rows={6}
                            required
                            className="w-full px-4 py-3 rounded-xl
                            bg-white dark:bg-zinc-900
                            border border-gray-200 dark:border-gray-800
                            focus:outline-none focus:border-blue-500
                            transition-colors resize-none"
                        />

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl font-semibold text-white
                            bg-blue-500 hover:bg-blue-600
                            active:scale-[0.99]
                            transition-colors disabled:opacity-50"
                        >
                            {loading ? "Wysyłanie..." : "Wyślij"}
                        </button>

                        {/* STATUS */}
                        {status.message && (
                            <p
                                className={`text-center text-sm px-3 py-2 rounded-lg border ${status.type === "success"
                                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                                        : "bg-red-500/10 text-red-500 border-red-500/20"
                                    }`}
                            >
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black py-10">

                <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-5">

                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        Sebastian.dev
                    </h3>

                    <p className="text-sm text-gray-500 max-w-md">
                        React Frontend Developer — UI, UX i wydajność.
                    </p>

                    <div className="flex gap-6 text-sm text-gray-500">
                        <a className="hover:text-blue-500 transition-colors" href="#about">
                            O mnie
                        </a>
                        <a className="hover:text-blue-500 transition-colors" href="#contact">
                            Kontakt
                        </a>
                        <a className="hover:text-blue-500 transition-colors" href="#">
                            GitHub
                        </a>
                    </div>

                    <div className="w-full max-w-xs h-px bg-gray-200 dark:bg-gray-800" />

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        Available for freelance
                    </div>

                </div>
            </footer>
        </>
    );
}
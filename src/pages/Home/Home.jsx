import "./Home.css";

export default function Home() {
    return (
        <>
            <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
                </div>

                <span className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 font-semibold uppercase tracking-[0.3em] text-sm md:text-base mb-8 opacity-0 animate-[fadeIn_0.8s_ease_forwards]">
                    Frontend Developer
                </span>

                <h1 className="max-w-6xl text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] opacity-0 animate-[heroTitle_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                    Cześć, jestem{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                        Sebastian
                    </span>
                </h1>

                <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed opacity-0 animate-[fadeInUp_1s_0.5s_ease_forwards]">
                    Tworzę nowoczesne, szybkie i responsywne aplikacje webowe
                    przy użyciu React. Stawiam na estetykę, wydajność i
                    przejrzysty kod, stale rozwijając swoje umiejętności.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_1s_0.8s_ease_forwards]">
                    <a
                        href="#about"
                        className="px-8 py-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
                    >
                        Poznaj mnie
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-blue-500 transition-all duration-300"
                    >
                        Kontakt
                    </a>
                </div>

                <a
                    href="#about"
                    className="hidden md:flex absolute bottom-10 flex-col items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors opacity-0 animate-[fadeInUp_1s_1.2s_ease_forwards]"
                >
                    <span className="text-sm uppercase tracking-widest">
                        Przewiń niżej
                    </span>

                    <div className="animate-bounce text-3xl">
                        ↓
                    </div>
                </a>
            </section>

            <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Mój rozwój
                    </span>
                </h2>

                <p className="max-w-4xl text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-16">
                    Programowanie frontendowe to dla mnie połączenie kreatywności
                    i technologii. Regularnie rozwijam swoje umiejętności,
                    poznaję nowe rozwiązania oraz buduję własne projekty, aby
                    zdobywać praktyczne doświadczenie i tworzyć coraz lepsze
                    aplikacje.
                </p>

                <div className="flex flex-wrap justify-center gap-12 mb-20">
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-blue-500">
                            React
                        </h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Główna technologia
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-blue-500">
                            100%
                        </h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Zaangażowania
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-blue-500">
                            24/7
                        </h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Nauka i rozwój
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
                    <div className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="text-5xl mb-5">⚛️</div>
                        <h3 className="text-2xl font-bold mb-4">React</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Tworzę nowoczesne aplikacje SPA wykorzystując React,
                            komponentowe podejście oraz dobre praktyki frontendowe.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="text-5xl mb-5">🎨</div>
                        <h3 className="text-2xl font-bold mb-4">UI / UX</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Projektuję przejrzyste i estetyczne interfejsy,
                            które są wygodne w użytkowaniu i dobrze wyglądają
                            na każdym urządzeniu.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="text-5xl mb-5">🚀</div>
                        <h3 className="text-2xl font-bold mb-4">Rozwój</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Nieustannie poszerzam wiedzę z zakresu JavaScript,
                            React, TypeScript i nowoczesnych narzędzi frontendowych.
                        </p>
                    </div>
                </div>

                <section className="px-6 py-24 flex flex-col items-center text-center">
                    <div className="max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                Masz pomysł? Zróbmy coś razem
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                            Jeśli szukasz front-end developera do projektu, strony lub aplikacji — jestem otwarty na współpracę.
                            Tworzę szybko, estetycznie i nowocześnie.
                        </p>

                        <a
                            href="#contact"
                            className="px-10 py-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
                        >
                            Napisz do mnie
                        </a>
                    </div>
                </section>

                <section className="px-6 pb-24">
                    <div className="max-w-5xl mx-auto">


                        <h3 className="text-center text-2xl md:text-3xl font-bold mb-12">
                            Jak pracuję i rozwijam się na co dzień
                        </h3>

                        <div className="relative border-l border-blue-500/20 pl-8 space-y-10">

                            <div className="relative">
                                <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30" />

                                <h4 className="text-xl font-semibold text-blue-500">
                                    Budowa projektów
                                </h4>

                                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                                    Tworzę własne aplikacje React, żeby rozwijać realne umiejętności, a nie tylko teorię.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/30" />

                                <h4 className="text-xl font-semibold text-cyan-500">
                                    Nauka nowych technologii
                                </h4>

                                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                                    Regularnie uczę się JavaScript, React, TypeScript i nowoczesnych narzędzi frontendowych.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-blue-400 shadow-lg shadow-blue-400/30" />

                                <h4 className="text-xl font-semibold text-blue-400">
                                    Gotowość do współpracy
                                </h4>

                                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                                    Jestem otwarty na projekty freelance, strony www i aplikacje webowe.
                                </p>
                            </div>

                        </div>

                        <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl text-center">
                            <h4 className="text-xl font-bold mb-2">
                                Aktualnie dostępny do współpracy
                            </h4>

                            <p className="text-gray-600 dark:text-gray-400">
                                React / Frontend / Freelance / Projekty webowe
                            </p>

                            <div className="mt-6 inline-flex items-center gap-2 text-green-500 font-medium">
                                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                                Online
                            </div>
                        </div>

                    </div>
                </section>





                <footer className="border-t border-gray-200 dark:border-gray-800 py-10 px-6 text-center">
                    <div className="max-w-4xl mx-auto flex flex-col gap-4">
                        <h3 className="text-xl font-bold">
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                Sebastian.dev
                            </span>
                        </h3>

                        <p className="text-gray-500 dark:text-gray-400">
                            © {new Date().getFullYear()} Wszystkie prawa zastrzeżone.
                        </p>

                        <div className="flex justify-center gap-6 text-gray-500">
                            <a href="#" className="hover:text-blue-500 transition">
                                GitHub
                            </a>
                            <a href="#about" className="hover:text-blue-500 transition">
                                O mnie
                            </a>
                            <a href="#contact" className="hover:text-blue-500 transition">
                                Kontakt
                            </a>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    );
}
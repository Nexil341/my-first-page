import "./Home.css";

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                {/* Background */}
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
                    className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors opacity-0 animate-[fadeInUp_1s_1.2s_ease_forwards]"
                >
                    <span className="text-sm uppercase tracking-widest">
                        Przewiń niżej
                    </span>

                    <div className="animate-bounce text-3xl">
                        ↓
                    </div>
                </a>
            </section>

            {/* ABOUT */}
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

                {/* Stats */}
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

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
                    <div className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="text-5xl mb-5">⚛️</div>

                        <h3 className="text-2xl font-bold mb-4">
                            React
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Tworzę nowoczesne aplikacje SPA wykorzystując React,
                            komponentowe podejście oraz dobre praktyki frontendowe.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="text-5xl mb-5">🎨</div>

                        <h3 className="text-2xl font-bold mb-4">
                            UI / UX
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Projektuję przejrzyste i estetyczne interfejsy,
                            które są wygodne w użytkowaniu i dobrze wyglądają
                            na każdym urządzeniu.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="text-5xl mb-5">🚀</div>

                        <h3 className="text-2xl font-bold mb-4">
                            Rozwój
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Nieustannie poszerzam wiedzę z zakresu JavaScript,
                            React, TypeScript i nowoczesnych narzędzi frontendowych.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
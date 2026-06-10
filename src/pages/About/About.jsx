import "./About.css";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 py-24"
        >
            <div className="max-w-5xl w-full">

                <div className="text-center mb-12 animate-fadeUp">
                    <h2 className="text-4xl md:text-6xl font-black">
                        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            O mnie
                        </span>
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mt-4 tracking-wide">
                        Developer profile / status / mindset
                    </p>
                </div>

                <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl shadow-2xl overflow-hidden animate-fadeUp">


                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 blur-2xl rounded-full" />
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/10 blur-2xl rounded-full" />

                    <div className="relative">


                        <div className="flex justify-between items-center mb-8 animate-fadeIn">
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <p className="text-green-500 font-semibold">
                                    Active developer
                                </p>
                            </div>

                            <div className="text-sm text-gray-500">
                                16 • PL • Frontend
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 animate-fadeUp">
                            Mam 16 lat i buduję swoją drogę jako frontend developer.
                            Skupiam się na React i nowoczesnych UI.
                        </p>


                        <div className="mb-8 p-5 rounded-2xl border border-blue-500/10 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-fadeUp">
                            ⚡ React • Tailwind • UI/UX • Web Apps
                        </div>


                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 animate-fadeUp">
                            Tworzę rzeczy jak produkty — nie ćwiczenia.
                        </p>


                        <div className="grid grid-cols-3 gap-4 animate-fadeUp">

                            <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-zinc-900/30 text-center transition-transform duration-300 hover:-translate-y-1">
                                <p className="text-2xl font-bold text-blue-500">16</p>
                                <p className="text-xs text-gray-500">years</p>
                            </div>

                            <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-zinc-900/30 text-center transition-transform duration-300 hover:-translate-y-1">
                                <p className="text-2xl font-bold text-cyan-400">React</p>
                                <p className="text-xs text-gray-500">stack</p>
                            </div>

                            <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-zinc-900/30 text-center transition-transform duration-300 hover:-translate-y-1">
                                <p className="text-2xl font-bold text-blue-400">∞</p>
                                <p className="text-xs text-gray-500">growth</p>
                            </div>

                        </div>

                    </div>
                </div>


                <div className="mt-10 text-center animate-fadeIn">
                    <p className="text-gray-500 dark:text-gray-400">
                        🚀 Buduję produkty, nie projekty szkolne
                    </p>
                </div>

            </div>
        </section>
    )
}
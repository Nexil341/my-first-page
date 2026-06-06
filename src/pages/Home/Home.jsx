export default function Home() {
    return (
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6">
            <span className="text-blue-500 font-semibold uppercase tracking-[0.3em] text-sm md:text-base mb-6">
                Frontend Developer
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-5xl">
                Cześć, jestem{" "}
                <strong className="text-blue-500">
                    Sebastian
                </strong>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Tworzę nowoczesne, szybkie i responsywne
                aplikacje webowe w React. Pomagam zamieniać
                pomysły w funkcjonalne produkty.
            </p>

            <a
                href="#about"
                className="mt-14 flex flex-col items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
            >
                <span className="text-sm uppercase tracking-widest">
                    Przewiń niżej
                </span>

                <div className="animate-bounce text-3xl">
                    ↓
                </div>
            </a>
        </section>
    );
}
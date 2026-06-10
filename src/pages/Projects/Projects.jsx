export default function Projects() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="max-w-4xl text-center">

                {/* TITLE */}
                <h1 className="text-4xl md:text-5xl font-black mb-6">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Projekty
                    </span>
                </h1>

                {/* STATUS BADGE */}
                <div className="flex justify-center mb-8">
                    <div className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 text-sm font-semibold">
                        🚧 W trakcie budowy
                    </div>
                </div>

                {/* MAIN TEXT */}
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                    Na ten moment pracuję nad swoimi pierwszymi projektami
                    w React. Każdy z nich będzie tutaj dodawany w miarę rozwoju
                    mojego portfolio.
                </p>

                {/* EMPTY STATE CARD */}
                <div className="p-8 rounded-3xl border border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl shadow-lg">

                    <div className="text-5xl mb-4">🧩</div>

                    <h2 className="text-2xl font-bold mb-3">
                        Projekty w drodze
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400">
                        Aktualnie skupiam się na nauce i budowaniu solidnych podstaw.
                        Wkrótce pojawią się tutaj pierwsze realne aplikacje.
                    </p>

                </div>

                {/* FUTURE CTA */}
                <p className="mt-10 text-gray-500 dark:text-gray-400">
                    🚀 Wkrótce: aplikacje React, UI projekty i realne wdrożenia
                </p>

            </div>
        </section>
    );
}
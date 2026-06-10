export default function Skills() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Umiejętności
                    </span>
                </h2>

                <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                    Technologie, z którymi pracuję na co dzień i które stale rozwijam poprzez projekty i praktykę.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                {[
                    { name: "React", level: 90, color: "from-blue-500 to-cyan-400", desc: "SPA, komponenty, hooks, architektura UI" },
                    { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500", desc: "ES6+, async/await, DOM, logika aplikacji" },
                    { name: "TypeScript", level: 75, color: "from-blue-600 to-blue-400", desc: "typowanie, interfejsy, bezpieczeństwo kodu" },
                    { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-blue-500", desc: "nowoczesny UI, responsywność, design systemy" },
                    { name: "UI / UX", level: 80, color: "from-pink-500 to-purple-500", desc: "layout, estetyka, doświadczenie użytkownika" },
                    { name: "Git / GitHub", level: 85, color: "from-gray-400 to-gray-600", desc: "kontrola wersji, workflow, projekty zespołowe" },
                ].map((skill, i) => (
                    <div
                        key={i}
                        className="p-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-xl font-bold">{skill.name}</h3>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                            {skill.desc}
                        </p>

                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-gradient-to-r ${skill.color}`}
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
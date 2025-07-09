export default function Documentation() {
    const docs = [
        {
        src: "/it_talks.jpeg",
        desc: "IT Talks : Career And Future.",
        },
        {
        src: "/klik_fest.jpeg",
        desc: "Klik Fest WebDev 2025 : Building The Future Web.",
        },
        {
        src: "/pkm.jpeg",
        desc: "PKM Smart Village : Smart Mobility.",
        },
    ];

    return (
        <section className="w-full max-w-5xl py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {docs.map((item, index) => (
            <div key={index} className="text-center">
                <img
                src={item.src}
                alt={`Dokumentasi ${index + 1}`}
                className="rounded-xl shadow-md w-full h-auto"
                />
                <p className="mt-4 text-sm text-gray-700">{item.desc}</p>
            </div>
            ))}
        </div>
        </section>
    );
    }

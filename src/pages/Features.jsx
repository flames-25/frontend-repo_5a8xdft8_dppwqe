export default function Features() {
  const cards = [
    {
      title: 'Headless by Design',
      desc: 'Entkoppelte Architektur – besser als monolithische CMS.',
    },
    {
      title: 'Multi-Client Ready',
      desc: 'Backend für Websites, Mobile Apps und IoT-Geräte.',
    },
    {
      title: 'Rich Content Modeling',
      desc: 'Benutzerdefinierte Felder und komplexe Beziehungen.',
    },
    {
      title: 'Webhooks & Events',
      desc: 'Benachrichtigt externe Dienste bei Content-Updates.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-200">
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Features & Use Cases</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {cards.map((c) => (
            <div key={c.title} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-gray-300">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Architektur</h2>
          <p className="mt-2 text-gray-300">Backend getrennt vom Frontend. Inhalt via API an beliebige Clients.</p>
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded bg-black/40 border border-white/10">Client Apps ➜ REST/GraphQL ➜ CoreDeck API</div>
            <div className="p-4 rounded bg-black/40 border border-white/10">CoreDeck ➜ Webhooks/Events ➜ Integrationen</div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Cpu, Workflow, Boxes, Webhook, Gauge, Layers } from 'lucide-react'

export default function Features() {
  const cards = [
    {
      title: 'Headless by Design',
      desc: 'Entkoppelte Architektur – besser als monolithische CMS.',
      icon: Layers,
    },
    {
      title: 'Multi-Client Ready',
      desc: 'Backend für Websites, Mobile Apps und IoT-Geräte.',
      icon: Boxes,
    },
    {
      title: 'Rich Content Modeling',
      desc: 'Benutzerdefinierte Felder und komplexe Beziehungen.',
      icon: Workflow,
    },
    {
      title: 'Webhooks & Events',
      desc: 'Benachrichtigt externe Dienste bei Content-Updates.',
      icon: Webhook,
    },
    {
      title: 'High Performance',
      desc: 'PHP 8.x, Caching, horizontale Skalierung.',
      icon: Gauge,
    },
    {
      title: 'Composable',
      desc: 'Baue nur die Teile, die du brauchst – Microservices-ready.',
      icon: Cpu,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-200 relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl font-bold text-white tracking-tight">Features & Use Cases</h1>
          <p className="mt-2 text-gray-300 max-w-2xl">CoreDeck liefert ein schlankes, erweiterbares Fundament für jede Content-getriebene Anwendung.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {cards.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400/30 to-blue-600/30 border border-white/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-2 text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold text-white">Architektur</h2>
            <p className="mt-2 text-gray-300">Backend getrennt vom Frontend. Inhalt via API an beliebige Clients.</p>
            <div className="mt-4 grid text-sm gap-3">
              <div className="p-4 rounded bg-black/40 border border-white/10">Client Apps ➜ REST/GraphQL ➜ CoreDeck API</div>
              <div className="p-4 rounded bg-black/40 border border-white/10">CoreDeck ➜ Webhooks/Events ➜ Integrationen</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold text-white">Use Cases</h2>
            <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
              <li>Marketing Websites & Portale</li>
              <li>Mobile & IoT-Content-Ausspielung</li>
              <li>Dokumentations- & Wissensbasen</li>
              <li>Multichannel Publishing</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

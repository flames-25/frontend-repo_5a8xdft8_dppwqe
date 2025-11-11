export default function Community() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-200">
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Community & Support</h1>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold text-white">GitHub</h3>
            <p className="mt-2 text-gray-300">Code-Repository, Issues, Pull Requests.</p>
          </a>
          <a href="#" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold text-white">Discussions</h3>
            <p className="mt-2 text-gray-300">Fragen & Antworten, Best Practices.</p>
          </a>
          <a href="#" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold text-white">Changelog</h3>
            <p className="mt-2 text-gray-300">Aktuelle Updates und Release Notes.</p>
          </a>
        </div>
      </div>
    </div>
  )
}

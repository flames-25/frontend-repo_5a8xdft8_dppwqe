export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f17] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} CoreDeck. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/docs" className="hover:text-white">Docs</a>
            <a href="/features" className="hover:text-white">Features</a>
            <a href="/community" className="hover:text-white">Community</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

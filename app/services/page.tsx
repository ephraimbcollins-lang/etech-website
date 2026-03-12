export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white relative overflow-hidden gradient-mesh scanline">
      
      {/* Abstract blobs */}
      <div className="blob blob-1 liquid-morph"></div>
      <div className="blob blob-2 liquid-morph" style={{animationDelay: '2s'}}></div>
      <div className="blob blob-3 liquid-morph" style={{animationDelay: '4s'}}></div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className="glass-dark px-6 py-4 flex justify-between items-center sticky top-0 backdrop-blur-md border-b border-white/20 neon-frame">
          <h1 className="text-2xl font-bold gradient-text holographic-text">ETech</h1>
          <div className="space-x-8 flex">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <a href="/services" className="text-white font-semibold border-b-2 border-white">Services</a>
            <a href="/about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="/schedule" className="hover:text-white transition-colors duration-300">Schedule</a>
            <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </nav>

        {/* Header Section */}
        <section className="min-h-[40vh] flex flex-col items-center justify-center py-20 px-6 relative">
          <div className="absolute top-10 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="text-center max-w-4xl animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text holographic-text">
              ETech Services
            </h1>
            <p className="text-xl text-gray-100">Cutting-edge solutions for every technology need</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">

              <div className="glass-dark p-8 rounded-2xl border-2 border-white/20 hover:border-white/60 transition-all duration-300 group hover:shadow-lg hover:shadow-white/30 animate-slide-in-left tech-card neon-frame cyber-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-400 rounded-lg mb-4 text-black">🌐</div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  Remote Tech Support
                </h2>
                <p className="text-gray-300">
                  Live troubleshooting and technical assistance from anywhere.
                </p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-400/30 hover:border-gray-400/60 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-400/30 animate-slide-in-right tech-card neon-frame cyber-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg mb-4">🛠</div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-gray-100 transition-colors">
                  In-Person Tech Support
                </h2>
                <p className="text-gray-300">
                  Hands-on help with computers, Wi-Fi, printers, and devices.
                </p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-500/30 hover:border-gray-500/60 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-500/30 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg mb-4">📱</div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-gray-100 transition-colors">
                  Device Setup
                </h2>
                <p className="text-gray-300">
                  Setup for computers, phones, tablets, and home devices.
                </p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-white/20 hover:border-white/60 transition-all duration-300 group hover:shadow-lg hover:shadow-white/30 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-400 rounded-lg mb-4 text-black">👨‍🏫</div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  Technology Coaching
                </h2>
                <p className="text-gray-300">
                  Personalized technology education and device guidance.
                </p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-400/30 hover:border-gray-400/60 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-400/30 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg mb-4">👴</div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-gray-100 transition-colors">
                  Senior Tech Classes
                </h2>
                <p className="text-gray-300">
                  Patient instruction designed for seniors learning technology.
                </p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-500/30 hover:border-gray-500/60 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-500/30 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg mb-4">🎨</div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-gray-100 transition-colors">
                  Website Development
                </h2>
                <p className="text-gray-300">
                  Professional websites for small businesses and organizations.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-dark p-12 rounded-3xl border-2 border-white/20 glow-cyan">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
              <a href="/contact" className="bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-300 px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-block transform hover:scale-110 text-black">
                Contact Us Today
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-dark border-t border-white/20 py-12 px-6 text-center mt-20 neon-frame">
          <p className="text-lg font-semibold gradient-text holographic-text mb-2">ETech – Technology Made Simple.</p>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ETech. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}
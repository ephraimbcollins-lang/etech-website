export default function About() {
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
            <a href="/services" className="hover:text-white transition-colors duration-300">Services</a>
            <a href="/about" className="text-white font-semibold border-b-2 border-white">About</a>
            <a href="/schedule" className="hover:text-white transition-colors duration-300">Schedule</a>
            <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </nav>

        {/* Header */}
        <section className="min-h-[40vh] flex flex-col items-center justify-center py-20 px-6 relative">
          <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="text-center max-w-4xl animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text holographic-text">
              About ETech
            </h1>
            <p className="text-xl text-gray-100">Our mission is to make technology simple and accessible</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="glass-dark p-10 rounded-2xl border-2 border-white/20 mb-8 animate-slide-in-left neon-frame tech-card cyber-glow">
              <h2 className="text-3xl font-bold mb-6 text-white holographic-text">Our Foundation</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                ETech was founded by Ephraim Collins to make technology easier and more accessible for individuals and small businesses.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 rounded"></div>
            </div>

            <div className="glass-dark p-10 rounded-2xl border-2 border-gray-400/30 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-3xl font-bold mb-6 text-gray-100">Our Founder</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Ephraim has experience working within the education system and teaching environments where patience, communication, and problem solving are essential skills. This background shapes everything we do at ETech.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded"></div>
            </div>

            <div className="glass-dark p-10 rounded-2xl border-2 border-gray-500/30 mb-8 animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-100">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                While currently pursuing his education, Ephraim created ETech as a way to use technology to support individuals, help small businesses grow, and contribute to strengthening the community.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded"></div>
            </div>

            <div className="glass-dark p-10 rounded-2xl border-2 border-white/20 glow-cyan animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Commitment</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded in Buffalo, ETech proudly serves clients locally and remotely through technology support, consulting, coaching, and digital services. We're committed to building lasting relationships and delivering exceptional results.
              </p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Let's Connect</h2>
            <a href="/contact" className="bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-300 px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-block transform hover:scale-110 glow-cyan text-black">
              Get In Touch
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-dark border-t border-white/20 py-12 px-6 text-center mt-20">
          <p className="text-lg font-semibold gradient-text mb-2">ETech – Technology Made Simple.</p>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ETech. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}
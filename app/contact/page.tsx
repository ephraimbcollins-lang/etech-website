export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white relative overflow-hidden gradient-mesh scanline">
      
      {/* Abstract blobs background */}
      <div className="blob blob-1 liquid-morph"></div>
      <div className="blob blob-2 liquid-morph" style={{animationDelay: '2s'}}></div>
      <div className="blob blob-3 liquid-morph" style={{animationDelay: '4s'}}></div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className="glass-dark px-6 py-4 flex justify-between items-center sticky top-0 backdrop-blur-md border-b border-white/20 neon-frame">
          <h1 className="text-2xl font-bold gradient-text holographic-text">ETech</h1>

          <div className="space-x-8 flex">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <a href="/services" className="hover:text-white transition-colors duration-300">Services</a>
            <a href="/about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="/schedule" className="hover:text-white transition-colors duration-300">Schedule</a>
            <a href="/contact" className="text-white font-semibold border-b-2 border-white">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 relative">
          
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float liquid-morph"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 bg-gray-400/10 rounded-full blur-2xl animate-float float-rotate" style={{animationDelay: '2s'}}></div>

          <div className="text-center max-w-4xl animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text holographic-text">
              Contact ETech
            </h1>
            
            <p className="text-xl text-gray-300 mb-2">
              Connect with the future of technology
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            
            {/* Email Card */}
            <div className="glass-dark p-8 rounded-2xl hover:border-white/50 transition-all duration-300 border-2 border-white/20 hover:shadow-lg hover:shadow-white/50 animate-slide-in-left neon-frame tech-card cyber-glow">
              <div className="text-4xl mb-4">✉</div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-300 break-all">
                2026etech@gmail.com
              </p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-white to-gray-400 rounded"></div>
            </div>

            {/* Location Card */}
            <div className="glass-dark p-8 rounded-2xl hover:border-gray-400/50 transition-all duration-300 border-2 border-gray-400/30 hover:shadow-lg hover:shadow-gray-400/50 animate-fade-in neon-frame tech-card cyber-glow" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-gray-300">
                Buffalo
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Serving clients locally and remotely
              </p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded"></div>
            </div>

            {/* Service Card */}
            <div className="glass-dark p-8 rounded-2xl hover:border-gray-500/50 transition-all duration-300 border-2 border-gray-500/30 hover:shadow-lg hover:shadow-gray-500/50 animate-slide-in-right neon-frame tech-card cyber-glow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <p className="text-gray-300">
                Cutting-edge solutions for tomorrow's challenges
              </p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-gray-500 to-white rounded"></div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="glass-dark p-10 rounded-3xl border-2 border-white/20 hover:border-white/60 transition-all duration-300 glow-cyan neon-frame cyber-glow">
              <h2 className="text-3xl font-bold mb-8 gradient-text holographic-text">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-100">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full bg-slate-900/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors neon-frame"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-100">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full bg-slate-900/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors neon-frame"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-100">Message</label>
                  <textarea 
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full bg-slate-900/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors neon-frame"
                  ></textarea>
                </div>

                <button className="w-full bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-300 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 glow-cyan neon-frame pulse-cyber">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-dark border-t border-white/20 py-12 px-6 text-center mt-20 neon-frame">
          <p className="text-lg font-semibold gradient-text holographic-text mb-2">ETech – Technology Made Simple.</p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ETech. All Rights Reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}
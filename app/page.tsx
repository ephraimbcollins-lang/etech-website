export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white relative overflow-hidden gradient-mesh scanline">
      
      {/* Abstract blobs */}
      <div className="blob blob-1 liquid-morph"></div>
      <div className="blob blob-2 liquid-morph" style={{animationDelay: '2s'}}></div>
      <div className="blob blob-3 liquid-morph" style={{animationDelay: '4s'}}></div>

      {/* Advanced animated background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className="glass-dark px-6 py-4 flex justify-between items-center sticky top-0 backdrop-blur-md border-b border-white/20 neon-frame">
          <h1 className="text-2xl font-bold gradient-text holographic-text">ETech</h1>
          <div className="space-x-8 flex">
            <a href="/" className="text-white font-semibold border-b-2 border-white hover:shadow-lg hover:shadow-white/30 transition-all">Home</a>
            <a href="/services" className="hover:text-white transition-colors duration-300 hover:shadow-md hover:shadow-white/20">Services</a>
            <a href="/about" className="hover:text-white transition-colors duration-300 hover:shadow-md hover:shadow-white/20">About</a>
            <a href="/schedule" className="hover:text-white transition-colors duration-300 hover:shadow-md hover:shadow-white/20">Schedule</a>
            <a href="/contact" className="hover:text-white transition-colors duration-300 hover:shadow-md hover:shadow-white/20">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center py-24 px-6 text-center relative">
          <div className="absolute top-20 right-10 w-40 h-40 bg-gray-400/10 rounded-full blur-3xl animate-float liquid-morph"></div>
          <div className="absolute bottom-40 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float float-rotate" style={{animationDelay: '3s'}}></div>

          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text holographic-text leading-tight">
              Your Trusted Technology Partner
            </h1>
            <p className="text-2xl text-gray-100 mb-6 font-light">
              Local Roots. Modern Solutions.
            </p>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-300 leading-relaxed">
              Founded in Buffalo and serving clients both locally and remotely, ETech provides relationship-driven technology support, digital consulting, and website solutions for individuals and small businesses.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="#booking"
                className="bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-300 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-110 glow-cyan text-black neon-frame cyber-glow pulse-cyber"
              >
                Schedule a Consultation
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-gray-100 hover:text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-all duration-300 neon-frame aurora-border"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text holographic-text">Tech Support Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="glass-dark p-8 rounded-2xl border-2 border-white/20 hover:border-white/60 transition-all duration-300 group hover:shadow-lg hover:shadow-white/30 animate-slide-in-left tech-card neon-frame cyber-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-400 rounded-lg mb-4 flex items-center justify-center text-xl font-bold text-black">⚡</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">Standard Tech Support</h3>
                <p className="text-gray-300 mb-4">Wi-Fi troubleshooting, printer setup, software installs, and general fixes.</p>
                <p className="text-gray-100 font-semibold">$55</p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-400/30 hover:border-gray-400/60 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-400/30 animate-slide-in-right tech-card neon-frame cyber-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg mb-4 flex items-center justify-center text-xl font-bold text-black">📱</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-100 transition-colors">New Device Setup</h3>
                <p className="text-gray-300 mb-4">Full setup, security updates, data transfer, and guided walkthrough.</p>
                <p className="text-gray-300 font-semibold">$89</p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-500/30 hover:border-gray-500/60 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-500/30 animate-fade-in tech-card neon-frame cyber-glow" style={{animationDelay: '0.2s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg mb-4 flex items-center justify-center text-xl font-bold text-white">👨‍🏫</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-100 transition-colors">Tech Coaching</h3>
                <p className="text-gray-300 mb-4">One-on-one lessons for phones, laptops, and online safety.</p>
                <p className="text-gray-300 font-semibold">$52/hr</p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-white/20 hover:border-white/60 transition-all duration-300 group hover:shadow-lg hover:shadow-white/30 animate-fade-in tech-card neon-frame cyber-glow" style={{animationDelay: '0.4s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-400 rounded-lg mb-4 flex items-center justify-center text-xl font-bold text-black">🏠</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">Smart Home Setup</h3>
                <p className="text-gray-300 mb-4">Smart TVs, streaming devices, and home tech integration.</p>
                <p className="text-gray-100 font-semibold">$72+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Solutions Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text holographic-text">Digital & Business Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-400/30 hover:border-gray-400/60 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-400/30 animate-slide-in-left tech-card neon-frame" style={{animationDelay: '0.1s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg mb-4 flex items-center justify-center text-xl font-bold text-black">🌐</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-100 transition-colors">Website Development</h3>
                <p className="text-gray-300">Custom websites for small businesses looking to establish a professional online presence.</p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-500/30 hover:border-gray-500/60 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-500/30 animate-slide-in-right tech-card neon-frame" style={{animationDelay: '0.1s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg mb-4 flex items-center justify-center text-xl font-bold text-white">💡</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-100 transition-colors">Technology Consulting</h3>
                <p className="text-gray-300">Strategic guidance for small businesses on tech setup, software tools, and digital growth.</p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-white/20 hover:border-white/60 transition-all duration-300 group hover:shadow-lg hover:shadow-white/30 animate-fade-in tech-card neon-frame" style={{animationDelay: '0.2s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-400 rounded-lg mb-4 flex items-center justify-center text-xl font-bold text-black">🌍</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">Remote Support</h3>
                <p className="text-gray-300">Virtual assistance and troubleshooting for clients outside the Buffalo area.</p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-400/30 hover:border-gray-400/60 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-400/30 animate-fade-in tech-card neon-frame" style={{animationDelay: '0.3s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg mb-4 flex items-center justify-center text-xl font-bold text-black">🚀</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-100 transition-colors">Small Business Tech Setup</h3>
                <p className="text-gray-300">Workstation configuration, Wi-Fi optimization, printer networking, and digital workflow setup.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-20 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="glass-dark p-12 rounded-3xl border-2 border-white/20 hover:border-white/60 transition-all duration-300 glow-cyan text-center neon-frame cyber-glow">
              <h2 className="text-4xl font-bold mb-6 gradient-text holographic-text">Schedule Your Appointment</h2>
              <p className="text-gray-300 mb-10 text-lg">Choose the service that fits your needs and book your consultation today.</p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://calendly.com/2026etech/remote-tech-support-clone"
                  target="_blank"
                  className="bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-300 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-110 text-black neon-frame pulse-cyber"
                >
                  Schedule Tech Support
                </a>
                <a
                  href="https://calendly.com/2026etech/30min"
                  target="_blank"
                  className="border-2 border-white text-gray-100 hover:text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-all duration-300 neon-frame aurora-border"
                >
                  Free Consultation
                </a>
              </div>
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
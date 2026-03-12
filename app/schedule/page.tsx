export default function Schedule() {
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
            <a href="/about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="/schedule" className="text-white font-semibold border-b-2 border-white">Schedule</a>
            <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </nav>

        {/* Main Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 relative">
          
          <div className="absolute top-32 right-20 w-32 h-32 bg-gray-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

          <div className="text-center max-w-4xl animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text">
              Schedule a Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Book a consultation or service appointment online. Choose the time that works best for you and let's discuss how ETech can help.
            </p>

            <div className="space-y-6">
              {/* Tech Support Booking */}
              <div className="glass-dark p-8 rounded-2xl border-2 border-white/20 hover:border-white/60 transition-all duration-300 hover:shadow-lg hover:shadow-white/30">
                <h2 className="text-2xl font-bold mb-4 text-white">Tech Support Appointment</h2>
                <p className="text-gray-300 mb-6">Schedule a tech support session tailored to your needs</p>
                <a
                  href="https://calendly.com/2026etech/remote-tech-support-clone"
                  target="_blank"
                  className="bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-300 px-8 py-3 rounded-lg font-bold transition-all duration-300 inline-block transform hover:scale-110 text-black"
                >
                  Book Tech Support
                </a>
              </div>

              {/* Free Consultation Booking */}
              <div className="glass-dark p-8 rounded-2xl border-2 border-gray-400/30 hover:border-gray-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/30">
                <h2 className="text-2xl font-bold mb-4 text-gray-100">Free Consultation</h2>
                <p className="text-gray-300 mb-6">Get a free 30-minute consultation to discuss your technology needs</p>
                <a
                  href="https://calendly.com/2026etech/30min"
                  target="_blank"
                  className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-300 hover:to-gray-400 px-8 py-3 rounded-lg font-bold transition-all duration-300 inline-block transform hover:scale-110 text-black"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 glass-dark p-8 rounded-2xl border-2 border-gray-500/30">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Need Help?</h3>
              <p className="text-gray-300 mb-4">Can't find a time that works for you? Contact us directly.</p>
              <a href="/contact" className="text-white hover:text-gray-100 font-semibold transition-colors duration-300">
                Send us a message →
              </a>
            </div>
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
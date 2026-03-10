export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      <section className="bg-black text-white py-24 px-6 text-center">
  <h1 className="text-4xl md:text-5xl font-bold mb-6">
    Your Trusted Technology Partner
  </h1>

  <p className="text-xl mb-6">
    Local Roots. Modern Solutions.
  </p>

  <p className="max-w-2xl mx-auto mb-8 text-gray-300">
    Founded in Buffalo and serving clients both locally and remotely, 
    ETech provides relationship-driven technology support, digital consulting, 
    and website solutions for individuals and small businesses.
  </p>

  <a
    href="#booking"
    className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
  >
    Schedule a Consultation
  </a>
</section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Standard Tech Support – $55</h3>
            <p>Wi-Fi troubleshooting, printer setup, software installs, and general fixes.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">New Device Setup – $89</h3>
            <p>Full setup, security updates, data transfer, and guided walkthrough.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Tech Coaching – $52/hr</h3>
            <p>One-on-one lessons for phones, laptops, and online safety.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Smart Home Setup – $72+</h3>
            <p>Smart TVs, streaming devices, and home tech integration.</p>
          </div>
        </div>
      </section>
<section className="py-20 px-6 max-w-6xl mx-auto bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-12">
    Digital & Business Solutions
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-3">Website Development</h3>
      <p>Custom websites for small businesses looking to establish a professional online presence.</p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-3">Technology Consulting</h3>
      <p>Strategic guidance for small businesses on tech setup, software tools, and digital growth.</p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-3">Remote Support</h3>
      <p>Virtual assistance and troubleshooting for clients outside the Buffalo area.</p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-3">Small Business Tech Setup</h3>
      <p>Workstation configuration, Wi-Fi optimization, printer networking, and digital workflow setup.</p>
    </div>
  </div>
</section>
      <section id="booking" className="py-20 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Schedule Your Appointment</h2>
        <div className="flex gap-4 justify-center flex-wrap">

  <a
    href="https://calendly.com/2026etech/remote-tech-support-clone"
    target="_blank"
    className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
  >
    Schedule Tech Support
  </a>

  <a
    href="https://calendly.com/2026etech/30min"
    target="_blank"
    className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
  >
    Free Consultation
  </a>

</div>
      </section>

      <footer className="bg-black text-white py-6 text-center">
        <p>ETech – Technology Made Simple.</p>
        <p className="text-gray-400 text-sm mt-2">
          © {new Date().getFullYear()} ETech. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">ETech</h1>
        <p className="text-xl mb-6">Professional Local Technology Support</p>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          Reliable, patient, and professional tech help for computers, phones, Wi-Fi,
          printers, and smart home devices.
        </p>
        <a
          href="#booking"
          className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Book a Service
        </a>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Standard Tech Support – $89</h3>
            <p>Wi-Fi troubleshooting, printer setup, software installs, and general fixes.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">New Device Setup – $129</h3>
            <p>Full setup, security updates, data transfer, and guided walkthrough.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Tech Coaching – $85/hr</h3>
            <p>One-on-one lessons for phones, laptops, and online safety.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Smart Home Setup – $109+</h3>
            <p>Smart TVs, streaming devices, and home tech integration.</p>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Schedule Your Appointment</h2>
        <p className="mb-8 text-gray-600">
          Booking system coming soon. Contact directly for now.
        </p>
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
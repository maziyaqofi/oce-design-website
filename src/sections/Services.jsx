function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 mb-12">
          We provide high-quality design solutions to help your brand grow and stand out.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-8 rounded-2xl border transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0047AB]">
            <h3 className="text-xl font-semibold mb-4 text-[#0047AB]">
              Social Media Design
            </h3>
            <p className="text-gray-600">
              Engaging and professional content design to elevate your social media presence.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-8 rounded-2xl border transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0047AB]">
            <h3 className="text-xl font-semibold mb-4 text-[#0047AB]">
              Branding Identity
            </h3>
            <p className="text-gray-600">
              Build a strong and memorable brand identity that connects with your audience.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-8 rounded-2xl border transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0047AB]">
            <h3 className="text-xl font-semibold mb-4 text-[#0047AB]">
              Content Strategy
            </h3>
            <p className="text-gray-600">
              Strategic planning to create consistent and impactful visual communication.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
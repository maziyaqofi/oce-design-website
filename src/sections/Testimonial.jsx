function Testimonial() {
  return (
    <section id="testimoni" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>

        <p className="text-gray-600 mb-12">
          We value our clients and always strive to deliver the best results.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <p className="text-gray-600 mb-6">
              "Oce Design helped elevate our brand with clean and modern visuals.
              Highly recommended!"
            </p>
            <h4 className="font-semibold text-[#0047AB]">
              Sarah Johnson
            </h4>
            <span className="text-sm text-gray-500">
              Business Owner
            </span>
          </div>

          {/* CARD */}
          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <p className="text-gray-600 mb-6">
              "Professional, fast, and creative. The results exceeded our expectations."
            </p>
            <h4 className="font-semibold text-[#0047AB]">
              Michael Lee
            </h4>
            <span className="text-sm text-gray-500">
              Startup Founder
            </span>
          </div>

          {/* CARD */}
          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <p className="text-gray-600 mb-6">
              "Great communication and high-quality design. Will definitely work together again."
            </p>
            <h4 className="font-semibold text-[#0047AB]">
              Emily Carter
            </h4>
            <span className="text-sm text-gray-500">
              Marketing Manager
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial
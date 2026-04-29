import people1 from "../assets/people1.png"

function Hero() {
  return (
    <section
    id="home"
    className="relative min-h-screen flex items-center bg-gray-50 pt-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Build Your Brand <br />
            With <span className="text-[#0047AB]">Oce Design</span>
          </h1>

          <p className="text-gray-700 text-lg mb-20">
            We help businesses and personal brands look more professional
            through clean, modern, and impactful visual design.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-10 py-3 rounded-xl">
              View Portfolio
            </button>

            <button className="border px-10 py-3 rounded-xl">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-end h-full">
        <img
        src={people1}
        alt="People"
        className="w-full max-w-[650px] h-auto rounded-none"
        />
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-b from-transparent via-[#0047AB]/40 to-[#0047AB] z-0" />
    </section>
  )
}

export default Hero
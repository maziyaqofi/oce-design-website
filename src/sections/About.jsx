import aboutImg from "../assets/image1.png"

function About() {
  return (
    <section id="about" className="py-24 bg-[#0047AB] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About"
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>

        {/* RIGHT - TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Oce Design
          </h2>

          <p className="text-white/80 mb-4">
            Oce Design is a creative studio focused on helping brands
            build a strong and professional visual identity.
          </p>

          <p className="text-white/80 mb-6">
            We believe great design is not just about aesthetics,
            but about delivering clear communication and real impact.
          </p>

          <div className="space-y-3">
            <p>✔️ Modern & clean design</p>
            <p>✔️ Strategic branding approach</p>
            <p>✔️ Long-term brand support</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
import {FaWhatsapp, FaEnvelope} from "react-icons/fa"

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0047AB] text-white text-center">
      <div className="max-w-3xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-4">
          Let’s Work Together
        </h2>

        <p className="text-white/80 mb-8">
          Ready to elevate your brand with professional design?
          Let’s discuss your project today.
        </p>

        {/* BUTTON */}
        <div className="flex justify-center gap-4 flex-wrap">

        {/* WHATSAPP */}
        <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            className="flex items-center gap-2 bg-white text-[#0047AB] px-6 py-3 rounded-xl font-semibold transition hover:opacity-90 hover:scale-105"
        >
            <FaWhatsapp />
            Contact via WhatsApp
        </a>

        {/* EMAIL */}
        <a
            href="mailto:youremail@gmail.com"
            className="flex items-center gap-2 border px-6 py-3 rounded-xl transition hover:bg-white hover:text-[#0047AB] hover:scale-105"
        >
            <FaEnvelope />
            Send Email
        </a>

        </div>

      </div>
    </section>
  )
}

export default Contact
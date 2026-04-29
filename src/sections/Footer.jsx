function Footer() {
  return (
    <footer className="bg-[#0047AB] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold mb-3">
            Oce Design
          </h3>
          <p className="text-white/80">
            Helping brands grow through clean and modern visual design.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h4 className="font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-white/80">Email: your@email.com</p>
          <p className="text-white/80">WhatsApp: +62 xxx</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-white/60 mt-20 text-sm">
        © 2026 Oce Design. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
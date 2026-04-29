function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <img src="/src/assets/OCELOGO.png" className="h-10" />

        <ul className="hidden md:flex gap-8 text-[#0047AB]">
        <li><a href="#home" className="hover:font-bold trasition">Home</a></li>
        <li><a href="#about" className="hover:font-bold trasition">About</a></li>
        <li><a href="#services" className="hover:font-bold trasition">Services</a></li>
        <li><a href="#portfolio" className="hover:font-bold trasition">Portfolio</a></li>
        <li><a href="#testimoni" className="hover:font-bold trasition">Testimoni</a></li>
        <li><a href="#pricing" className="hover:font-bold trasition">Pricing</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
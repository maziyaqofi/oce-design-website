export default function BrandStrip() {
  const brands = [
    "Canva",
    "Adobe",
    "Figma",
    "Instagram",
    "TikTok",
    "Meta",
    "Photoshop",
    "Illustrator",
  ]

  return (
    <section className="w-full overflow-hidden bg-white/30 backdrop-blur-sm py-6">
      <div className="brand-marquee">
        <div className="brand-track">
          {[...brands, ...brands].map((brand, index) => (
            <span key={index} className="brand-item">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
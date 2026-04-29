function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Portfolio
        </h2>

        <p className="text-gray-600 mb-12">
          A selection of our recent design work for clients and brands.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* ITEM */}
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://via.placeholder.com/400"
              alt="project"
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white font-semibold">Project Title</p>
            </div>
          </div>

          {/* ITEM */}
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://via.placeholder.com/400"
              alt="project"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white font-semibold">Project Title</p>
            </div>
          </div>

          {/* ITEM */}
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://via.placeholder.com/400"
              alt="project"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white font-semibold">Project Title</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portfolio
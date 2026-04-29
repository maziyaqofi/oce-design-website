function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Pricing Plans
        </h2>

        <p className="text-gray-600 mb-12">
          Choose the best plan that fits your needs.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* BASIC */}
          <div className="p-8 rounded-2xl border transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-[#0047AB]">
              Basic
            </h3>

            <p className="text-3xl font-bold mb-6">$99</p>

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✔️ 5 Social Media Posts</li>
              <li>✔️ Basic Design</li>
              <li>✔️ 2 Revisions</li>
            </ul>

            <button className="border px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>

          {/* STANDARD (HIGHLIGHT) */}
          <div className="p-8 rounded-2xl bg-[#0047AB] text-white shadow-xl scale-105">
            <h3 className="text-xl font-semibold mb-4">
              Standard
            </h3>

            <p className="text-3xl font-bold mb-6">$199</p>

            <ul className="space-y-2 mb-6">
              <li>✔️ 10 Social Media Posts</li>
              <li>✔️ Advanced Design</li>
              <li>✔️ 5 Revisions</li>
            </ul>

            <button className="bg-white text-[#0047AB] px-6 py-2 rounded-lg">
              Most Popular
            </button>
          </div>

          {/* PREMIUM */}
          <div className="p-8 rounded-2xl border transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-[#0047AB]">
              Premium
            </h3>

            <p className="text-3xl font-bold mb-6">$299</p>

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✔️ Unlimited Posts</li>
              <li>✔️ Full Branding Kit</li>
              <li>✔️ Unlimited Revisions</li>
            </ul>

            <button className="border px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Pricing
import React from 'react'

function HowItWorks() {
  return (
    <div>
        <div className="w-full bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      <div className="p-8 rounded-xl shadow-md bg-gray-50 hover:scale-105 transition">
        <div className="text-red-500 text-4xl font-bold mb-4">1</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Register</h3>
        <p className="text-gray-500">Sign up as a donor with your basic information.</p>
      </div>

      <div className="p-8 rounded-xl shadow-md bg-gray-50 hover:scale-105 transition">
        <div className="text-red-500 text-4xl font-bold mb-4">2</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Contacted</h3>
        <p className="text-gray-500">We will reach out to you when a match is needed.</p>
      </div>

      <div className="p-8 rounded-xl shadow-md bg-gray-50 hover:scale-105 transition">
        <div className="text-red-500 text-4xl font-bold mb-4">3</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Save a Life</h3>
        <p className="text-gray-500">Donate blood and help someone in need.</p>
      </div>

    </div>

  </div>
</div>

    </div>
  )
}

export default HowItWorks
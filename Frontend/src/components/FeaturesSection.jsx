import React from 'react'

function FeaturesSection() {
  return (
    <div>
        <div className="w-full bg-gray-100 py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    
    <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Us?</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      <div className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition">
        <h3 className="text-xl font-bold text-red-500 mb-3">Fast Response</h3>
        <p className="text-gray-500">We connect donors and receivers quickly during emergencies.</p>
      </div>

      <div className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition">
        <h3 className="text-xl font-bold text-red-500 mb-3">Nearby Donors</h3>
        <p className="text-gray-500">Find donors close to your location for faster support.</p>
      </div>

      <div className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition">
        <h3 className="text-xl font-bold text-red-500 mb-3">Verified Data</h3>
        <p className="text-gray-500">All donor information is checked and kept securely.</p>
      </div>

    </div>

  </div>
</div>

    </div>
  )
}

export default FeaturesSection
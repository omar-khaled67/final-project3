import React from 'react'

function Statistics() {
  return (
    <div>
        <div className="w-full bg-white py-16">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red-500">5000+</h1>
      <p className="text-gray-600 mt-2">Registered Donors</p>
    </div>

    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red-500">1200+</h1>
      <p className="text-gray-600 mt-2">Lives Saved</p>
    </div>

    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red-500">35+</h1>
      <p className="text-gray-600 mt-2">Partner Hospitals</p>
    </div>

    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red-500">90%</h1>
      <p className="text-gray-600 mt-2">Response Rate</p>
    </div>

  </div>
</div>
    </div>
  )
}

export default Statistics
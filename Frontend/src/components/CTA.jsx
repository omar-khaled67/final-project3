import React from 'react'
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <div>
        <div className="w-full bg-gray-100 py-16 mt-16">
  <div className="max-w-5xl mx-auto text-center px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
      Ready to Save a Life?
    </h2>
    <p className="text-gray-600 text-lg mt-4">
      Join thousands of donors who are making a difference every day.
    </p>
    <Link to="/contact"><button className="mt-6 px-8 py-3 bg-red-500 text-white font-bold rounded-md shadow-md hover:bg-red-600 transition">
      Become a Donor
    </button></Link>
  </div>
</div>


    </div>
  )
}

export default CTA
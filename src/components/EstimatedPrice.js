import React from 'react'

export default function EstimatedPrice({price}) {
  return (
    
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Estimated Price
          </h2>
          <p className="text-lg text-blue-600">${price}</p>
        </div>
     
  )
}

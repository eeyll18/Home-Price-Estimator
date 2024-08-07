import React from "react";
import LocationSelect from "./LocationSelect";

export default function Form({formData, handleChange, handleSubmit, locations}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    
      <LocationSelect locations={locations} formData={formData} handleChange={handleChange}/>
      <div className="flex flex-col">
        <label className="text-lg font-medium text-gray-700">
          Total Square(m2)
        </label>
        <input
          type="text"
          name="total_sqft"
          value={formData.total_sqft}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-lg font-medium text-gray-700">Bathroom</label>
        <input
          type="text"
          name="bath"
          value={formData.bath}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-lg font-medium text-gray-700">Bedroom</label>
        <input
          type="text"
          name="bkh"
          value={formData.bkh}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Predict Price
      </button>
    </form>
  );
}

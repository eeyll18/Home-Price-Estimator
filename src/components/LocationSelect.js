import React from "react";

export default function LocationSelect({formData,locations,handleChange}) {
  return (
    <div className="flex flex-col">
      <label className="text-lg font-medium text-gray-700">Location</label>
      <select
        name="location"
        value={formData.location}
        onChange={handleChange}
        className="mt-1 p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Location</option>
        {locations.length > 0 ? (
          locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))
        ) : (
          <option value="">Loading...</option>
        )}
      </select>
    </div>
  );
}

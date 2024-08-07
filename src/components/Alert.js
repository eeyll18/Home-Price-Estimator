import React from "react";

export default function Alert() {
  return (
    <div className="absolute top-0 right-0 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg shadow-md">
      <p className="text-sm">
        This price is NOT ABSOLUTE value, just an estimation based on the
        collected database.
      </p>
    </div>
  );
}

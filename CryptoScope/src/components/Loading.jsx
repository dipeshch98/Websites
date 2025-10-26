// src/components/Loading.jsx
import React from "react";

export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}

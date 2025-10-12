import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      {/* Animated Gradient Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 animate-spin-slow blur-md opacity-70"></div>
        <div className="absolute inset-0 rounded-full border-4 border-green-600 border-t-transparent animate-spin"></div>
      </div>

      {/* Loading Text */}
      <p className="text-gray-700 font-semibold text-lg animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;

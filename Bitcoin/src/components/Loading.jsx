

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent border-solid rounded-full animate-spin mb-4"></div>
      
      {/* Loading Text */}
      <p className="text-gray-700 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default Loading;

import React from "react";

const ApiDebugger = ({ data, loading, error, title = "API Debug Data" }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 my-4">
      <h3 className="text-lg font-bold mb-3 text-gray-800">{title}</h3>

      {loading && (
        <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
          <p className="text-blue-800 font-semibold">Loading Status: TRUE</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-3 mb-3">
          <p className="text-red-800 font-semibold">Error Status: TRUE</p>
          <pre className="text-red-600 text-sm mt-2 whitespace-pre-wrap">
            {error.message || JSON.stringify(error, null, 2)}
          </pre>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded p-3">
        <p className="font-semibold text-gray-700 mb-2">Raw API Response:</p>
        <pre className="text-xs bg-gray-50 p-2 rounded overflow-auto max-h-96 text-gray-800">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>

      {data && (
        <div className="mt-3 bg-green-50 border border-green-200 rounded p-3">
          <p className="text-green-800 font-semibold">Data Structure Analysis:</p>
          <ul className="text-sm text-green-700 mt-2">
            <li>• Data Type: {typeof data}</li>
            <li>• Keys: {data && typeof data === 'object' ? Object.keys(data).join(', ') : 'N/A'}</li>
            {data?.news && <li>• News Array Length: {data.news.length}</li>}
            {data?.articles && <li>• Articles Array Length: {data.articles.length}</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ApiDebugger;
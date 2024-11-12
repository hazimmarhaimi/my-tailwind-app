// src/components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
        <p className="text-indigo-500 mt-3 text-center">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
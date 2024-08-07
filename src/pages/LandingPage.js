import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-300 text-white">
      <div className="text-center p-5">
        <h1 className="text-5xl font-bold mb-5">Welcome to Home Price Estimator</h1>
        <p className="text-xl mb-8">
          Estimate the value of homes with our advanced AI-powered tool. Simply provide the necessary details and get accurate price predictions.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/home" className="bg-white text-blue-800 font-bold py-2 px-4 rounded shadow-lg hover:bg-slate-200 items-center">
            Go to Home Page
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-center p-5">
        <p className="text-sm">&copy; 2024 Home Price Estimator. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;

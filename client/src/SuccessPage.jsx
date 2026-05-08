import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

const FormSubmissionConfirmation = () => {
  const [countdown, setCountdown] = useState(5);
 const navigate=useNavigate();
  useEffect(() => {
    // Countdown timer for redirect simulation
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);
  useEffect(()=>{
    if(countdown===0){
navigate("/");
    }
  },[countdown,navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Animated Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600">
            Your message has been successfully delivered.
          </p>
        </div>

        {/* Main Confirmation Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 transform transition-all duration-500 hover:shadow-2xl">
          <div className="md:flex">
            {/* Left side with icon */}
            <div className="md:w-2/5 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-8 md:p-12">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping"></div>
                <div className="relative bg-white rounded-full p-6">
                  <svg
                    className="w-16 h-16 md:w-20 md:h-20 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89-4.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
           
            {/* Right side with message */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Form Submitted Successfully
                </h2>
              </div>
             
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We've received your contact form submission and will get back to you shortly. Our team typically responds within 24 hours during business days.
                </p>
               
               
              </div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Quick Response</h3>
            <p className="text-gray-600 text-sm">We aim to respond to all inquiries within one business day.</p>
          </div>
         
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Direct Communication</h3>
            <p className="text-gray-600 text-sm">A dedicated team member will personally handle your inquiry.</p>
          </div>
         
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Email Confirmation</h3>
            <p className="text-gray-600 text-sm">We've sent a confirmation email to the address you provided.</p>
          </div>
        </div>

        {/* Action Buttons & Redirect Info */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="font-bold text-gray-800 mb-2">Need immediate assistance?</h3>
              <p className="text-gray-600">Call us at <span className="font-semibold"> +91 9646174266</span> during business hours.</p>
            </div>
           
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => window.location.href="/"}
              >
                Return to Home
              </button>
              <button
                className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => window.location.href="/contact"}
              >
                Contact Again
              </button>
            </div>
          </div>
         
          {/* Countdown for redirect simulation */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              You will be automatically redirected to our homepage in
              <span className="font-bold text-indigo-600 mx-1">{countdown}</span>
              seconds.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 max-w-md mx-auto">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${(5 - countdown) * 20}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FormSubmissionConfirmation;



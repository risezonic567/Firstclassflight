import React from "react";
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
      <div className="max-w-2xl text-center">
        
      
        <div className="flex justify-center mb-6">
          <Plane className="w-14 h-14 text-red-600" />
        </div>


        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>

     
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable. Let’s help you get back on track and plan your journey.
        </p>

  
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-9 00 transition duration-300"
          >
            Back to Home
          </Link>

          <a
            href="tel:+1-844-821-5950"
            className="border border-red-600 text-red-600 px-6 py-3 rounded-full font-medium hover:bg-teal-50 transition duration-300"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}
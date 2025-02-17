import React from "react";

function SectionHeading({ title, span, description }) {
  return (
    <div className="text-center px-4">
      {/* Title with Responsive Typography */}
      <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 flex items-center justify-center">
        <span className="w-10 sm:w-12 md:w-16 h-1 bg-green-600 inline-block mr-3 rounded-full"></span>
        {title}
        <span className="w-10 sm:w-12 md:w-16 h-1 bg-indigo-600 inline-block ml-3 rounded-full"></span>
      </h2>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl md:text-2xl font-bold">
        <span className="text-green-600 underline underline-offset-4 mr-2">
          {span}
        </span>
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;

import React from 'react';

const TrendingSkeleton = () => {
  return (
<div className="my-[80px] container mx-auto">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="skeleton h-9 w-56 mx-auto"></div>
        <div className="skeleton h-4 w-80 max-w-full mx-auto"></div>
      </div>

      {/* App Card Skeletons */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-md rounded-2xl border border-base-300 bg-base-100 p-5"
          >
            {/* Top Section */}
            <div className="flex gap-4">
              {/* App Image */}
              <div className="skeleton h-20 w-20 shrink-0 rounded-2xl"></div>

              {/* App Info */}
              <div className="min-w-0 flex-1 space-y-2">
                {/* Title */}
                <div className="skeleton h-6 w-3/4"></div>

                {/* Company */}
                <div className="skeleton h-4 w-1/2"></div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="skeleton h-4 w-8"></div>
                  <div className="skeleton h-4 w-4 rounded-full"></div>
                  <div className="skeleton h-4 w-10"></div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5 space-y-2">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-4/5"></div>
            </div>

            {/* App Stats */}
            <div className="mt-5 grid grid-cols-3 rounded-xl bg-base-200 py-3">
              <div className="flex flex-col items-center gap-2">
                <div className="skeleton h-4 w-12"></div>
                <div className="skeleton h-3 w-16"></div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="skeleton h-4 w-12"></div>
                <div className="skeleton h-3 w-10"></div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="skeleton h-4 w-12"></div>
                <div className="skeleton h-3 w-12"></div>
              </div>
            </div>

            {/* Button */}
            <div className="skeleton mt-5 h-12 w-full rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSkeleton;
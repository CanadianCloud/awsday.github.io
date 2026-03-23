import React from 'react';
import Image from 'next/image';

function HackerRivals() {
  return (
    <div className="w-full mx-auto py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col md:hidden">
          {/* Banner Image */}
          <div className="relative w-full aspect-[16/5] mb-6">
            <Image
              src="/activities/banner-hacker-rivals.png"
              alt="Hacker Rivals E-Sport Event"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Hacker Rivals E-Sport Event
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-6 px-4">
              Apply as a solo builder or a team and compete in the hackathon for a
              chance to win a cash prize.
            </p>

            {/* CTA Button */}
            <a
              href="https://hackerrivals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-bold py-3 px-8 rounded-lg text-base transition-colors duration-200"
            >
              Sign Up Today
            </a>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex md:flex-row md:items-center md:gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="relative w-[200px] h-[150px] lg:w-[250px] lg:h-[180px]">
              <Image
                src="/activities/banner-hacker-rivals.png"
                alt="Hacker Rivals Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-1">
            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 lg:mb-4">
              Hacker Rivals E-Sport Event
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
              Apply as a solo builder or a team and compete in the hackathon for a
              chance to win a cash prize.
            </p>

            {/* CTA Button */}
            <a
              href="https://hackerrivals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-bold py-3 px-8 rounded-lg text-base lg:text-lg transition-colors duration-200 inline-block w-fit"
            >
              Sign Up Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackerRivals;

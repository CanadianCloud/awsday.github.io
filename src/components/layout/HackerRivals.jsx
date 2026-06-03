import React from "react";
import Image from "next/image";
import { Trophy, Users, Clock, Zap } from "lucide-react";

const hackathonFeatures = [
  {
    Icon: Trophy,
    label: "Cash Prizes",
    value: "Win Big",
  },
  {
    Icon: Users,
    label: "Team Size",
    value: "Solo or Team",
  },
  {
    Icon: Clock,
    label: "Duration",
    value: "3 Hours",
  },
  {
    Icon: Zap,
    label: "Format",
    value: "Live Audience",
  },
];

function HackerRivals() {
  return (
    <div className="w-full mx-auto py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
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
            <h2 className="text-3xl font-extrabold text-[#333E48] mb-3">
              Hacker Rivals E-Sport Event
            </h2>

            {/* Tagline */}
            <p className="text-lg text-[#FF9900] font-bold mb-4">
              Compete. Build. Win.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-md">
              {hackathonFeatures.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <Icon
                    className="w-6 h-6 text-[#FF9900] mx-auto mb-2"
                    strokeWidth={2}
                  />
                  <p className="text-xs text-gray-500 mb-1">{label}</p>
                  <p className="text-sm font-bold text-[#333E48]">{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-6 px-4">
              Join the ultimate coding competition! Compete solo or with your
              team to build innovative solutions in real-time. Watch the action
              unfold on the big screen as developers race to create, deploy, and
              demonstrate their projects.
            </p>

            {/* CTA Button */}
            <a
              href="https://hackerrivals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF9900] hover:bg-[#E88800] text-white font-bold py-3 px-10 rounded-lg text-base transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Register for Hackathon
            </a>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex md:flex-row md:items-center md:gap-8 lg:gap-12 bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="relative w-[220px] h-[165px] lg:w-[280px] lg:h-[210px]">
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
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#333E48] mb-2">
              Hacker Rivals E-Sport Event
            </h2>

            {/* Tagline */}
            <p className="text-xl text-[#FF9900] font-bold mb-4">
              Compete. Build. Win.
            </p>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
              Join the ultimate coding competition! Compete solo or with your
              team to build innovative solutions in real-time. Watch the action
              unfold on the big screen as developers race to create, deploy, and
              demonstrate their projects.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-6">
              {hackathonFeatures.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg"
                >
                  <Icon className="w-5 h-5 text-[#FF9900]" strokeWidth={2} />
                  <div>
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="text-sm font-bold text-[#333E48]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://hackerrivals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF9900] hover:bg-[#E88800] text-white font-bold py-3 px-10 rounded-lg text-base lg:text-lg transition-colors duration-200 inline-block w-fit shadow-md hover:shadow-lg"
            >
              Register for Hackathon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackerRivals;

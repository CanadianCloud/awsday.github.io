import React from "react";
import { FileText, Mic, Users } from "lucide-react";

export default function ActionButtons() {
  return (
    <section className="w-full bg-white py-6 md:py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://tally.so/r/MeMBYX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-sm md:text-base font-heroDate font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-200 whitespace-nowrap border-2 border-[#FF9900] shadow-sm hover:shadow-md transform hover:scale-105"
          >
            <FileText className="w-4 h-4" />
            Sponsor the Event
          </a>
          <a
            href="https://tally.so/r/ODkv7g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-sm md:text-base font-heroDate font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-200 whitespace-nowrap border-2 border-[#8C4FFF] shadow-sm hover:shadow-md transform hover:scale-105"
          >
            <Mic className="w-4 h-4" />
            Call for Speakers
          </a>
          <a
            href="https://tally.so/r/eqv4A0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-sm md:text-base font-heroDate font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-200 whitespace-nowrap border-2 border-[#01A88D] shadow-sm hover:shadow-md transform hover:scale-105"
          >
            <Users className="w-4 h-4" />
            Call for Volunteers
          </a>
        </div>
      </div>
    </section>
  );
}

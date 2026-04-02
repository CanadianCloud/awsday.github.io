"use client";
import HeroClouds from "./HeroClouds";
import React, { useEffect } from "react";
import { getBannerDateForCity, getTicketsUrlForCity } from "@/lib/eventConstants";

export default function Hero({ city }) {
  const ticketsUrl = getTicketsUrlForCity(city);
  const bannerDate = getBannerDateForCity(city);
  useEffect(() => {
    // Load Tally script once
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative md:min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Content */}
      <div
        className="h-[70vh] md:h-[80vh] lg:min-h-[900px] w-[95%] rounded-3xl pt-0 md:pt-[5vh] lg:pt-[10vh] relative overflow-hidden"
        style={{ backgroundColor: "#BCDAFE" }}
      >
        <HeroClouds city={city} />

        <div className="relative z-10 pt-10 sm:pt-12 md:pt-0">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-heroDate font-extrabold mb-3 leading-tight text-text-primary">
            <span className="block">Join the Community</span>
            <span className="block">for a Packed Event</span>
          </h2>
        </div>
        <div className="relative z-20 px-1 max-w-8xl mx-auto pt-4 md:pt-8 pb-6">
          {/* Save The Date */}
          <p className="text-lg md:text-2xl lg:text-[32px] font-heroDate font-extrabold mb-2 tracking-normal text-text-primary leading-tight">
            In Collaboration with Cloud Summit
          </p>

          {/* Main Date */}
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-heroDate font-extrabold mb-3 leading-none text-text-primary">
            {bannerDate}
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <a
              href={ticketsUrl}
              target="_blank"
              className="bg-[#FF9900] hover:bg-[#E88800] text-white text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] font-heroDate font-extrabold p px-3 py-2 md:p-4 rounded-lg transition-colors whitespace-nowrap"
            >
              Get Tickets
            </a>
          </div>
        </div>

        {/* More Details */}
        <div className="absolute bottom-1 md:bottom-2 lg:bottom-3 left-1/2 -translate-x-1/2 z-30">
          <p className="text-text-primary text-base md:text-xl lg:text-[24px] font-heroRegular font-normal leading-tight tracking-normal">
            MORE DETAILS BELOW{" "}
            <span className="inline-block animate-bounce-arrow -translate-y-0.5">
              ↓
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

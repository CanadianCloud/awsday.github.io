"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const sponsorTiers = [
  {
    tier: "Diamond",
    badgeColor: "bg-cyan-400/20 text-cyan-300 border-cyan-400/40",
    cardBorder: "border-cyan-400/30 hover:border-cyan-400/60",
    cardBg: "bg-white hover:bg-white",
    nameColor: "text-black",
    sponsors: [
      { name: "BDO", url: "https://www.bdo.ca/services/bdo-digital", logo: "/sponsors/bdo.svg" },
      { name: "5000 Days", url: "http://www.5000days.net", logo: "/sponsors/5000days.png" },
    ],
    logoSize: "h-48",
    cols: "grid-cols-2",
  },
  {
    tier: "Platinum",
    badgeColor: "bg-slate-300/20 text-slate-200 border-slate-300/40",
    cardBorder: "border-slate-300/30 hover:border-slate-300/60",
    cardBg: "bg-white hover:bg-white",
    nameColor: "text-black",
    sponsors: [
      { name: "AWS", url: "https://aws.amazon.com", logo: "/sponsors/aws.png" },
      { name: "Sumo Logic", url: "https://www.sumologic.com", logo: "/sponsors/sumologic.png" },
    ],
    logoSize: "h-40",
    cols: "grid-cols-2",
  },
  {
    tier: "Gold",
    badgeColor: "bg-[#FF9900]/20 text-[#FF9900] border-[#FF9900]/40",
    cardBorder: "border-[#FF9900]/30 hover:border-[#FF9900]/60",
    cardBg: "bg-white hover:bg-white",
    nameColor: "text-black",
    sponsors: [
      { name: "Spacelift", url: "https://spacelift.io", logo: "/sponsors/spacelift.png" },
      {
        name: "PulsaOps AI",
        url: "https://www.mirdigitalsolutions.com/business-solutions/pulsar-ops",
        logo: "/sponsors/pulsarops.png",
      },
    ],
    logoSize: "h-40",
    cols: "grid-cols-2",
  },
  {
    tier: "Community Partners",
    badgeColor: "bg-white/10 text-white/80 border-white/20",
    cardBorder: "border-white/10 hover:border-white/30",
    cardBg: "bg-black hover:bg-black",
    nameColor: "text-white",
    sponsors: [
      { name: "OpsFabric", url: "http://www.ops-fabric.com", logo: "/sponsors/opsfabric.png" },
      { name: "Orbitra", url: "https://getorbitra.com/", logo: "/sponsors/orbitra.png" },
    ],
    logoSize: "h-24",
    cols: "grid-cols-2 sm:grid-cols-2",
  },
];

export default function Sponsors() {
  return (
    <section className="w-full bg-[#232F3E] py-16 md:py-24" id="sponsors">
      <div className="container px-4 md:px-6 m-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[#FF9900]" strokeWidth={2} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Our Sponsors
            </h2>
            <Sparkles className="w-8 h-8 text-[#FF9900]" strokeWidth={2} />
          </div>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Thank you to the incredible organizations making AWS Day 2026 possible
          </p>
        </div>

        {/* Tier sections */}
        <div className="space-y-12">
          {sponsorTiers.map(({ tier, badgeColor, cardBorder, cardBg, nameColor, sponsors, logoSize, cols }) => (
            <div key={tier}>
              {/* Tier label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-white/10" />
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border ${badgeColor}`}
                >
                  {tier}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Sponsor cards */}
              <div className={`grid ${cols} gap-4 md:gap-6 justify-center`}>
                {sponsors.map(({ name, url, logo }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group ${cardBg} backdrop-blur-sm border ${cardBorder} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 transition-all`}
                  >
                    <img
                      src={logo}
                      alt={name}
                      className={`${logoSize} w-auto max-w-full object-contain transition-transform group-hover:scale-105`}
                    />
                    <p className={`${nameColor} font-bold text-base md:text-lg text-center leading-tight`}>
                      {name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Handshake, Users, TrendingUp, Award, Sparkles } from "lucide-react";

const sponsorBenefits = [
  {
    Icon: Users,
    stat: "780+",
    title: "Attendees",
    description: "Cloud professionals and decision-makers",
  },
  {
    Icon: Award,
    stat: "13",
    title: "Past Sponsors",
    description: "Leading companies in tech",
  },
  {
    Icon: TrendingUp,
    stat: "20+",
    title: "Community Partners",
    description: "Growing network of tech groups",
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
              Become a Sponsor
            </h2>
            <Sparkles className="w-8 h-8 text-[#FF9900]" strokeWidth={2} />
          </div>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Partner with Canada's largest AWS community event and connect with 780+ cloud professionals
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sponsorBenefits.map(({ Icon, stat, title, description }) => (
            <div
              key={title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all hover:border-[#FF9900]/50"
            >
              <div className="w-16 h-16 bg-[#FF9900]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-[#FF9900]" strokeWidth={2} />
              </div>
              <p className="text-4xl md:text-5xl font-extrabold text-[#FF9900] mb-2">
                {stat}
              </p>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why Sponsor?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF9900] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-semibold">Brand Visibility</p>
                <p className="text-white/70 text-sm">Showcase your company to the tech community</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF9900] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-semibold">Lead Generation</p>
                <p className="text-white/70 text-sm">Connect with potential customers and talent</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF9900] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-semibold">Thought Leadership</p>
                <p className="text-white/70 text-sm">Position your brand as an industry leader</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF9900] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-semibold">Community Impact</p>
                <p className="text-white/70 text-sm">Support education and local charity initiatives</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://tally.so/r/mR6zPQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#E88800] text-white font-bold py-4 px-10 md:py-5 md:px-12 rounded-xl text-base md:text-lg shadow-2xl hover:shadow-[#FF9900]/50 transition-all duration-200 transform hover:scale-105"
          >
            <Handshake className="w-6 h-6" strokeWidth={2} />
            View Sponsorship Packages
          </a>
          <p className="text-white/60 text-sm mt-4">
            Multiple tiers available • Limited spots remaining
          </p>
        </div>
      </div>
    </section>
  );
}

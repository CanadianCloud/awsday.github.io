"use client";

import React, { useEffect, useRef } from "react";
import { SPONSORS } from "@/lib/sponsorsConstants";
import { AWS_EVENT_CONFIG } from "@/lib/eventConstants";
import { Button } from "../ui/button";

export default function Sponsors() {
  const titleRef = useRef(null);
  const mainSponsorRef = useRef(null);
  const silverSponsorsRef = useRef(null);
  const bronzeSponsorsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = [titleRef, mainSponsorRef, silverSponsorsRef, bronzeSponsorsRef];
    elements.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);
  // Filter sponsors by type
  const goldSponsors = SPONSORS.filter((sponsor) => sponsor.type === "Gold");
  const silverSponsors = SPONSORS.filter((sponsor) => sponsor.type === "Silver");
  const bronzeSponsors = SPONSORS.filter(
    (sponsor) => sponsor.type === "Bronze"
  );

  return (
    <section className="w-full bg-white pt-12 md:pt-20 pb-12 relative" id="sponsors">
      <div className="container px-4 md:px-6 m-auto relative z-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative">
            <div className="relative space-y-2 z-10">
              <div className="flex flex-col gap-6 items-center">
                <h4 className="uppercase text-xl md:text-3xl text-[#333E48]">Interested in sponsoring this event<span className="block">& support our community?</span></h4>
                <a
                  href="https://tally.so/r/mR6zPQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 py-2 rounded text-primary-foreground text-white bg-[#333E48] hover:bg-[#FF9900] max-w-64"
                >
                  Learn About Sponsoring
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

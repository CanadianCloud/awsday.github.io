"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { InstagramCarousel } from '../ui/instagram-carousel'
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'
import { useTally } from '@/hooks/useTally'
import About from './About';

export default function Activities() {
    const activitiesRef = useRef([]);
    useTally();

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

        activitiesRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const activities = [
        {
            icon: "/activities/activity-icon-1.svg",
            title: "Main Stage Speaker",
            description: "Hear from top AWS experts and industry leaders",
            color: "#01A88D"
        },
        {
            icon: "/activities/activity-icon-2.svg",
            title: "Talks",
            description: "Explore real-world cloud stories and insights",
            color: "#C925D1"
        },
        {
            icon: "/activities/activity-icon-5.svg",
            title: "E-Sports Hackathon",
            description: "Witness high-energy coding competitions",
            color: "#ED7100"
        },
        {
            icon: "/activities/activity-icon-6.svg",
            title: "Chill & Connect Zone",
            description: "Unwind and network with fellow builders",
            color: "#8C4FFF"
        }
    ];

    return (
        <section
            className="w-full py-16 md:py-24 relative overflow-hidden bg-white"
            id="activities"
        >
            <div className='container px-4 md:px-6 m-auto max-w-6xl flex flex-col items-center'>
                <div className='mb-10 '>
                    <h2 className="text-center text-7xl sm:text-3xl md:text-4xl lg:text-[81px] font-extrabold leading-none text-[#333E48] mb-4">Our Event Activities</h2>
                    <p className='text-[#666E76] text-center'>There's a bit of something for everyone!</p>
                </div>

            </div>

            <About />

            <div className="container px-4 md:px-6 m-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-heroDate font-extrabold leading-none text-text-primary mb-4">
                        2026 ACTIVITIES
                    </h2>
                </div>

                <div className="relative">
                    {/* Desktop Grid Layout */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-1">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
                                ref={(el) => activitiesRef.current[index] = el}
                            >
                                {/* Left column: text-left, icon-right */}
                                {index % 2 === 0 ? (
                                    <div className="flex items-center gap-4 p-4 mb-1">
                                        {/* Text Content */}
                                        <div className="flex-1 text-right">
                                            <h3 className="text-xl lg:text-3xl xl:text-4xl font-heading font-extrabold mb-1" style={{ color: activity.color }}>
                                                {activity.title}
                                            </h3>
                                            <p className="text-gray-600 text-xl ">
                                                {activity.description}
                                            </p>
                                        </div>
                                        {/* Icon on right */}
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={activity.icon}
                                                alt={activity.title}
                                                width={200}
                                                height={200}
                                                className="w-40 h-40 "
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    /* Right column: icon-left, text-right */
                                    <div className="flex items-center gap-4 p-4 mb-1">
                                        {/* Icon on left */}
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={activity.icon}
                                                alt={activity.title}
                                                width={200}
                                                height={200}
                                                className="w-40 h-40"
                                            />
                                        </div>
                                        {/* Text Content */}
                                        <div className="flex-1 text-left">
                                            <h3 className="text-xl lg:text-3xl xl:text-4xl font-heading font-extrabold mb-1" style={{ color: activity.color }}>
                                                {activity.title}
                                            </h3>
                                            <p className="text-gray-600 text-xl ">
                                                {activity.description}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-8">
                        {activities.map((activity, index) => (
                            <div
                                key={`mobile-${index}`}
                                className="flex gap-4 opacity-0 translate-y-8 transition-all duration-700 ease-out"
                                ref={(el) => activitiesRef.current[index + activities.length] = el}
                            >
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <Image
                                            src={activity.icon}
                                            alt={activity.title}
                                            width={100}
                                            height={100}
                                            className="w-20 h-20"
                                        />
                                        {/* Dotted line for mobile */}
                                        {index < activities.length - 1 && (
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 border-l-2 border-dotted border-gray-400"></div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-extrabold mb-1" style={{ color: activity.color }}>
                                        {activity.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <InstagramCarousel />
            <div className='flex flex-col items-center'>
                <h4 className='font-bold uppercase text-xl px-2 text-center md:text-5xl'>{AWS_EVENT_CONFIG.sections.about.motto}</h4>
                <p className='mb-4'>{AWS_EVENT_CONFIG.sections.about.cta.descrp}</p>
                <div className="flex gap-4 flex-wrap justify-center">

                    <button
                        data-tally-open={AWS_EVENT_CONFIG.sections.about.cta.link.split('/').pop()}
                        data-tally-width="800"
                        data-tally-layout="modal"
                        className="md:h-10 px-4 py-1 md:py-2 rounded text-white bg-[#333E48] hover:bg-[#E88800] transition-colors"
                    >
                        Learn More About Committee and Volunteer Opportunities
                    </button>
                </div>
            </div>
        </section>
    )
}

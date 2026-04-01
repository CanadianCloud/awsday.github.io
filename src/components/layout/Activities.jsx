'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { InstagramCarousel } from '../ui/instagram-carousel';
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants';
import { useTally } from '@/hooks/useTally';
import About from './About';
import { Computer, Gamepad2, Handshake, Mic2Icon, Sofa, UsersRound } from 'lucide-react'

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
      { threshold: 0.1, rootMargin: '50px' },
    );

    activitiesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const activities = [
        {
            // icon: "/activities/activity-icon-1.svg",
            icon: <Mic2Icon className='size-12'></Mic2Icon>, 
            title: "Main Stage Speaker",
            description: "Hear from top AWS experts and industry leaders",
            color: "#01A88D"
        },
        {
            // icon: "/activities/activity-icon-2.svg",
            icon: <Sofa className='size-12'></Sofa>,
            title: "Talks",
            description: "Explore real-world cloud stories and insights",
            color: "#C925D1"
        },
        {
            // icon: "/activities/activity-icon-5.svg",
            icon: <Gamepad2 className='size-12'></Gamepad2>,
            title: "E-Sports Hackathon",
            description: "Witness high-energy coding competitions",
            color: "#ED7100"
        },
        {
            // icon: "/activities/activity-icon-6.svg",
            icon: <UsersRound className='size-12'></UsersRound>,
            title: "Chill & Connect Zone",
            description: "Unwind and network with fellow builders",
            color: "#8C4FFF"
        },
        {
            icon: <Handshake className='size-12'></Handshake>,
            title: "Meet Tech Companies",
            description: "Find out cutting-edge solutions and services in cloud technology",
            color: "#d19d1d"
        },
        {
            icon: <Computer className='size-12'></Computer>,
            title: "Intense Competition",
            description: "Watch in real-time as teams of developers build and ship rapidly",
            color: "#2042e5"
        }
    ];

  const activities = [
    {
      icon: '/activities/activity-icon-1.svg',
      title: 'Main Stage Speaker',
      description: 'Hear from top AWS experts and industry leaders',
      color: '#01A88D',
    },
    {
      icon: '/activities/activity-icon-2.svg',
      title: 'Talks',
      description: 'Explore real-world cloud stories and insights',
      color: '#C925D1',
    },
    {
      icon: '/activities/activity-icon-5.svg',
      title: 'E-Sports Hackathon',
      description: 'Witness high-energy coding competitions',
      color: '#ED7100',
    },
    {
      icon: '/activities/activity-icon-6.svg',
      title: 'Chill & Connect Zone',
      description: 'Unwind and network with fellow builders',
      color: '#8C4FFF',
    },
  ];

  return (
    <section
      className='w-full py-16 md:py-24 relative overflow-hidden bg-white'
      id='activities'>
      <div className='container px-4 md:px-6 m-auto max-w-6xl flex flex-col items-center'>
        <div className='mb-10 '>
          <h2 className='text-center text-7xl sm:text-3xl md:text-4xl lg:text-[81px] font-extrabold leading-none text-[#333E48] mb-4'>
            Our Event Activities
          </h2>
          <p className='text-[#666E76] text-center'>
            There's a bit of something for everyone!
          </p>
        </div>
      </div>

      <About />

            <div className='text-center md:grid md:grid-cols-3 mt-8 mb-8'>
                {activities.map((activity) => {
                    return <div className='flex flex-col items-center m-2'>
                        {activity.icon}
                        <h3 className="text-xl lg:text-3xl xl:text-4xl font-heading font-extrabold mb-1" style={{ color: activity.color }}>{activity.title}</h3>
                        <p className="text-gray-600 text-xl ">{activity.description}</p>
                    </div>
                })}
            </div>
            
            <InstagramCarousel />
            <div className='flex flex-col items-center'>
                <h4 className='font-bold uppercase text-xl px-2 text-center md:text-5xl'>{AWS_EVENT_CONFIG.sections.about.motto}</h4>
                <p className='mb-4'>{AWS_EVENT_CONFIG.sections.about.cta.descrp}</p>
                <div className="flex gap-4 flex-wrap justify-center">

          {/* Mobile Layout */}
          <div className='md:hidden space-y-8'>
            {activities.map((activity, index) => (
              <div
                key={`mobile-${index}`}
                className='flex gap-4 opacity-0 translate-y-8 transition-all duration-700 ease-out'
                ref={(el) =>
                  (activitiesRef.current[index + activities.length] = el)
                }>
                <div className='flex-shrink-0'>
                  <div className='relative'>
                    <Image
                      src={activity.icon}
                      alt={activity.title}
                      width={100}
                      height={100}
                      className='w-20 h-20'
                    />
                    {/* Dotted line for mobile */}
                    {index < activities.length - 1 && (
                      <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 border-l-2 border-dotted border-gray-400'></div>
                    )}
                  </div>
                </div>
                <div className='flex-1'>
                  <h3
                    className='text-lg sm:text-xl md:text-2xl font-heading font-extrabold mb-1'
                    style={{ color: activity.color }}>
                    {activity.title}
                  </h3>
                  <p className='text-gray-600 text-sm'>
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
        <h4 className='font-bold uppercase text-xl px-2 text-center md:text-5xl'>
          {AWS_EVENT_CONFIG.sections.about.motto}
        </h4>
        <p className='mb-4'>{AWS_EVENT_CONFIG.sections.about.cta.descrp}</p>
        <div className='flex gap-4 flex-wrap justify-center'>
          <button
            data-tally-open={AWS_EVENT_CONFIG.sections.about.cta.link
              .split('/')
              .pop()}
            data-tally-width='800'
            data-tally-layout='modal'
            className='md:h-10 px-4 py-1 md:py-2 rounded text-white bg-[#333E48] hover:bg-[#E88800] transition-colors'>
            Learn More About Volunteer Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}

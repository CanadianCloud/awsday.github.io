'use client';
import React from 'react';
import { InstagramCarousel } from '../ui/instagram-carousel';
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants';
import { useTally } from '@/hooks/useTally';
import About from './About';
import {
  Computer,
  Gamepad2,
  Handshake,
  Mic2Icon,
  Sofa,
  UsersRound,
} from 'lucide-react';

const activities = [
  {
    Icon: Mic2Icon,
    title: 'Main Stage Speaker',
    description: 'Hear from top AWS experts and industry leaders',
    color: '#01A88D',
  },
  {
    Icon: Sofa,
    title: 'Talks',
    description: 'Explore real-world cloud stories and insights',
    color: '#C925D1',
  },
  {
    Icon: Gamepad2,
    title: 'E-Sports Hackathon',
    description: 'Witness high-energy coding competitions',
    color: '#ED7100',
  },
  {
    Icon: UsersRound,
    title: 'Chill & Connect Zone',
    description: 'Unwind and network with fellow builders',
    color: '#8C4FFF',
  },
  {
    Icon: Handshake,
    title: 'Meet Tech Companies',
    description:
      'Find out cutting-edge solutions and services in cloud technology',
    color: '#d19d1d',
  },
  {
    Icon: Computer,
    title: 'Intense Competition',
    description:
      'Watch in real-time as teams of developers build and ship rapidly',
    color: '#2042e5',
  },
];

export default function Activities() {
  useTally();

  return (
    <section
      className='w-full pt-16 md:pt-24 pb-24 md:pb-32 relative overflow-hidden bg-white'
      id='activities'>
      <div className='container px-4 md:px-6 m-auto max-w-6xl flex flex-col items-center'>
        <div className='mb-10 '>
          <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#333E48] mb-4'>
            Our Event Activities
          </h2>
          <p className='text-[#666E76] text-center'>
            There&apos;s a bit of something for everyone!
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 md:gap-x-8 md:gap-y-12 text-center mt-2 mb-14 md:mb-20 lg:mb-24'>
          {activities.map(({ Icon, title, description, color }) => (
            <div
              key={title}
              className='flex flex-col items-center text-center px-0.5 sm:px-1 min-w-0'>
              <Icon
                className='size-10 sm:size-12 text-[#333E48] mb-2 sm:mb-3 shrink-0'
                strokeWidth={1.75}
                aria-hidden='true'
              />
              <h3
                className='text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-heading font-extrabold mb-1 break-words'
                style={{ color }}>
                {title}
              </h3>
              <p className='text-gray-600 text-xs sm:text-sm md:text-base lg:text-xl leading-snug break-words'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <About />

      <div className='container px-4 md:px-6 m-auto max-w-6xl'>
        <div className='mt-4 md:mt-6'>
          <InstagramCarousel />
        </div>
        <div className='flex flex-col items-center pb-8'>
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
      </div>
    </section>
  );
}

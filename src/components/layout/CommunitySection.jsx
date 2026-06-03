'use client';
import React from 'react';
import { Heart, Users, Target, Sparkles } from 'lucide-react';
import { useTally } from '@/hooks/useTally';

const communityValues = [
  {
    Icon: Users,
    title: 'Community-Led',
    description: 'Organized by volunteers passionate about cloud technology',
  },
  {
    Icon: Heart,
    title: 'Non-Profit',
    description: 'All proceeds support local charities helping those in need',
  },
  {
    Icon: Target,
    title: 'Knowledge Sharing',
    description: 'Learn from industry experts and fellow cloud practitioners',
  },
  {
    Icon: Sparkles,
    title: 'Inclusive',
    description: 'Welcoming developers of all skill levels and backgrounds',
  },
];

export default function CommunitySection() {
  useTally();

  return (
    <section className='w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24'>
      <div className='container px-4 md:px-6 m-auto max-w-6xl'>
        {/* Main Heading */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#333E48] mb-4'>
            By the Community,
            <span className='block text-[#FF9900]'>For the Community</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
            AWS Community Day is a 100% community-driven event. No organizers are paid, and every dollar raised goes toward making a positive impact.
          </p>
        </div>

        {/* Community Values Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12'>
          {communityValues.map(({ Icon, title, description }) => (
            <div
              key={title}
              className='flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-16 h-16 bg-[#FF9900]/10 rounded-full flex items-center justify-center mb-4'>
                <Icon className='w-8 h-8 text-[#FF9900]' strokeWidth={1.75} />
              </div>
              <h3 className='text-xl font-bold text-[#333E48] mb-2'>{title}</h3>
              <p className='text-sm text-gray-600'>{description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='bg-[#333E48] rounded-2xl p-8 md:p-12 text-center text-white'>
          <h3 className='text-2xl md:text-3xl font-bold mb-4'>
            Want to Help Make This Event Amazing?
          </h3>
          <p className='text-lg mb-6 text-gray-200 max-w-2xl mx-auto'>
            Join our team of dedicated volunteers and play a crucial role in creating an unforgettable experience for hundreds of attendees.
          </p>
          <button
            data-tally-open='waPdMy'
            data-tally-width='800'
            data-tally-layout='modal'
            className='bg-[#FF9900] hover:bg-[#E88800] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-lg text-base md:text-lg transition-colors duration-200 inline-block'>
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}

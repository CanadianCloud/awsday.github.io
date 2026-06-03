import React from 'react'
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'
import { Users, Award, Lightbulb, Network } from 'lucide-react'

const highlights = [
  {
    Icon: Users,
    stat: '780+',
    label: 'Attendees',
    color: '#FF9900',
  },
  {
    Icon: Award,
    stat: '13',
    label: 'Sponsors',
    color: '#01A88D',
  },
  {
    Icon: Lightbulb,
    stat: '7',
    label: 'Inspiring Talks',
    color: '#C925D1',
  },
  {
    Icon: Network,
    stat: '20+',
    label: 'Community Partners',
    color: '#8C4FFF',
  },
]

export default function About() {
  return (
    <section
      className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-12 md:py-20"
      id="about"
    >
      <div className="container m-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-12">
          <h2 className="text-[#333E48] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            What is AWS Community Day?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed px-4">
            {AWS_EVENT_CONFIG.sections.about.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-14">
          {highlights.map(({ Icon, stat, label, color }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon
                  className="w-7 h-7 md:w-8 md:h-8"
                  style={{ color }}
                  strokeWidth={2}
                />
              </div>
              <p
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                style={{ color }}
              >
                {stat}
              </p>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-2 md:p-3">
            <video
              src="/videos/highlight-video.mp4"
              controls
              muted
              autoPlay
              loop
              className="w-full h-auto rounded-xl"
              style={{ maxHeight: '600px', objectFit: 'contain' }}
            />
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center italic">
            Highlights from previous AWS Community Day events
          </p>
        </div>
      </div>
    </section>
  )
}

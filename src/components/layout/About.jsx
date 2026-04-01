import React from 'react'

import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'
import { Button } from '../ui/button'

export default function About() {
  return (
    <section
      className="w-full bg-muted bg-white py-8 px-3 sm:px-6 md:px-8 md:py-20"
      id="about"
    >
      <div className="container m-auto max-w-6xl px-0 sm:px-2 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center ">
          <div className="space-y-2 w-full">
            <div>
              <h2 className="text-gray-700 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-2 uppercase">
                {AWS_EVENT_CONFIG.sections.about.title}
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-700 text-center text-lg mb-4 md:mb-12 px-0">
                {AWS_EVENT_CONFIG.sections.about.description}
              </p>

            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-0">
          <video
            src="/videos/highlight-video.mp4"
            controls
            muted
            autoPlay
            className="w-full max-w-[900px] mb-6"
          />

        </div>
      </div>
    </section >
  )
}

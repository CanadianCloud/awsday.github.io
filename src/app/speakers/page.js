"use client"
import { Suspense, useState } from 'react'
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'
import { SPEAKERS } from '@/lib/speakersConstants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react'

export default function SpeakersPage() {
  const keynoteSpeaker = SPEAKERS.find(s => s.tag === 'keynote')
  const featuredSpeakers = SPEAKERS.filter(s => s.tag === 'featured')

  // Track expanded state for keynote speaker
  const [keynoteTalkExpanded, setKeynoteTalkExpanded] = useState(true)

  // Track expanded state for featured speakers - talk summaries expanded by default
  const [expandedBios, setExpandedBios] = useState({})
  const [expandedTalks, setExpandedTalks] = useState(
    featuredSpeakers.reduce((acc, speaker) => ({ ...acc, [speaker.id]: true }), {})
  )

  const toggleBio = (speakerId) => {
    setExpandedBios(prev => ({ ...prev, [speakerId]: !prev[speakerId] }))
  }

  const toggleTalk = (speakerId) => {
    setExpandedTalks(prev => ({ ...prev, [speakerId]: !prev[speakerId] }))
  }

  return (
    <div className="min-h-screen">
      <Suspense fallback={<div />}>
        <Header />
      </Suspense>
      <main className="flex-1 bg-white">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heroDate font-extrabold leading-none text-text-primary text-center mb-8">
              {AWS_EVENT_CONFIG.sections.speakers.title}
            </h1>
            <div className="prose prose-lg mx-auto text-center mb-16">
              <p className="text-xl text-gray-600 leading-relaxed">
                {AWS_EVENT_CONFIG.sections.speakers.content}
              </p>
            </div>

            {/* Keynote Speaker */}
            {keynoteSpeaker && (
              <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#01A88D] mb-12">
                  Keynote Speaker
                </h2>
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#FF9900] relative">
                  {/* LinkedIn Button - Top Right */}
                  {keynoteSpeaker.link && (
                    <a
                      href={keynoteSpeaker.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2 bg-transparent border border-[#333E48] text-[#333E48] rounded-full hover:bg-[#333E48] hover:text-white transition-colors shadow-lg z-10"
                      aria-label={`Visit ${keynoteSpeaker.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  <div className="md:flex">
                    <div className="md:w-1/3 p-8 flex items-center justify-center bg-gray-50">
                      <img
                        src={keynoteSpeaker.image}
                        alt={keynoteSpeaker.name}
                        className="w-full max-w-xs rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-3xl font-bold text-[#333E48] mb-2">
                        {keynoteSpeaker.name}
                      </h3>
                      <p className="text-xl text-[#FF9900] font-semibold mb-4">
                        {keynoteSpeaker.title} at {keynoteSpeaker.company}
                      </p>
                      {keynoteSpeaker.bio && (
                        <p className="text-gray-600 mb-4">{keynoteSpeaker.bio}</p>
                      )}
                      {keynoteSpeaker.talk_title && (
                        <div className="mt-6">
                          <h4 className="text-lg font-bold text-[#333E48] mb-2">
                            Session: {keynoteSpeaker.talk_title}
                          </h4>
                          {keynoteSpeaker.talk_summary && (
                            <div>
                              <button
                                onClick={() => setKeynoteTalkExpanded(!keynoteTalkExpanded)}
                                className="flex items-center gap-2 text-[#333E48] font-semibold mb-2 hover:text-[#FF9900] transition-colors"
                              >
                                Talk Summary
                                {keynoteTalkExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                              </button>
                              {keynoteTalkExpanded && (
                                <p className="text-gray-600">{keynoteSpeaker.talk_summary}</p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Featured Speakers */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#01A88D] mb-12">
                Featured Speakers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredSpeakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 relative"
                  >
                    {/* LinkedIn Button - Top Right */}
                    {speaker.link && (
                      <a
                        href={speaker.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 p-2 bg-transparent border border-[#333E48] text-[#333E48] rounded-full hover:bg-[#333E48] hover:text-white transition-colors shadow-lg z-10"
                        aria-label={`Visit ${speaker.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    <div className="p-6 flex flex-col h-full">
                      {/* Top section - Image and basic info */}
                      <div className="flex items-start gap-6 mb-4">
                        <div className="w-32 h-32 flex-shrink-0">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#333E48] mb-1">
                            {speaker.name}
                          </h3>
                          <p className="text-lg text-[#FF9900] font-semibold mb-3">
                            {speaker.title}
                          </p>
                          <p className="text-md text-gray-500 mb-3">
                            {speaker.company}
                          </p>
                        </div>
                      </div>

                      {/* Talk section - grows to push bio down */}
                      {speaker.talk_title && (
                        <div className="flex-grow pt-4 border-t border-gray-100">
                          <h4 className="text-md font-bold text-[#01A88D] mb-2 min-h-[3rem] line-clamp-2">
                            Session: {speaker.talk_title}
                          </h4>
                          {speaker.talk_summary && (
                            <div className="mb-3">
                              <button
                                onClick={() => toggleTalk(speaker.id)}
                                className="flex items-center gap-2 text-[#333E48] font-semibold text-sm mb-2 hover:text-[#FF9900] transition-colors"
                              >
                                Talk Summary
                                {expandedTalks[speaker.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                              </button>
                              {expandedTalks[speaker.id] && (
                                <p className="text-gray-600 text-sm">{speaker.talk_summary}</p>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Bio section - always at bottom */}
                      {speaker.bio && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => toggleBio(speaker.id)}
                            className="flex items-center gap-2 text-[#333E48] font-semibold text-sm mb-2 hover:text-[#FF9900] transition-colors"
                          >
                            Bio
                            {expandedBios[speaker.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>
                          {expandedBios[speaker.id] && (
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {speaker.bio}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

"use client";
import { Suspense } from "react";
import { Linkedin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const emcees = [
  {
    name: "Matt Carolan",
    role: "Event Director",
    image: "/speakers/Matt.png",
    linkedIn: "https://www.linkedin.com/in/matthewcarolan/",
  },
  {
    name: "Bibi Souza",
    role: "MC · HackerRivals",
    image: "/speakers/Bibi.png",
    linkedIn: "https://www.linkedin.com/in/bibschan/",
  },
  {
    name: "Victor",
    role: "MC · Main Stage",
    image: "/speakers/Victor.png",
    linkedIn: "https://www.linkedin.com/in/victorszoltysek/",
  },
  {
    name: "Bansi",
    role: "MC · AWS Stage",
    image: "/speakers/Bansi.png",
    linkedIn: "https://www.linkedin.com/in/bansidelwadia/",
  },
];

const speakers = [
  {
    name: "Milad Kayali",
    role: "Head of Canada Enterprise Industry Solutions Architecture",
    company: "AWS",
    talk: "AWS Keynote",
    image: "/speakers/Milad.png",
    linkedIn: "https://www.linkedin.com/in/miladkayali/",
  },
  {
    name: "Kriti Bhandari",
    role: null,
    company: null,
    talk: "Your Pods Can Think Now: AI-Augmented Workloads on EKS with Amazon Bedrock",
    image: "/speakers/Kriti.png",
    linkedIn: "https://www.linkedin.com/in/kritibhandari/",
  },
  {
    name: "Rohini Gaonkar",
    role: null,
    company: null,
    talk: "Agents Are the New Microservices Problem",
    image: "/speakers/Rohini.png",
    linkedIn: "https://www.linkedin.com/in/rohinigaonkar/",
  },
  {
    name: "Hetvi Parsana",
    role: null,
    company: null,
    talk: "Building a Personal Knowledge Graph: How Amazon Quick Remembers Everything",
    image: "/speakers/Hetvi.png",
    linkedIn: "https://www.linkedin.com/in/hetvi-parsana",
  },
  {
    name: "Brett Gillett",
    role: null,
    company: null,
    talk: "A Company AI Brain That Curates Itself",
    image: "/speakers/Brett.png",
    linkedIn: "https://www.linkedin.com/in/brettgillett/",
  },
  {
    name: "Ashwin Bhargava",
    role: null,
    company: null,
    talk: "Security at Machine Speed: Introducing AWS Continuum",
    image: "/speakers/Ashwin.png",
    linkedIn: "https://www.linkedin.com/in/ashwinbh/",
  },
];

function SpeakersContent() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div />}>
        <Header />
      </Suspense>

      <main className="bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            {/* Page heading */}
            <div className="text-center mb-14">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#333E48] leading-tight mb-4">
                AWS Day <span className="text-[#FF9900]">2026 Speakers</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the speakers joining us at AWS Day in Toronto on August 29,
                2026.
              </p>
            </div>

            {/* Speakers grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <div
                  key={speaker.name}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                >
                  {/* Photo */}
                  <div className="w-full aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    <div>
                      <h2 className="text-xl font-extrabold text-[#333E48] leading-tight">
                        {speaker.name}
                      </h2>
                      {speaker.role && (
                        <p className="text-sm text-[#FF9900] font-semibold mt-0.5">
                          {speaker.role}
                          {speaker.company && ` · ${speaker.company}`}
                        </p>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 leading-snug flex-1">
                      {speaker.talk}
                    </p>

                    {speaker.linkedIn && (
                      <a
                        href={speaker.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#333E48] hover:text-[#FF9900] transition-colors self-start mt-auto"
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emcees section */}
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#333E48] text-center mb-10">
                Emcees &amp; Event Team
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {emcees.map((person) => (
                  <div
                    key={person.name}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                  >
                    {/* Photo or initials avatar */}
                    <div className="w-full aspect-square bg-gray-50 overflow-hidden">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col flex-1 p-5 gap-2">
                      <h3 className="text-base font-extrabold text-[#333E48] leading-tight">
                        {person.name}
                      </h3>
                      <p className="text-sm text-[#FF9900] font-semibold">
                        {person.role}
                      </p>
                      {person.linkedIn && (
                        <a
                          href={person.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#333E48] hover:text-[#FF9900] transition-colors mt-auto self-start"
                        >
                          <Linkedin size={15} />
                          LinkedIn
                        </a>
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
  );
}

export default function Speakers2026Page() {
  return (
    <Suspense fallback={<div />}>
      <SpeakersContent />
    </Suspense>
  );
}

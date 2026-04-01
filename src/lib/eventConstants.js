export const AWS_EVENT_CONFIG = {
  title: 'AWS Community Day',
  date: 'October 25, 2025',
  time: 'TBD',
  venue: 'BCIT Downtown Campus Tech Collider',
  location: {
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    address: '555 Seymour St, Vancouver, BC V6B 3H6',
    mapEmbedUrl: '',
  },
  description:
    'AWS Community Day events are community-led conferences where event logistics and content is planned, sourced, and delivered by community leaders.',
  about:
    'AWS Community Day is a community-led event organized by the Canadian Public Cloud Association.',
  slogan: 'By the community, for the community',
  links: {
    tickets: 'https://luma.com/cloudsummit26',
    /** Luma event when ?city=toronto (Vancouver uses `tickets`). */
    ticketsToronto: 'https://luma.com/0xpa2rxj',
    ticketsCode: 'cloudsummit26',
    speakersApplication: 'https://tally.so/r/mVBZYy',
    speakersApplicationCode: 'mVBZYy',
    volunteerApplication: 'https://tally.so/r/waPdMy',
    sponsors: 'https://tally.so/r/mR6zPQ',
    awsUserGroup: 'https://www.awsusergroups.com/',
    social: {
      instagram: 'https://www.instagram.com/canadiancloudninja/',
      youtube: 'https://www.youtube.com/@PublicCloudNinja/about',
      linkedin: 'https://www.linkedin.com/company/canadiancloud/',
      discord: 'https://discord.gg/wg372JtEK8',
    },
  },
  sections: {
    about: {
      title: 'What is AWS Community Day?',
      description:
        'AWS Community Day events are community-led conferences where event logistics and content is planned, sourced, and delivered by community leaders.',
      facts: [
        {
          stat: '780+',
          feature: 'Attendees',
        },
        {
          stat: '13',
          feature: 'Sponsors',
        },
        {
          stat: '7',
          feature: 'Inspiring Talks',
        },
        {
          stat: '20+',
          feature: 'Community Partners',
        },
      ],
      motto: 'By the community, for the community',
      cta: {
        type: 'phase1',
        descrp: 'Interested in volunteering for AWS Community Day',
        button: 'Learn More about Volunteer Opportunities',
        link: 'https://tally.so/r/waPdMy',
      },
    },
    sponsors: {
      title: 'Thank you to our sponsors',
    },
    highlights: {
      title: 'Highlights',
    },
    eventFeatures: {
      activities: [
        {
          icon: '/activities/', // You can replace this with an actual icon component or path
          title: '19 Speakers',
          details: '',
          link: '',
        },
        {
          icon: '/activities/',
          title: '2 Stages',
          details: '',
          link: '',
        },
        {
          icon: '/activities/',
          title: '1 All Day Workshop',
          details: '',
          link: '',
        },
        {
          icon: '/activities/',
          title: 'Included After Party',
          details: '',
          link: '',
        },
      ],
    },
    community: {
      title: 'Join Our Community',
    },
    speakers: {
      title: 'Our Event Speakers',
      description: 'Share your expertise with our community',
      content: 'Hear from top AWS experts and industry leaders',
      cta: {
        type: 'phase2',
        button: 'See All Speakers',
      },
    },
    volunteers: {
      title: 'Volunteer Opportunities',
      description: 'Help make Cloud Summit a success',
      content:
        'Join our team of dedicated volunteers and play a crucial role in creating an unforgettable experience for all attendees.',
    },
    venue: {
      title: 'Venue',
      description: '',
    },
    charity: {
      title: 'Make a Difference Together',
      description:
        "We're proud to announce that all proceeds from our conference will be donated to Union Gospel Mission!",
      content:
        'Union Gospel Mission has been feeding hope and changing the lives of men, women, youth, and children for 80 years. Through its seven locations in Metro Vancouver, the Fraser Valley and the Greater Victoria Region, UGM extends a wrap-around continuum of care to people who are struggling with poverty, homelessness, and addiction. Our comprehensive range of life-changing programs and services include: outreach, meals, chaplaincy, drop-ins, emergency shelter, family services, alcohol and drug recovery, second-stage recovery, employment services, and housing.',
      charities: [
        {
          id: 'ugm',
          name: 'Union Gospel Mission',
          description:
            'Union Gospel Mission has been feeding hope and changing the lives of men, women, youth, and children for 80 years. Through its seven locations in Metro Vancouver, the Fraser Valley and the Greater Victoria Region, UGM extends a wrap-around continuum of care to people who are struggling with poverty, homelessness, and addiction. Our comprehensive range of life-changing programs and services include: outreach, meals, chaplaincy, drop-ins, emergency shelter, family services, alcohol and drug recovery, second-stage recovery, employment services, and housing.',
          link: 'https://ugm.ca/',
          logo: '/charity/ugm-logo.png',
          images: [
            {
              id: 1,
              path: '/charity/bbq.webp',
              caption: 'Union Gospel Mission',
            },
            {
              id: 2,
              path: '/charity/Easter_lunch.webp',
              caption: 'UGM volunteers serving meals',
            },
            {
              id: 2,
              path: '/charity/ugm-cold-weather.webp',
              caption: 'UGM volunteers warm drink in cold',
            },
          ],
        },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          question: 'Who is AWS Community Day for?',
          answer: '',
        },
        {
          question:
            'How is AWS Community Day different from other technology conferences?',
          answer: '',
        },
        {
          question: 'Is the event accessible?',
          answer:
            'Yes, there is both accessible ramps, elevators, and main stage seating. For more details check out the BCIT site for details https://vancouvercivictheatres.com/accessibility/.',
        },
        {
          question: 'Will I be able to watch the event online?',
          answer:
            "The event won't be live-streamed; however, we will have photos on Instagram and videos on YouTube.",
        },
      ],
    },
    footer: {
      title: 'About AWS Community Day',
      description:
        'Celebrating 12 years of Vancouver AWS User Group and the growing cloud community across Canada',
      quickLinks: [
        {
          name: 'AWS User Groups',
          href: 'https://awsusergroups.com',
          external: true,
        },
        {
          name: 'Become a Volunteer',
          href: 'https://tally.so/r/waPdMy',
          external: true,
        },
        {
          name: 'Become a Sponsor',
          href: 'https://tally.so/r/mR6zPQ',
          external: true,
        },
        {
          name: 'Call for Speakers',
          href: 'https://tally.so/r/rjBeN5',
          external: true,
        },
        {
          name: 'Enter Hackathon',
          href: 'https://hackerrivals.com/',
          external: true,
        },
        // { name: "FAQ", href: "#", external: false },
      ],
      policies: [
        {
          name: 'Code of Conduct',
          href: '#',
          external: false,
          modalContent: {
            title: 'Attendee Pledge – AWS Community Day Canada',
            body: [
              'By joining us on the day, I pledge to:',
              'Respect everyone — participants, speakers, sponsors, and volunteers.',
              'Engage positively — share knowledge, listen, and collaborate.',
              'Be professional — avoid disruptive, offensive, or harassing behavior.',
              'Support inclusivity — create a welcoming environment for all.',
            ],
          },
        },
        {
          name: 'Privacy Policy',
          href: '#',
          external: false,
          modalContent: {
            title: 'Privacy Policy',
            body: [
              'Photography and video will be taken at the event. By attending, you give us permission to use these photos and videos.',
              'Photos and video will not be edited to appear out of context or AI-modified. Edits will only be made to improve clarity and professionalism, such as adding logo watermarks and trimming videos to be shorter.',
              'Personal information collected will be used solely to benefit the event and to communicate with attendees about activities and groups related to the event.',
            ],
          },
        },
        {
          name: 'Committee',
          href: '#',
          external: false,
          modalContent: {
            title: 'AWS Community Day 2026',
            body: [],
            committee: [
              {
                name: 'Andrey Barkov',
                linkedin: 'https://www.linkedin.com/in/andreybarkov/',
              },
              {
                name: 'Bibi Souza',
                linkedin: 'https://www.linkedin.com/in/bibschan/',
              },
              {
                name: 'Fabio Simka Coutinho',
                linkedin: 'https://www.linkedin.com/in/fabio-simka/',
              },
              {
                name: 'Fernando Stoelting',
                linkedin: 'https://www.linkedin.com/in/fstoelting/',
              },
              {
                name: 'Jhan (Shanky) Silva',
                linkedin: 'https://www.linkedin.com/in/shankyjs/',
              },
              {
                name: 'Matt Carolan',
                linkedin: 'https://www.linkedin.com/in/matthewcarolan/',
              },
              {
                name: 'Michael Carlos',
                linkedin: 'https://www.linkedin.com/in/mcarlos/',
              },
              {
                name: 'Nichanun Pong (Luck)',
                linkedin: 'https://www.linkedin.com/in/nichanun-pong/',
              },
              {
                name: 'Philip Mak',
                linkedin:
                  'https://www.linkedin.com/in/philip-mak-b2b92823a/',
              },
              {
                name: 'Warren Lyne',
                linkedin: 'https://www.linkedin.com/in/warrenlyne/',
              },
            ],
            volunteers: [
              {
                name: 'Adélékunbo Ige',
                linkedin: 'https://www.linkedin.com/in/igeadetokunbo/',
              },
              {
                name: 'Aham Gupta',
                linkedin: 'https://www.linkedin.com/in/aham-gupta-18a02a202/',
              },
              {
                name: 'Ahmadreza (Miles) Mollapour',
                linkedin:
                  'https://www.credly.com/users/ahmadreza-mollapour/badges#credity/',
              },
              {
                name: 'Alex',
                linkedin: 'https://www.linkedin.com/in/alex-kneller-078a7ab1',
              },
              {
                name: 'Ali Abbas',
                linkedin: 'https://www.linkedin.com/in/aliabbas1/',
              },
              {
                name: 'Ali Ghareeb',
                linkedin: 'https://www.linkedin.com/in/gharaeeali/',
              },
              {
                name: 'Amin Pak',
                linkedin: 'https://www.linkedin.com/in/amin-pak',
              },
              {
                name: 'Amir Nagah',
                linkedin: 'https://www.linkedin.com/in/amirnegah/',
              },
              {
                name: 'Anoop',
                linkedin: 'https://www.linkedin.com/in/anoop-singh202/',
              },
              {
                name: 'Arisa Idewara',
                linkedin:
                  'https://www.linkedin.com/in/arisa-idewara-238555448/',
              },
              {
                name: 'Atakan',
                linkedin: 'https://www.linkedin.com/in/safakatakancelik',
              },
              {
                name: 'Bek Abebe',
                linkedin:
                  'https://www.linkedin.com/in/bereketeab-abebe-374a651b9/',
              },
              {
                name: 'Esteban Muñoz',
                linkedin: 'https://www.linkedin.com/in/esteban-munoz-/',
              },
              {
                name: 'Fatemeh',
                linkedin: 'https://www.linkedin.com/in/f-inanloo/',
              },
              {
                name: 'Ishan Karandikar',
                linkedin: 'https://www.linkedin.com/in/ishankarandikar/',
              },
              {
                name: 'Jacky',
                linkedin: 'https://www.linkedin.com/in/tech-jacky/',
              },
              {
                name: 'Lucy Nwuneli Chiamaka',
                linkedin: 'https://www.linkedin.com/in/lucy-nwuneli',
              },
              {
                name: 'Mehrdad Momein zadeh',
                linkedin:
                  'https://www.linkedin.com/in/mehrdad-momeni-zadeh-mma236',
              },
              {
                name: 'Murilo Farias',
                linkedin: 'https://www.linkedin.com/in/murilofarias10/',
              },
              {
                name: 'Noah',
                linkedin: 'https://ca.linkedin.com/in/kritsadamoungkhao',
              },
              {
                name: 'Oscar Castro',
                linkedin: 'https://linkedin.com/in/oscar-castro-cruz',
              },
              {
                name: 'Parsa Safavi',
                linkedin: 'https://linkedin.com/in/parsasi/',
              },
              {
                name: 'Shrishty Jain',
                linkedin: 'https://www.linkedin.com/in/shrishtyjain',
              },
            ],
          },
        },
      ],
    },
  },
  features: {
    title: {
      infrastructure: 'Infrastructure',
      security: 'Security',
      devops: 'DevOps',
    },
  },
  team: {
    image: '',
    description: '',
    committee: [
      {
        image: '/team/Bibi.png',
        title: 'Bibi Souza',
        href: 'https://www.linkedin.com/in/bibschan/',
      },
      {
        image: '/team/Fabio.png',
        title: 'Fabio Simka Coutinho',
        href: 'https://www.linkedin.com/in/fabio-simka/',
      },
      {
        image: '/team/Fernando.png',
        title: 'Fernando Stoelting',
        href: 'https://www.linkedin.com/in/fstoelting/',
      },
      {
        image: '/team/Matt.png',
        title: 'Matt Carolan',
        href: 'https://www.linkedin.com/in/matthewcarolan/',
      },
      {
        image: '/team/Shanky.png',
        title: 'Jhan (Shanky) Silva',
        href: 'https://www.linkedin.com/in/shankyjs/',
      },
      {
        image: '',
        title: 'Andrey Barkov',
        href: 'https://www.linkedin.com/in/andreybarkov/',
      },
      {
        image: '',
        title: 'Warren Lyne',
        href: 'https://www.linkedin.com/in/warrenlyne/',
      },
      {
        image: '',
        title: 'Michael Carlos',
        href: 'https://www.linkedin.com/in/mcarlos/',
      },
      {
        image: '',
        title: 'Nichanun Pong (Luck)',
        href: 'https://www.linkedin.com/in/nichanun-pong/',
      },
      {
        image: '',
        title: 'Philip Mak',
        href: 'https://www.linkedin.com/in/philip-mak-b2b92823a/',
      },
    ],
    volunteers: [
      {
        name: 'Catalina',
        link: 'https://www.linkedin.com/in/aydaesmradi/',
        team: 'webAndDesign',
      },
      {
        name: 'Luis Hernandez',
        link: 'https://github.com/luisher98',
        team: 'webAndDesign',
      },
    ],
    webMembers: [
      {
        name: 'Bibi',
        link: 'https://github.com/bibschan',
        type: 'software engineer',
      },
      { name: 'Jackie', link: 'https://jackieho.ca/', type: 'designer' },
      {
        name: 'Luis',
        link: 'https://github.com/luisher98',
        type: 'software engineer',
      },
      {
        name: 'Sophia',
        link: 'https://github.com/Sophia-G-Chan',
        type: 'software engineer',
      },
    ],
  },
  cpca: {
    title: 'Canadian Public Cloud Association',
    about:
      'As a non-profit organization, our purpose is to bring together & educate the local tech community about the cloud and support our local community through charity.',
  },
};

/** Luma ticket URL for the hero/header (?city=toronto | vancouver / default). */
export function getTicketsUrlForCity(city) {
  return city === 'toronto'
    ? AWS_EVENT_CONFIG.links.ticketsToronto
    : AWS_EVENT_CONFIG.links.tickets;
}

/** Hero banner date line (?city=toronto | vancouver / default). */
export function getBannerDateForCity(city) {
  return city === 'toronto' ? 'August 29th, 2026' : 'MAY 1, 2026';
}

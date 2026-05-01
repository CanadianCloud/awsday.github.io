/** Optional: `primaryLineIndices` — which activity lines use bold (overrides `primaryLineCount`). */
export const newSchedule = [
  {
    startTime: '2:15 PM',
    activities: [
      'Registration Opens',
      'Networking space available (full venue not yet open - food provided)',
    ],
  },
  {
    startTime: '2:50 PM',
    activities: [
      'Doors Open to Full Venue',
      'Experience areas open - sponsored by AWS',
    ],
  },
  {
    startTime: '3:00 PM',
    endTime: '3:20 PM',
    activities: [
      'Opening Welcome Remarks',
      'Live on the Main Stage: streamed to the Community Stage',
    ],
  },
  {
    startTime: '3:20 PM',
    endTime: '3:50 PM',
    activities: [
      'Main Stage: Gabriel Velazquez Lopez',
      'The One Certification That Works on Every Cloud',
      'Community Stage: Egina Malaj',
      'Simplifying the design and deployment of Agentic AI systems at scale',
    ],
    primaryLineIndices: [0, 2],
  },
  {
    startTime: '3:50 PM',
    endTime: '4:20 PM',
    activities: [
      'Main Stage: Panel, Sponsored by Fortinet',
      'Panel (AI Beyond the Buzz: Real Use Cases, Real Concerns, Real Conversations)',
      'Community Stage: HackerRivals Round 1',
      'Fast Paced Hackathon learn more at www.HackerRivals.com',
    ],
    primaryLineIndices: [0, 2],
  },
  {
    startTime: '3:50 PM',
    endTime: '6.30 PM',
    activities: [
      'AWS Workshop: Introduction to Claude Code on AWS',
      'Join waitlist here https://luma.com/awsworkshop',
    ],
    primaryLineCount: 1,
  },
  {
    startTime: '4:20 PM',
    endTime: '4:50 PM',
    activities: [
      'Main Stage: Jason Mayes',
      'Vibing with Antigravity for custom Web AI solutions',
      'Community Stage: Nitin Gandhi',
      'Maximizing Cloud Value: Cost Engineering Playbooks',
    ],
    primaryLineIndices: [0, 2],
  },
  {
    startTime: '4:50 PM',
    endTime: '5:30 PM',
    activities: [
      'Main Stage: Morgan Foster',
      'The Illustrated Primer to GenAI Networking',
      '10 min break after',
      'Community Stage: Panel',
      'Panel (Women Shaping the Future of Cloud & AI)',
    ],
    primaryLineIndices: [0, 3],
  },
  {
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    activities: [
      'Main Stage: Niko Smeds',
      'The Cloud Bill Nobody Could Explain',
      'Community Stage: HackerRivals Round 2 Elimination Round',
      'Fast Paced Hackathon learn more at www.HackerRivals.com',
    ],
    primaryLineIndices: [0, 2],
  },
  {
    startTime: '6:00 PM',
    endTime: '6:30 PM',
    activities: [
      'Main Stage: Adina Gray',
      'Who Adopts AI First and Who Struggles to Keep Up',
      'Community Stage: Lightning Talks',
      'HabileLabs',
      'Defang',
    ],
    primaryLineIndices: [0, 2],
  },
  {
    startTime: '6:30 PM',
    endTime: '7:00 PM',
    activities: [
      'HackerRivals Final',
      'Live on the Main Stage: streamed to the Community Stage',
    ],
  },
  {
    startTime: '7:00 PM',
    endTime: '7:30 PM',
    activities: [
      'HackerRivals Awards',
      'Live on the Main Stage: streamed to the Community Stage',
      'Closing Remarks',
    ],
    primaryLineIndices: [0, 2],
  },
  {
    startTime: '7:30 PM',
    endTime: '9:00 PM',
    activities: [
      'After Party (limited space)',
      'Join Waitlist Here https://luma.com/csparty',
    ],
    primaryLineCount: 1,
  },
];

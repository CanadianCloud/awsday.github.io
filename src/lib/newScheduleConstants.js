/** Optional: `primaryLineIndices` — which activity lines use bold (overrides `primaryLineCount`). */
export const newSchedule = [
  {
    startTime: '2:15 PM',
    activities: [
      'Registration Opens',
      'Networking space available (full venue not yet open)',
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
    activities: ['Main Stage: Gabriel Velazquez Lopez', 'Community Stage: Egina Malaj'],
    primaryLineCount: 2,
  },
  {
    startTime: '3:50 PM',
    endTime: '4:20 PM',
    activities: ['Main Stage: Panel, Sponsored by Fortinet', 'Community Stage: Niko Smeds'],
    primaryLineCount: 2,
  },
  {
    startTime: '4:20 PM',
    endTime: '4:50 PM',
    activities: [
      'Main Stage: Jason Mayes',
      'Community Stage: HackerRivals Round 1',
    ],
    primaryLineCount: 2,
  },
  {
    startTime: '4:50 PM',
    endTime: '5:30 PM',
    activities: [
      'Main Stage: Morgan Foster',
      '10 min break after',
      'Community Stage: Panel',
      'Panel (Women Shaping the Future of Cloud & AI)',
    ],
    primaryLineIndices: [0, 2],
  },
  {
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    activities: [
      'Main Stage: Session 5',
      'Community Stage: HackerRivals Round 2 Elimination Round',
    ],
    primaryLineCount: 2,
  },
  {
    startTime: '6:00 PM',
    endTime: '6:30 PM',
    activities: ['Main Stage: Adina Gray', 'Community Stage: Lightning Talks'],
    primaryLineCount: 2,
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
    primaryLineIndices: [0],
  },
  {
    startTime: '7:30 PM',
    endTime: '9:00 PM',
    activities: ['After Party (invite only)'],
  },
];

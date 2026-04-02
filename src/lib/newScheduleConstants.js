/** Optional: `primaryLineIndices` — which activity lines use bold (overrides `primaryLineCount`). */
export const newSchedule = [
  {
    startTime: '2:10 PM',
    activities: [
      'Registration Opens',
      'Networking space (full venue isn’t open yet)',
    ],
  },
  {
    startTime: '2:50 PM',
    activities: [
      'Doors Open to full venue',
      'Experience areas open - sponsored by AWS',
    ],
  },
  {
    startTime: '3:00 PM',
    endTime: '3:20 PM',
    activities: [
      'Opening Welcome Remarks',
      'Community Stage: streamed to Main Stage',
    ],
  },
  {
    startTime: '3:20 PM',
    endTime: '3:50 PM',
    activities: ['Main Stage: Session 1', 'Community Stage: Session 1'],
    primaryLineCount: 2,
  },
  {
    startTime: '3:50 PM',
    endTime: '4:20 PM',
    activities: ['Main Stage: Session 2', 'Community Stage: Session 2'],
    primaryLineCount: 2,
  },
  {
    startTime: '4:20 PM',
    endTime: '4:50 PM',
    activities: [
      'Main Stage: Session 3',
      'Community Stage: HackerRivals Round 1',
    ],
    primaryLineCount: 2,
  },
  {
    startTime: '4:50 PM',
    endTime: '5:30 PM',
    activities: [
      'Main Stage: Session 4',
      '10 min break after',
      'Community Stage: Session 3',
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
    activities: ['Main Stage: Session 6', 'Community Stage: Session 4'],
    primaryLineCount: 2,
  },
  {
    startTime: '6:30 PM',
    endTime: '7:00 PM',
    activities: [
      'HackerRivals Final',
      'Live on the Community Stage: streamed to the Main Stage',
    ],
  },
  {
    startTime: '7:00 PM',
    endTime: '7:30 PM',
    activities: ['HackerRivals Awards', 'Closing Remarks'],
  },
  {
    startTime: '7:30 PM',
    endTime: '9:00 PM',
    activities: ['After Party (invite only)'],
  },
];

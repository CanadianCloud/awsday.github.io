import {
  sessions,
  fullWidthRows,
  venues,
  EVENT_START_MINUTES,
  SLOT_MINUTES,
} from './torontoScheduleData';

export function formatDuration(minutes) {
  if (minutes < 120) return `${minutes}m`;
  return `${minutes / 60}h`;
}

const venueById = new Map(venues.map((v) => [v.id, v]));

const EXCLUDED_KINDS = new Set([
  'stream',
  'break',
  'hackathon-transition',
  'doors-open',
]);

function styleClassForTrack(track) {
  return track === 'showcase' ? 'neutral' : track;
}

function fromSession(session) {
  const venue = venueById.get(session.venue);
  return {
    id: session.id,
    title: session.title,
    start: session.start,
    startMinutes: session.startMinutes,
    end: session.end,
    endMinutes: session.endMinutes,
    track: session.track,
    tag: session.timelineTag ?? venue?.timelineTag ?? '',
    styleClass: styleClassForTrack(session.track),
    alwaysVisible: false,
    durationLabel: formatDuration(session.endMinutes - session.startMinutes),
  };
}

const ROW_OVERRIDES = {
  'food-break': {
    title: 'Hot Food Break — all stages pause',
    tag: 'Basement',
    styleClass: 'food',
  },
  'after-party': {
    title: 'After Party — 5-min walk from venue',
    tag: 'Offsite',
    styleClass: 'neutral',
    durationLabel: '',
  },
};

function fromFullWidthRow(row) {
  const override = ROW_OVERRIDES[row.id];
  if (!override) return null;
  return {
    id: row.id,
    title: override.title,
    start: row.start,
    startMinutes: row.startMinutes,
    end: row.end,
    endMinutes: row.endMinutes,
    track: null,
    tag: override.tag,
    styleClass: override.styleClass,
    alwaysVisible: true,
    durationLabel:
      override.durationLabel !== undefined
        ? override.durationLabel
        : formatDuration(row.endMinutes - row.startMinutes),
  };
}

function buildDoorsOpenEntry() {
  const anyDoors = sessions.find((s) => s.kind === 'doors-open');
  const startMinutes = anyDoors?.startMinutes ?? EVENT_START_MINUTES;
  const endMinutes = anyDoors?.endMinutes ?? EVENT_START_MINUTES + SLOT_MINUTES;
  return {
    id: 'doors-open',
    title: 'Doors open',
    start: anyDoors?.start ?? '12:00',
    startMinutes,
    end: anyDoors?.end ?? '12:30',
    endMinutes,
    track: null,
    tag: 'Levels 3–4',
    styleClass: 'neutral',
    alwaysVisible: true,
    durationLabel: formatDuration(endMinutes - startMinutes),
  };
}

export function buildTimelineEntries() {
  const showcaseSessions = sessions
    .filter((s) => s.track === 'showcase')
    .sort((a, b) => a.startMinutes - b.startMinutes);
  const firstShowcaseId = showcaseSessions[0]?.id;

  const sessionEntries = sessions
    .filter((session) => {
      if (EXCLUDED_KINDS.has(session.kind)) return false;
      if (session.track === 'showcase' && session.id !== firstShowcaseId) return false;
      return true;
    })
    .map(fromSession);

  const rowEntries = fullWidthRows
    .map(fromFullWidthRow)
    .filter((entry) => entry !== null);

  return [buildDoorsOpenEntry(), ...sessionEntries, ...rowEntries];
}

export const timelineEntries = buildTimelineEntries();

export function groupByStartTime(entries) {
  const byStart = new Map();
  for (const entry of entries) {
    let group = byStart.get(entry.startMinutes);
    if (!group) {
      group = {
        start: entry.start,
        startMinutes: entry.startMinutes,
        entries: [],
      };
      byStart.set(entry.startMinutes, group);
    }
    group.entries.push(entry);
  }
  return [...byStart.values()].sort((a, b) => a.startMinutes - b.startMinutes);
}

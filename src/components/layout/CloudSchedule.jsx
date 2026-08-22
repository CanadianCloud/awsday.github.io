'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './CloudSchedule.module.css';

const featuredSpeakers = [
  {
    name: 'Milad Kayali',
    role: 'Head of Canada Enterprise Industry Solutions Architecture, AWS',
    image: '/speakers/Milad.png',
    linkedIn: 'https://www.linkedin.com/in/miladkayali/',
  },
  {
    name: 'Brett Gillett',
    role: 'Cloud Summit Speaker',
    image: '/speakers/Brett.png',
    linkedIn: 'https://www.linkedin.com/in/brettgillett/',
  },
  {
    name: 'Rohini Gaonkar',
    role: 'Cloud Summit Speaker',
    image: '/speakers/Rohini.png',
    linkedIn: 'https://www.linkedin.com/in/rohinigaonkar/',
  },
];
import {
  venues,
  slots,
  sessions,
  fullWidthRows,
  gridHeaders,
  legend,
  filterTracks,
  venueKeyText,
  dateLine,
  shortDateLine,
} from '@/lib/torontoScheduleData';
import { timelineEntries, groupByStartTime } from '@/lib/scheduleFilterUtils';
import { getNowLinePosition } from '@/lib/scheduleNowUtils';

function c(...names) {
  return names.filter(Boolean).map((n) => styles[n]).filter(Boolean).join(' ');
}

const FEATURED_KINDS = new Set(['keynote', 'panel', 'hackathon-round', 'hackathon-final']);
const DASHED_KINDS = new Set(['doors-open', 'break']);
const MUTED_KINDS = new Set(['stream', 'hackathon-transition']);

function sessionWeightClass(kind) {
  if (kind === 'showcase') return 'session--neutral';
  if (FEATURED_KINDS.has(kind)) return 'session--featured';
  if (DASHED_KINDS.has(kind)) return 'session--ops-dashed';
  if (MUTED_KINDS.has(kind)) return 'session--ops-muted';
  return 'session--plain';
}

const columnByVenue = new Map(venues.map((v, i) => [v.id, i + 2]));

let _headerCol = 2;
const gridHeaderCells = gridHeaders.map((header) => {
  const start = _headerCol;
  _headerCol += header.span;
  return { ...header, start, end: _headerCol };
});

const timelineGroups = groupByStartTime(timelineEntries);

export default function CloudSchedule() {
  const [activeTrack, setActiveTrack] = useState('all');
  const gridRef = useRef(null);
  const nowLineRef = useRef(null);

  useEffect(() => {
    const line = nowLineRef.current;
    const grid = gridRef.current;
    if (!line || !grid) return;

    function positionNowLine() {
      const position = getNowLinePosition(new Date());
      if (position === null) {
        line.hidden = true;
        return;
      }

      const timeCells = Array.from(grid.querySelectorAll('[data-timecell]'));
      const lowerIndex = Math.floor(position);
      const upperIndex = Math.min(lowerIndex + 1, timeCells.length - 1);
      const lowerCell = timeCells[lowerIndex];
      const upperCell = timeCells[upperIndex];
      if (!lowerCell || !upperCell) return;

      const fraction = position - lowerIndex;
      const gridTop = grid.getBoundingClientRect().top;
      const lowerTop = lowerCell.getBoundingClientRect().top - gridTop;
      const upperTop = upperCell.getBoundingClientRect().top - gridTop;

      line.style.top = `${lowerTop + (upperTop - lowerTop) * fraction}px`;
      line.hidden = false;
    }

    positionNowLine();
    const interval = window.setInterval(positionNowLine, 60_000);
    window.addEventListener('resize', positionNowLine);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener('resize', positionNowLine);
    };
  }, []);

  const gridStyle = {
    gridTemplateRows: `auto repeat(${slots.length}, minmax(2.875rem, auto))`,
  };

  return (
    <section className={styles.schedule} id="schedule">
      <div className={styles['schedule-header']}>
        <h2 className={styles['section-heading']}>
          Event <span style={{ color: '#FF9900' }}>Schedule</span>
        </h2>
        <p className={styles['date-line']}>{dateLine}</p>
        <ul className={styles.legend} role="list">
          {legend.map((entry) => (
            <li
              key={entry.track}
              className={c('legend-chip', `legend-chip--${entry.track}`)}
            >
              <span className={styles['legend-swatch']} aria-hidden="true"></span>
              {entry.label}
            </li>
          ))}
        </ul>
        <p className={styles['venue-key']}>{venueKeyText}</p>
      </div>

      <div className={styles['grid-scroll']}>
        <div className={styles.grid} style={gridStyle} ref={gridRef}>
          <div
            className={styles['corner-cell']}
            style={{ gridColumn: '1', gridRow: '1' }}
          />

          {gridHeaderCells.map((header) => (
            <div
              key={header.label}
              className={styles['grid-header-cell']}
              style={{ gridColumn: `${header.start} / ${header.end}`, gridRow: '1' }}
            >
              <span
                className={styles['grid-header-dot']}
                aria-hidden="true"
                style={{ background: header.color }}
              />
              {header.label}
            </div>
          ))}

          {slots.map((slot, si) => (
            <div
              key={slot}
              className={styles['time-cell']}
              style={{ gridColumn: '1', gridRow: String(si + 2) }}
              data-timecell="true"
            >
              {slot}
            </div>
          ))}

          {sessions.map((session) => {
            const column = columnByVenue.get(session.venue) ?? 2;
            const rowIndex = slots.indexOf(session.start);
            const weightClass = sessionWeightClass(session.kind);
            return (
              <div
                key={session.id}
                className={c('session', `session--${session.track}`, weightClass)}
                style={{
                  gridColumn: String(column),
                  gridRow: `${rowIndex + 2} / span ${session.slots}`,
                }}
              >
                {session.eyebrow && (
                  <p className={styles['session-eyebrow']}>{session.eyebrow}</p>
                )}
                <p className={styles['session-title']}>{session.title}</p>
                {session.speakers && session.speakers.length > 0 && (
                  <div className={styles['session-speakers']}>
                    {session.speakers.map((speaker) => (
                      <div key={speaker.name} className={styles['session-speaker']}>
                        {speaker.linkedIn ? (
                          <a
                            className={styles['session-speaker-name']}
                            href={speaker.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {speaker.name}
                          </a>
                        ) : (
                          <span className={styles['session-speaker-name']}>
                            {speaker.name}
                          </span>
                        )}
                        {speaker.role && (
                          <span className={styles['session-speaker-role']}>
                            {speaker.role}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {session.subtext && (
                  <p className={styles['session-subtext']}>{session.subtext}</p>
                )}
              </div>
            );
          })}

          {fullWidthRows.map((row) => {
            const rowIndex = slots.indexOf(row.start);
            const endColumn = row.venues.length + 2;
            return (
              <div
                key={row.id}
                className={c('full-width-row', `full-width-row--${row.variant}`)}
                style={{
                  gridColumn: `2 / ${endColumn}`,
                  gridRow: String(rowIndex + 2),
                }}
              >
                <p className={styles['full-width-title']}>
                  {row.title} &middot; {row.start}
                </p>
                {row.subtext && (
                  <p className={styles['full-width-subtext']}>{row.subtext}</p>
                )}
              </div>
            );
          })}

          <div
            className={styles['now-line']}
            ref={nowLineRef}
            hidden
          />
        </div>
      </div>

      <div className={styles.timeline}>
        <div className={styles['timeline-header']}>
          <h3 className={styles['timeline-heading']}>Schedule</h3>
          <p className={styles['timeline-date']}>{shortDateLine}</p>
        </div>

        <ul className={styles['filter-chips']} role="list">
          {filterTracks.map((track) => (
            <li key={track.id}>
              <button
                type="button"
                className={[
                  styles['filter-chip'],
                  activeTrack === track.id ? styles['filter-chip--active'] : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setActiveTrack(track.id)}
                aria-pressed={activeTrack === track.id}
              >
                {track.label}
              </button>
            </li>
          ))}
        </ul>

        {timelineGroups.map((group) => {
          const visibleEntries = group.entries.filter(
            (entry) =>
              activeTrack === 'all' || entry.alwaysVisible || entry.track === activeTrack,
          );
          if (visibleEntries.length === 0) return null;
          return (
            <div key={group.startMinutes} className={styles['timeline-group']}>
              <p className={styles['timeline-time']}>{group.start}</p>
              <div className={styles['timeline-entries']}>
                {visibleEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className={c('timeline-entry', `timeline-entry--${entry.styleClass}`)}
                  >
                    <div className={styles['timeline-entry-top']}>
                      <span className={styles['timeline-entry-tag']}>{entry.tag}</span>
                      {entry.durationLabel && (
                        <span className={styles['timeline-duration']}>
                          {entry.durationLabel}
                        </span>
                      )}
                    </div>
                    <p className={styles['timeline-entry-title']}>{entry.title}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles['schedule-cta']}>
        <h3 className={styles['schedule-cta-heading']}>Want to see the full schedule?</h3>
        <p className={styles['schedule-cta-body']}>
          Explore every session, workshop, and keynote on the Cloud Summit website.
        </p>
        <a
          href="https://cloudsummit.ca"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['schedule-cta-link']}
        >
          See full schedule at Cloud Summit
        </a>
      </div>

      <div className={styles['speakers-section']}>
        <h3 className={styles['speakers-heading']}>Featured Speakers</h3>
        <div className={styles['speakers-grid']}>
          {featuredSpeakers.map((speaker) => (
            <a
              key={speaker.name}
              href={speaker.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['speaker-card']}
            >
              <div className={styles['speaker-photo-wrap']}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className={styles['speaker-photo']}
                />
              </div>
              <p className={styles['speaker-name']}>{speaker.name}</p>
              <p className={styles['speaker-role']}>{speaker.role}</p>
            </a>
          ))}
        </div>
        <Link href="/speakers-2026" className={styles['speakers-all-link']}>
          See all speakers →
        </Link>
      </div>
    </section>
  );
}

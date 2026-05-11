const projects = [
  {
    name: 'UT Marketplace',
    date: 'Fall 2025 – Present',
    stack: ['Product Strategy', 'Agile/Scrum', 'Figma', 'Roadmapping', 'User Research'],
    bullets: [
      'Drove a team of 12 to build a UT-backed marketplace platform for 40K+ students supporting listing, search, and messaging services',
      'Launched website reaching 1.2K+ listings, 3.5K+ buyer–seller messages, and 65% successful transactions in the first three months',
      'Defined product requirements and prioritized 60+ user stories across 20+ features, balancing scalability, feasibility, and impact',
      'Shaped platform architecture across three core databases and 20+ API endpoints to support six backend services and operations',
    ],
    metrics: [
      { val: '1.2K+', label: 'Listings' },
      { val: '65%', label: 'Transactions' },
      { val: '40K+', label: 'Students' },
      { val: '3.5K+', label: 'Messages' },
    ],
    github: 'https://github.com/maerixhy',
  },
]

const s = {
  page: { padding: '4rem 5vw 6rem', minHeight: 'calc(100vh - 65px)' },
  header: { marginBottom: '3rem', textAlign: 'center' },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
    fontWeight: 600,
    lineHeight: 1.05,
    marginBottom: '0.5rem',
    color: 'var(--text)',
  },
  titleAccent: { color: 'var(--accent)', fontStyle: 'italic', fontWeight: 400 },
  sub: { fontSize: '14px', color: 'var(--text-light)', letterSpacing: '0.02em' },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    maxWidth: '760px',
    margin: '0 auto',
  },
  card: {
    padding: '1.75rem',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    background: 'var(--bg-card)',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '0.75rem',
  },
  cardName: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--text)',
    lineHeight: 1.25,
    flex: 1,
  },
  dateBadge: {
    fontSize: '11px',
    color: 'var(--accent)',
    fontWeight: 600,
    letterSpacing: '0.04em',
    background: 'var(--accent-light)',
    padding: '3px 10px',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid var(--border-accent)',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  bullets: { margin: 0, padding: 0, listStyle: 'none', flex: 1 },
  bullet: {
    fontSize: '13px',
    lineHeight: 1.7,
    color: 'var(--text-muted)',
    paddingLeft: '1.1rem',
    position: 'relative',
    marginBottom: '0.2rem',
  },
  bulletDot: {
    position: 'absolute',
    left: 0,
    top: '8px',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    background: 'var(--accent)',
    opacity: 0.5,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    paddingTop: '0.75rem',
    borderTop: '1px solid var(--border)',
    marginTop: 'auto',
  },
  metricsRow: {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap',
  },
  metric: { display: 'flex', flexDirection: 'column', gap: '2px' },
  metricVal: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.35rem',
    fontWeight: 600,
    color: 'var(--accent)',
    lineHeight: 1.1,
  },
  metricLabel: {
    fontSize: '10px',
    color: 'var(--text-light)',
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
    fontWeight: 500,
  },
  tagsGithubRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  stack: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem' },
  stackTag: {
    fontSize: '11px',
    padding: '3px 10px',
    background: 'rgba(26,23,20,0.05)',
    borderRadius: 'var(--radius-pill)',
    color: 'var(--text-light)',
    fontWeight: 500,
  },
  githubLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    fontWeight: 600,
    color: 'var(--accent)',
    border: '1.5px solid var(--border-accent)',
    padding: '5px 13px',
    borderRadius: 'var(--radius-pill)',
    textDecoration: 'none',
    background: 'transparent',
    transition: 'background 0.15s',
    whiteSpace: 'nowrap',
  },
}

function ProjectCard({ p }) {
  return (
    <div
      style={s.card}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
        e.currentTarget.style.borderColor = 'var(--border-accent)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={s.cardHeader}>
        <span style={s.cardName}>{p.name}</span>
        <span style={s.dateBadge}>{p.date}</span>
      </div>

      <ul style={s.bullets}>
        {p.bullets.map((b, i) => (
          <li key={i} style={s.bullet}>
            <span style={s.bulletDot} />
            {b}
          </li>
        ))}
      </ul>

      <div style={s.cardFooter}>
        <div style={s.metricsRow}>
          {p.metrics.map((m, i) => (
            <div key={i} style={s.metric}>
              <span style={s.metricVal}>{m.val}</span>
              <span style={s.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>
        <div style={s.tagsGithubRow}>
          <div style={s.stack}>
            {p.stack.map(t => <span key={t} style={s.stackTag}>{t}</span>)}
          </div>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              style={s.githubLink}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Product() {
  return (
    <div style={s.page}>
      <div style={s.header}>
        <h2 style={s.title}>
          Problems I've <em style={s.titleAccent}>solved</em>
        </h2>
        <p style={s.sub}>Roadmaps, strategy, and products shipped end to end.</p>
      </div>
      <div style={s.list}>
        {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </div>
  )
}

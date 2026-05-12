const projects = [
  {
    name: 'OcuMind',
    date: 'Spring 2026',
    stack: ['Python', 'Flask', 'MediaPipe', 'OpenCV'],
    bullets: [
      'Built real-time gaze pipeline using MediaPipe and OpenCV, streaming calibrated eye data at 30 FPS with <50ms end-to-end latency',
      'Engineered MAD calibration system tracking four ocular signals (accuracy, smoothness, latency, stability) with JSON/CSV export',
      'Architected a full-stack Flask app end-to-end supporting 5+ neurological rehabilitation use cases',
    ],
    metrics: [
      { val: '30 FPS', label: 'Eye tracking' },
      { val: '<50ms', label: 'Latency' },
      { val: '5+', label: 'Use cases' },
    ],
    github: 'https://github.com/maerixhy',
  },
  {
    name: 'OS Kernel: User Security',
    date: 'Fall 2025',
    stack: ['C++', 'C', 'x86 Assembly'],
    bullets: [
      'Implemented 4+ kernel-level auth syscalls to support concurrent multi-process security contexts with 99%+ deterministic coverage',
      'Reduced execution overhead by 30% through low-level performance profiling and iterative optimization of runtime components',
      'Benchmarked security primitives across 10+ workloads, identifying 3 bottlenecks and cutting average syscall latency by 25%',
    ],
    metrics: [
      { val: '99%+', label: 'Test coverage' },
      { val: '30%', label: 'Overhead reduction' },
      { val: '25%', label: 'Syscall latency cut' },
    ],
    github: 'https://github.com/maerixhy',
  },
  {
    name: '32-Bit RISC Architecture Simulator',
    date: 'Spring 2025',
    stack: ['C', 'Verilog'],
    bullets: [
      'Built a full ISA simulator for a custom 32-bit RISC architecture, implementing a compiler toolchain supporting 30 opcodes',
      'Engineered a 512KB VM with segmented binary loading, enforcing address bounds and privilege modes across 5+ memory regions',
      'Validated correctness across 3 benchmark workloads, achieving 100% execution accuracy on the simulated processor',
    ],
    metrics: [
      { val: '30', label: 'Opcodes supported' },
      { val: '512KB', label: 'VM size' },
      { val: '100%', label: 'Execution accuracy' },
    ],
    github: 'https://github.com/maerixhy',
  },
  {
    name: 'Web Crawler',
    date: 'Fall 2024',
    stack: ['Java', 'HTML'],
    bullets: [
      'Developed a three-stage Java web crawler pipeline to process HTML content, supporting logical and phrase-based search queries',
      'Implemented an inverted index with 20K+ unique tokens and posting lists, enabling <150ms average query latency in retrieval',
      'Indexed 9K+ pages and 94K+ words with 100% crawl success and zero crashes during stress testing',
    ],
    metrics: [
      { val: '9K+', label: 'Pages indexed' },
      { val: '20K+', label: 'Unique tokens' },
      { val: '<150ms', label: 'Query latency' },
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
        </div>
      </div>
    </div>
  )
}

export default function Engineering() {
  return (
    <div style={s.page}>
      <div style={s.header}>
        <h2 style={s.title}>
          Things I've <em style={s.titleAccent}>built</em>
        </h2>
        <p style={s.sub}>Systems, apps, and everything in between.</p>
        <a
          href="/resume-swe.pdf"
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '1rem',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            border: '1.5px solid var(--border-accent)',
            padding: '7px 18px',
            borderRadius: 'var(--radius-pill)',
            textDecoration: 'none',
            background: 'transparent',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          SWE Resume ↓
        </a>
      </div>
      <div style={s.list}>
        {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </div>
  )
}

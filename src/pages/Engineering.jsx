
const projects = [
  {
    name: 'Project Name',
    desc: 'One or two sentences on what it does and why you built it. Keep it punchy.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com/YOUR_USERNAME/repo',
  },
  {
    name: 'Project Name',
    desc: 'One or two sentences on what it does and why you built it. Keep it punchy.',
    stack: ['Python', 'Flask', 'AWS'],
    link: 'https://github.com/YOUR_USERNAME/repo',
  },
  {
    name: 'Project Name',
    desc: 'One or two sentences on what it does and why you built it. Keep it punchy.',
    stack: ['Java', 'Spring Boot'],
    link: 'https://github.com/YOUR_USERNAME/repo',
  },
  {
    name: 'Project Name',
    desc: 'One or two sentences on what it does and why you built it. Keep it punchy.',
    stack: ['TypeScript', 'Next.js'],
    link: 'https://github.com/YOUR_USERNAME/repo',
  },
]

const s = {
  page: { padding: '4rem 3rem', minHeight: 'calc(100vh - 65px)' },
  title: { fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 300, marginBottom: '0.4rem' },
  sub: { fontSize: '13px', color: 'var(--text-light)', letterSpacing: '0.04em', marginBottom: '3rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', maxWidth: '720px' },
  card: { padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--bg-card)', transition: 'border-color 0.2s, transform 0.2s', cursor: 'pointer', textDecoration: 'none', display: 'block', color: 'inherit' },
  cardHeader: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' },
  cardName: { fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 500 },
  arrow: { color: 'var(--accent)', fontSize: '1.1rem' },
  desc: { fontSize: '13px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 300 },
  stack: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem' },
  stackTag: { fontSize: '11px', padding: '3px 10px', background: 'var(--accent-light)', borderRadius: '20px', color: '#8A6A50', border: '1px solid rgba(176,128,96,0.15)' },
}

export default function Engineering() {
  return (
    <div style={s.page}>
      <h2 style={s.title}>Engineering</h2>
      <p style={s.sub}>Things I've built</p>
      <div style={s.grid}>
        {projects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noreferrer" style={s.card}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(176,128,96,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}>
            <div style={s.cardHeader}>
              <span style={s.cardName}>{p.name}</span>
              <span style={s.arrow}>↗</span>
            </div>
            <p style={s.desc}>{p.desc}</p>
            <div style={s.stack}>
              {p.stack.map(t => <span key={t} style={s.stackTag}>{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

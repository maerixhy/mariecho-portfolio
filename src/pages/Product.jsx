
const caseStudies = [
  {
    tag: 'Case Study · Product Strategy',
    title: 'Your PM Project Title Here',
    desc: '2–3 sentences describing the problem you tackled, your approach, and what you shipped or recommended. Lead with the user problem.',
    metrics: [{ val: '+32%', label: 'Engagement' }, { val: '10K', label: 'Users reached' }],
    link: '#',
  },
  {
    tag: 'Case Study · UX Research',
    title: 'Another PM Project Title',
    desc: '2–3 sentences describing the problem you tackled, your approach, and what you shipped or recommended. Lead with the user problem.',
    metrics: [{ val: '3x', label: 'Retention' }, { val: '–40%', label: 'Drop-off rate' }],
    link: '#',
  },
]

const s = {
  page: { padding: '4rem 3rem', minHeight: 'calc(100vh - 65px)' },
  title: { fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 300, marginBottom: '0.4rem' },
  sub: { fontSize: '13px', color: 'var(--text-light)', letterSpacing: '0.04em', marginBottom: '3rem' },
  list: { display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '680px' },
  card: { padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--bg-card)', cursor: 'pointer', transition: 'border-color 0.2s', textDecoration: 'none', display: 'block', color: 'inherit' },
  caseTag: { fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 400 },
  caseTitle: { fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, marginBottom: '0.6rem' },
  caseDesc: { fontSize: '14px', lineHeight: 1.75, color: 'var(--text-muted)', fontWeight: 300, marginBottom: '1.25rem' },
  metrics: { display: 'flex', gap: '2rem' },
  metricVal: { fontFamily: 'var(--font-serif)', fontSize: '1.7rem', fontWeight: 400, color: 'var(--accent)' },
  metricLabel: { fontSize: '11px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em' },
}

export default function Product() {
  return (
    <div style={s.page}>
      <h2 style={s.title}>Product</h2>
      <p style={s.sub}>Case studies & PM work</p>
      <div style={s.list}>
        {caseStudies.map((c, i) => (
          <a key={i} href={c.link} style={s.card}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(176,128,96,0.5)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <p style={s.caseTag}>{c.tag}</p>
            <p style={s.caseTitle}>{c.title}</p>
            <p style={s.caseDesc}>{c.desc}</p>
            <div style={s.metrics}>
              {c.metrics.map((m, j) => (
                <div key={j}>
                  <div style={s.metricVal}>{m.val}</div>
                  <div style={s.metricLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

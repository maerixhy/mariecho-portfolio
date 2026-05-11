
const experiences = [
  {
    date: 'Summer 2025',
    company: 'Citi',
    role: 'Software Engineering Intern',
    desc: 'Add your bullet points here — what you built, what it impacted, which teams you worked with.',
    tags: ['Java', 'Spring Boot', 'SQL'],
  },
  {
    date: '2023 — Present',
    company: 'UT Austin',
    role: 'B.S. in [Your Major]',
    desc: 'Relevant coursework, clubs, activities, or awards you want to highlight.',
    tags: [],
  },
]

const s = {
  page: { padding: '4rem 3rem', minHeight: 'calc(100vh - 65px)' },
  title: { fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 300, marginBottom: '0.4rem' },
  sub: { fontSize: '13px', color: 'var(--text-light)', letterSpacing: '0.04em', marginBottom: '3.5rem' },
  timeline: { maxWidth: '620px', position: 'relative', paddingLeft: '2rem' },
  line: { position: 'absolute', left: 0, top: '8px', bottom: 0, width: '1px', background: 'var(--border)' },
  item: { position: 'relative', marginBottom: '3rem' },
  dot: { position: 'absolute', left: '-2.45rem', top: '6px', width: '9px', height: '9px', borderRadius: '50%', background: 'var(--accent)', border: '2px solid #FAF7F4' },
  date: { fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.35rem' },
  company: { fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 500, marginBottom: '0.15rem' },
  role: { fontSize: '13px', color: 'var(--text-light)', marginBottom: '0.75rem' },
  desc: { fontSize: '14px', lineHeight: 1.75, color: 'var(--text-muted)', fontWeight: 300 },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' },
  tag: { fontSize: '11px', padding: '3px 10px', background: 'rgba(26,23,20,0.05)', borderRadius: '20px', color: 'var(--text-light)' },
}

export default function Experience() {
  return (
    <div style={s.page}>
      <h2 style={s.title}>Experience</h2>
      <p style={s.sub}>Where I've worked</p>
      <div style={s.timeline}>
        <div style={s.line} />
        {experiences.map((exp, i) => (
          <div key={i} style={s.item}>
            <div style={s.dot} />
            <p style={s.date}>{exp.date}</p>
            <p style={s.company}>{exp.company}</p>
            <p style={s.role}>{exp.role}</p>
            <p style={s.desc}>{exp.desc}</p>
            {exp.tags.length > 0 && (
              <div style={s.tags}>
                {exp.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

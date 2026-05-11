
const s = {
  page: { padding: '4rem 3rem', minHeight: 'calc(100vh - 65px)' },
  tag: { fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 400 },
  name: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 7vw, 4.8rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.01em' },
  nameItalic: { fontStyle: 'italic', color: 'var(--accent)' },
  bio: { fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '520px', marginBottom: '2.5rem', fontWeight: 300 },
  links: { display: 'flex', gap: '1.5rem', alignItems: 'center' },
  link: { fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', borderBottom: '1px solid rgba(26,23,20,0.25)', paddingBottom: '2px' },
  dot: { width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', opacity: 0.4 },
  about: { marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '700px' },
  label: { fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' },
  aboutText: { fontSize: '14px', lineHeight: 1.8, color: 'var(--text-muted)', fontWeight: 300 },
  skillsList: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' },
  skillTag: { fontSize: '12px', padding: '4px 12px', border: '1px solid rgba(176,128,96,0.3)', borderRadius: '20px', color: '#8A6A50', background: 'rgba(176,128,96,0.06)' },
}

export default function Home() {
  return (
    <div style={s.page}>
      <div style={{ maxWidth: '680px' }}>
        <p style={s.tag}>Based in Austin, TX</p>
        <h1 style={s.name}>
          Marie <em style={s.nameItalic}>Cho</em>
        </h1>
        <p style={s.bio}>
          I build products and the software behind them. Currently studying at UT Austin,
          interning at Citi this summer as a software engineer.
        </p>
        <div style={s.links}>
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" style={s.link}>GitHub</a>
          <div style={s.dot} />
          <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" style={s.link}>LinkedIn</a>
          <div style={s.dot} />
          <a href="/resume.pdf" target="_blank" rel="noreferrer" style={s.link}>Resume</a>
        </div>
      </div>
      <div style={s.about}>
        <div>
          <p style={s.label}>Background</p>
          <p style={s.aboutText}>
            UT Austin student interested in the intersection of engineering and product.
            I like building things people actually use.
          </p>
        </div>
        <div>
          <p style={s.label}>Skills</p>
          <div style={s.skillsList}>
            {['React', 'Python', 'Java', 'SQL', 'Figma', 'Product Strategy'].map(skill => (
              <span key={skill} style={s.skillTag}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

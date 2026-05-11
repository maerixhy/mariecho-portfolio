import { useState, useEffect } from 'react'

const photos = ['/photo1.jpg', '/photo2.jpg', '/photo3.jpg']

const techSkills = ['Python', 'Java', 'JavaScript', 'C/C++', 'SQL', 'React', 'HTML/CSS', 'Verilog', 'PyTorch', 'HuggingFace']
const toolSkills = ['Jira', 'Linear', 'Trello', 'Figma', 'Miro', 'Postman', 'AWS']

function PhotoCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % photos.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCurrent(p => (p - 1 + photos.length) % photos.length)
  const next = () => setCurrent(p => (p + 1) % photos.length)

  const arrowBtn = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 3,
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.82)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    color: 'var(--text)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    transition: 'background 0.15s',
    lineHeight: 1,
  }

  return (
    <div style={{
      position: 'relative',
      width: 'clamp(260px, 30vw, 400px)',
      height: 'clamp(260px, 30vw, 400px)',
      borderRadius: '24px',
      overflow: 'hidden',
      flexShrink: 0,
      boxShadow: '0 20px 60px rgba(26,23,20,0.18)',
    }}>
      {photos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Marie Cho"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.9s ease-in-out',
          }}
        />
      ))}
      <button
        onClick={prev}
        style={{ ...arrowBtn, left: '10px' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.97)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.82)' }}
      >‹</button>
      <button
        onClick={next}
        style={{ ...arrowBtn, right: '10px' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.97)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.82)' }}
      >›</button>
      <div style={{
        position: 'absolute',
        bottom: '14px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '6px',
        zIndex: 2,
      }}>
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: '#fff',
              opacity: i === current ? 1 : 0.55,
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  )
}

const s = {
  page: { padding: '0 5vw 5rem' },
  hero: {
    display: 'flex',
    gap: 'clamp(2.5rem, 5vw, 5rem)',
    alignItems: 'center',
    padding: '4rem 0 3.5rem',
    flexWrap: 'wrap',
  },
  heroRight: {
    flex: 1,
    minWidth: '280px',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  name: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(3.5rem, 6.5vw, 5.5rem)',
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: 0.95,
    color: 'var(--accent)',
    marginBottom: '1rem',
    letterSpacing: '-0.01em',
    whiteSpace: 'nowrap',
  },
  tagsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '1.5rem',
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    fontSize: '12px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    fontWeight: 700,
    background: 'var(--accent-light)',
    padding: '5px 14px',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid var(--border-accent)',
  },
  eyebrowDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    background: 'var(--accent)',
    display: 'inline-block',
  },
  eyebrowNeutral: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '12px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontWeight: 600,
    background: 'rgba(26,23,20,0.05)',
    padding: '5px 14px',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid var(--border)',
  },
  bio: {
    fontSize: '15.5px',
    lineHeight: 1.85,
    color: 'var(--text-muted)',
    marginBottom: '1.5rem',
    fontWeight: 400,
  },
  linksRow: {
    display: 'flex',
    gap: '0.65rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  linkBtnPrimary: {
    fontSize: '13px',
    letterSpacing: '0.04em',
    fontWeight: 600,
    color: '#fff',
    border: '1.5px solid var(--accent)',
    padding: '8px 20px',
    borderRadius: 'var(--radius-pill)',
    background: 'var(--accent)',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
  },
  linkBtn: {
    fontSize: '13px',
    letterSpacing: '0.04em',
    fontWeight: 600,
    color: 'var(--accent)',
    border: '1.5px solid var(--border-accent)',
    padding: '8px 20px',
    borderRadius: 'var(--radius-pill)',
    background: 'transparent',
    textDecoration: 'none',
    transition: 'background 0.2s',
  },
  below: {
    paddingTop: '4rem',
    paddingBottom: '3rem',
    borderTop: '1px solid var(--border)',
  },
  aboutRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    marginBottom: '3rem',
  },
  aboutLabel: {
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '0.6rem',
    fontWeight: 700,
  },
  aboutText: {
    fontSize: '14px',
    lineHeight: 1.9,
    color: 'var(--text-muted)',
  },
  skillsSection: { marginTop: '0.5rem' },
  skillsLabel: {
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '0.75rem',
    fontWeight: 700,
  },
  skillRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  skillTag: {
    fontSize: '12px',
    padding: '5px 13px',
    background: 'var(--accent-light)',
    border: '1px solid var(--border-accent)',
    borderRadius: 'var(--radius-pill)',
    color: 'var(--accent)',
    fontWeight: 500,
  },
  toolTag: {
    fontSize: '12px',
    padding: '5px 13px',
    background: 'rgba(26,23,20,0.04)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-pill)',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
}

export default function Home() {
  return (
    <div style={s.page}>
      {/* Hero */}
      <div style={s.hero}>
        <PhotoCarousel />
        <div style={s.heroRight}>
          <h1 style={s.name}>
            Marie Cho
          </h1>
          <div style={s.tagsRow}>
            <span style={s.eyebrow}>SWE Intern @ Citi</span>
            <span style={s.eyebrowNeutral}>Austin, TX</span>
            <span style={s.eyebrowNeutral}>CS + Business</span>
          </div>
          <p style={s.bio}>
            Hello! I’m in the Texas CSB (Computer Science & Business) Honors program at UT Austin, 
            where I’m passionate about figuring out how tech, data, and strategy come together to build 
            things people actually use and love.

            I’m especially interested in AI/ML for product innovation and how those tools can shape 
            smarter decisions and better user experiences. My strengths are in technical product management, 
            software development, and thinking through problems from both an engineering and business lens.

            Always trying to build cool stuff, learn fast, and work with people who care about what they’re 
            making. Let’s chat!
            
          </p>
          <div style={s.linksRow}>
            <a
              href="https://linkedin.com/in/mariecho"
              target="_blank"
              rel="noreferrer"
              style={s.linkBtnPrimary}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >LinkedIn</a>
            <a
              href="https://github.com/maerixhy"
              target="_blank"
              rel="noreferrer"
              style={s.linkBtn}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >GitHub</a>
            <a
              href="mailto:cho.marie@utexas.edu"
              style={s.linkBtn}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >Email</a>
          </div>
        </div>
      </div>

      {/* Below hero */}
      <div style={s.below}>
        <div style={s.aboutRow}>
          <div>
            <p style={s.aboutLabel}>Background</p>
            <p style={s.aboutText}>
              I'm pursuing a dual degree in Computer Science (Honors) and Business Administration
              (Canfield Business Honors) at UT Austin, graduating May 2028. On the engineering side,
              I've built everything from OS kernels and compiler toolchains to full-stack web apps and
              ML pipelines — I care about understanding systems at a low level, not just using them.
              On the product side, I lead cross-functional teams, run user research, and ship roadmaps
              that balance technical feasibility with real user impact. I surround myself with work
              where both worlds come together and with enthusiasm for hard problems.
            </p>
          </div>
          <div>
            <p style={s.aboutLabel}>More About Me</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                'Pickleball has become my favorite way to convince myself I\'m athletic.',
                'Baking is either a relaxing hobby or a competitive sport depending on how the recipe goes.',
                'I\'m a huge foodie and love trying new restaurants, especially if they have a good brunch menu.',
                'Always down for live music, especially the kind where everyone somehow knows the lyrics.',
                'Currently trying to become the kind of person who wakes up early for sunrise walks.',
                'Probably saying "we should totally do that" about something slightly unrealistic.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '13.5px', lineHeight: 1.65, color: 'var(--text-muted)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '6px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={s.skillsSection}>
          <p style={s.skillsLabel}>Skills</p>
          <div style={s.skillRow}>
            {techSkills.map(skill => <span key={skill} style={s.skillTag}>{skill}</span>)}
          </div>
          <div style={s.skillRow}>
            {toolSkills.map(tool => <span key={tool} style={s.toolTag}>{tool}</span>)}
          </div>
        </div>

        <div style={{ marginTop: '3.5rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
          <p style={s.skillsLabel}>Proof I'm not always on my keyboard</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '0.75rem',
          }}>
            <img src="/fun1.jpg" alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/fun2.jpg" alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/fun3.jpg" alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/fun6.jpg" alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/fun4.jpg" alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/fun5.jpg" alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

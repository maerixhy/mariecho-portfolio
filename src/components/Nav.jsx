import { NavLink } from 'react-router-dom'

const s = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.2rem 3rem',
    borderBottom: '1px solid rgba(26,23,20,0.08)',
    background: 'rgba(250,247,244,0.92)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoBadge: {
    width: '34px',
    height: '34px',
    borderRadius: '10px',
    background: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'var(--font-serif)',
    fontWeight: 600,
    fontSize: '1rem',
    letterSpacing: '0.02em',
    flexShrink: 0,
  },
  logoText: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.92rem',
    fontWeight: 600,
    color: 'var(--text)',
    letterSpacing: '0.01em',
  },
  links: {
    display: 'flex',
    gap: '0.25rem',
  },
}

const linkStyle = ({ isActive }) => ({
  fontSize: '13px',
  letterSpacing: '0.04em',
  color: isActive ? 'var(--accent)' : 'var(--text-muted)',
  fontWeight: isActive ? 600 : 400,
  textDecoration: 'none',
  padding: '6px 14px',
  borderRadius: 'var(--radius-pill)',
  background: isActive ? 'var(--accent-light)' : 'transparent',
  border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
  transition: 'all 0.2s',
})

export default function Nav() {
  return (
    <nav style={s.nav}>
      <NavLink to="/" style={s.logoWrap}>
        <div style={s.logoBadge}>MC</div>
      </NavLink>
      <div style={s.links}>
        <NavLink to="/" end style={linkStyle}>Home</NavLink>
        <NavLink to="/experience" style={linkStyle}>Experience</NavLink>
        <NavLink to="/engineering" style={linkStyle}>Engineering</NavLink>
        <NavLink to="/product" style={linkStyle}>Product</NavLink>
      </div>
    </nav>
  )
}

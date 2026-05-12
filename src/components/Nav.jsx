import { useState, useRef, useEffect } from 'react'
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
  links: {
    display: 'flex',
    gap: '0.25rem',
    alignItems: 'center',
  },
  resumeBtn: {
    fontSize: '13px',
    letterSpacing: '0.04em',
    color: 'var(--text-muted)',
    fontWeight: 400,
    padding: '6px 14px',
    borderRadius: 'var(--radius-pill)',
    background: 'transparent',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontFamily: 'var(--font-sans)',
  },
  dropdownWrap: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    right: 0,
    background: 'rgba(250,247,244,0.98)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(26,23,20,0.12)',
    overflow: 'hidden',
    minWidth: '210px',
    zIndex: 200,
  },
  dropdownItem: {
    display: 'block',
    padding: '10px 16px',
    fontSize: '13px',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'background 0.15s, color 0.15s',
    whiteSpace: 'nowrap',
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

function ResumeDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div style={s.dropdownWrap} ref={ref}>
      <button
        style={s.resumeBtn}
        onClick={() => setOpen(o => !o)}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--accent)'
          e.currentTarget.style.background = 'var(--accent-light)'
          e.currentTarget.style.border = '1px solid var(--border-accent)'
        }}
        onMouseLeave={e => {
          if (!open) {
            e.currentTarget.style.color = 'var(--text-muted)'
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.border = '1px solid transparent'
          }
        }}
      >
        Resume <span style={{ fontSize: '10px', opacity: 0.7 }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div style={s.dropdown}>
          <a
            href="/resume-swe.pdf"
            download
            style={s.dropdownItem}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)' }}
            onClick={() => setOpen(false)}
          >
            Software Engineering Resume ↓
          </a>
          <a
            href="/resume-pm.pdf"
            download
            style={s.dropdownItem}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)' }}
            onClick={() => setOpen(false)}
          >
            Product Management Resume ↓
          </a>
        </div>
      )}
    </div>
  )
}

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
        <ResumeDropdown />
      </div>
    </nav>
  )
}

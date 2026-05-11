import { NavLink } from 'react-router-dom'

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.4rem 3rem',
    borderBottom: '1px solid rgba(26,23,20,0.08)',
    background: '#FAF7F4',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.35rem',
    fontWeight: 400,
    letterSpacing: '0.02em',
    color: 'var(--text)',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '2.5rem',
  },
}

const linkStyle = ({ isActive }) => ({
  fontSize: '12px',
  letterSpacing: '0.09em',
  textTransform: 'uppercase',
  color: isActive ? '#1A1714' : '#8A8480',
  fontWeight: 400,
  textDecoration: 'none',
  transition: 'color 0.2s',
})

export default function Nav() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.logo}>MC</NavLink>
      <div style={styles.links}>
        <NavLink to="/" end style={linkStyle}>Home</NavLink>
        <NavLink to="/experience" style={linkStyle}>Experience</NavLink>
        <NavLink to="/engineering" style={linkStyle}>Engineering</NavLink>
        <NavLink to="/product" style={linkStyle}>Product</NavLink>
      </div>
    </nav>
  )
}

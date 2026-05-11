const work = [
  {
    company: 'Citigroup',
    logo: { bg: '#fff', color: '#003DA5', text: 'C', img: '/logos/citi.png' },
    role: 'Software Engineering Intern',
    dates: 'June 2026 – August 2026',
    location: 'Irving, TX',
    bullets: [],
    note: 'Incoming — excited to start this summer!',
    tags: ['Software Engineering'],
  },
  {
    company: 'EagleView',
    logo: { bg: '#fff', color: '#1B6B3A', text: 'E', img: '/logos/eagleview.png' },
    role: 'Technical Product Management Intern',
    dates: 'October 2025 – April 2026',
    location: 'Remote',
    bullets: [
      'Prototyped a ChatGPT Apps SDK integration in a 48-hr hackathon, pitching two AI product innovation concepts to 25+ reviewers',
      'Led development of a data-driven instant quoting workflow (<120s), projected to reduce critical process turnaround time by 45%',
      'Built a Python quoting engine with 38 pricing variables at ±10% accuracy, interpreting data trends across 150+ historical jobs',
      'Designed 20+ high-fidelity Figma screens, aligning 11 stakeholders and presenting strategy to executive leadership at Q2 showcase',
    ],
    tags: ['Product Management', 'Python', 'Figma', 'Product Strategy', 'AI/ML'],
  },
  {
    company: 'Kendra Scott',
    logo: { bg: '#fff', color: '#2D2D2D', text: 'KS', img: '/logos/kendrascott.png' },
    role: 'Technical Product Management Intern',
    dates: 'September 2025 – Present',
    location: 'Austin, TX',
    bullets: [
      'Directed a team of 7 to spearhead retail chatbot business transformation, identifying bottlenecks and defining a 12-week roadmap',
      'Analyzed 120+ customer patterns to define six personas, interpreting data trends to develop actionable solutions for client needs',
      'Enhanced AI recommendations by integrating three visual ML signals, targeting a 30% relevance lift and 15% CTR increase',
    ],
    tags: ['Product Management', 'AI/ML', 'Product Strategy', 'User Research'],
  },
  {
    company: 'WhatsGoodATX',
    logo: { bg: '#1A8FD1', color: '#fff', text: 'W', img: '/logos/whatsgoodatx.png' },
    role: 'Product Management Intern',
    dates: 'September 2025 – December 2025',
    location: 'Austin, TX',
    bullets: [
      'Conducted competitive analysis of three event-discovery apps, benchmarking DAU, D7 retention, and API latency to identify gaps',
      'Secured partnerships with 20+ local businesses through outreach to 300+ vendors, shaping a localized marketplace growth strategy',
      'Ran 8-week AI-assisted TikTok growth experiment, generating 640K+ views, 16K followers, and ~22% increase in app downloads',
    ],
    tags: ['Product Management', 'Growth', 'Competitive Analysis', 'GTM Strategy'],
  },
  {
    company: 'AiKYNETIX',
    logo: { bg: '#fff', color: '#1A1AFF', text: 'A', img: '/logos/aikynetix.png' },
    role: 'Machine Learning Intern',
    dates: 'October 2023 – May 2024',
    location: 'Austin, TX',
    bullets: [
      'Improved motion-tracking model accuracy by 25% via error analysis and anomaly detection, correcting 40+ false-detection patterns',
      'Designed a parallelized data preprocessing pipeline, reducing training data ingestion time by 40% across 1.2K+ video frames',
      'Integrated Pivo auto camera tracking to enhance motion capture stability, improving WAU by 35% and session duration by 22%',
    ],
    tags: ['Software Engineering', 'Python', 'Computer Vision', 'ML'],
  },
  {
    company: 'Institute for Computing in Research',
    logo: { bg: '#1A1A2E', color: '#E87B3A', text: 'ICR', img: '/logos/icr.png' },
    role: 'Natural Language Processing Researcher',
    dates: 'July 2022 – August 2022',
    location: 'Austin, TX',
    bullets: [
      'Built a PyTorch NLP program to optimize semantic retrieval from 10K+ PDFs, improving relevance through ML framework',
      'Applied k-Means Clustering for document indexing, cutting search time by 63% through iterative performance analysis and tuning',
    ],
    tags: ['Software Engineering', 'PyTorch', 'NLP', 'Python'],
  },
]

const leadership = [
  {
    company: 'Longhorn Developers',
    logo: { bg: '#BF5700', color: '#fff', text: 'LD', img: '/logos/lhd.png' },
    role: 'Lead Product Manager',
    dates: 'Fall 2025 – Present',
    location: 'Austin, TX',
    bullets: [
      'Coordinated cross-functional planning with 17+ contributors in design, tech, and leadership to align on 12+ high-impact initiatives',
      'Delivered product features used by 16K+ users, achieving 46% weekly retention, <450ms API latency, and 99.2% platform uptime',
      'Mentored two junior PMs, reviewing 20+ PRDs and synthesizing insights from 10 user interviews to improve product development',
    ],
    tags: ['Product Management', 'Leadership', 'Agile'],
  },
  {
    company: 'Texas Convergent',
    logo: { bg: '#1565C0', color: '#fff', text: 'TC', img: '/logos/convergent.png' },
    role: 'Lead Product Manager',
    dates: 'Spring 2025 – Present',
    location: 'Austin, TX',
    bullets: [
      'Managed a team of 14, navigating ambiguity in a startup environment to deliver a remote wound monitoring prototype in 12 weeks',
      'Enabled clinician access to 500+ wound images and 100+ patient records, supporting continuous monitoring and follow-ups',
      'Outlined product requirements for Bluetooth VNA integration and cloud patient data storage through 10+ clinician interviews',
    ],
    tags: ['Product Management', 'Healthcare Tech', 'React'],
  },
]

/* Logo badge size and left offset for the timeline */
const BADGE = 44
const GAP = 18
const LEFT_OFFSET = BADGE + GAP

const s = {
  page: { padding: '4rem 5vw 6rem', minHeight: 'calc(100vh - 65px)' },
  header: { marginBottom: '3.5rem', textAlign: 'center' },
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

  section: {
    maxWidth: '680px',
    margin: '0 auto',
    marginBottom: '4.5rem',
  },
  sectionHeading: {
    fontSize: '11px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    fontWeight: 700,
    marginBottom: '2rem',
    paddingBottom: '0.75rem',
    borderBottom: '2px solid var(--accent-light)',
    display: 'block',
    textAlign: 'center',
  },

  /* Timeline shell — the vertical line runs at x = BADGE/2 */
  timeline: {
    position: 'relative',
    paddingLeft: LEFT_OFFSET + 'px',
  },
  timelineLine: {
    position: 'absolute',
    left: Math.floor(BADGE / 2) + 'px',
    top: BADGE / 2 + 'px',
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(to bottom, var(--border-accent) 0%, var(--border) 100%)',
    zIndex: 0,
  },

  /* Individual entry */
  item: {
    position: 'relative',
    marginBottom: '2.5rem',
  },
  logoBadge: (bg) => ({
    position: 'absolute',
    left: -LEFT_OFFSET + 'px',
    top: 0,
    width: BADGE + 'px',
    height: BADGE + 'px',
    borderRadius: '12px',
    background: bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 1,
    boxShadow: '0 2px 8px rgba(0,0,0,0.14)',
    flexShrink: 0,
  }),
  logoBadgeText: (color) => ({
    fontSize: '12px',
    fontWeight: 700,
    fontFamily: 'var(--font-sans)',
    letterSpacing: '0.01em',
    color: color,
  }),
  logoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  itemHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    flexWrap: 'wrap',
    minHeight: BADGE + 'px',
    paddingTop: '8px',
    marginBottom: '0.15rem',
  },
  company: {
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--text)',
  },
  dates: {
    fontSize: '12px',
    color: 'var(--accent)',
    fontWeight: 600,
    background: 'var(--accent-light)',
    padding: '2px 10px',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid var(--border-accent)',
    whiteSpace: 'nowrap',
  },
  meta: {
    fontSize: '13px',
    color: 'var(--text-light)',
    marginBottom: '0.75rem',
  },
  note: {
    fontSize: '13px',
    fontStyle: 'italic',
    color: 'var(--accent-soft)',
    marginBottom: '0.5rem',
  },
  bullets: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    marginBottom: '0.75rem',
  },
  bullet: {
    fontSize: '13.5px',
    lineHeight: 1.75,
    color: 'var(--text-muted)',
    paddingLeft: '1.1rem',
    position: 'relative',
    marginBottom: '0.2rem',
  },
  bulletDot: {
    position: 'absolute',
    left: 0,
    top: '9px',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    background: 'var(--accent)',
    opacity: 0.5,
  },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '0.35rem' },
  tag: {
    fontSize: '11px',
    padding: '3px 10px',
    background: 'rgba(26,23,20,0.05)',
    borderRadius: 'var(--radius-pill)',
    color: 'var(--text-light)',
    fontWeight: 500,
  },
}

function TimelineItem({ item }) {
  return (
    <div style={s.item}>
      <div style={s.logoBadge(item.logo.bg)}>
        {item.logo.img
          ? <img src={item.logo.img} alt={item.company} style={s.logoImg} />
          : <span style={s.logoBadgeText(item.logo.color)}>{item.logo.text}</span>
        }
      </div>
      <div style={s.itemHeader}>
        <span style={s.company}>{item.company}</span>
        <span style={s.dates}>{item.dates}</span>
      </div>
      <p style={s.meta}>{item.role} &middot; {item.location}</p>
      {item.note && <p style={s.note}>{item.note}</p>}
      {item.bullets.length > 0 && (
        <ul style={s.bullets}>
          {item.bullets.map((b, i) => (
            <li key={i} style={s.bullet}>
              <span style={s.bulletDot} />
              {b}
            </li>
          ))}
        </ul>
      )}
      {item.tags.length > 0 && (
        <div style={s.tags}>
          {item.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <div style={s.page}>
      <div style={s.header}>
        <h2 style={s.title}>
          Where I've <em style={s.titleAccent}>been</em>
        </h2>
        <p style={s.sub}>Internships, research, and the teams I've helped build.</p>
      </div>

      <div style={s.section}>
        <span style={s.sectionHeading}>Work Experience</span>
        <div style={s.timeline}>
          <div style={s.timelineLine} />
          {work.map((item, i) => <TimelineItem key={i} item={item} />)}
        </div>
      </div>

      <div style={s.section}>
        <span style={s.sectionHeading}>Leadership & Activities</span>
        <div style={s.timeline}>
          <div style={s.timelineLine} />
          {leadership.map((item, i) => <TimelineItem key={i} item={item} />)}
        </div>
      </div>
    </div>
  )
}

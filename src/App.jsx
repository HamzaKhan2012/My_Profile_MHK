import './App.css'

const badges = [
  { title: 'Python Essentials 1', issuer: 'Cisco + OpenEDG Python Institute', date: '19 Apr 2026', tone: 'cyan', tag: 'PY' },
  { title: 'PCEP Certified Entry-Level Python Programmer', issuer: 'Python Institute', date: '25 Jul 2026', tone: 'copper', tag: 'PCEP' },
  { title: 'HTML Essentials', issuer: 'Cisco + JS Institute', date: '07 Aug 2026', tone: 'orange', tag: 'HTML' },
  { title: 'CSS Essentials', issuer: 'Cisco + JS Institute', date: '18 Aug 2026', tone: 'blue', tag: 'CSS' },
  { title: 'Computer Hardware Basics', issuer: 'Cisco', date: '24 Aug 2026', tone: 'violet', tag: 'HW' },
  { title: 'Networking Basics', issuer: 'Cisco', date: '05 Sep 2026', tone: 'green', tag: 'NET' },
]

const skills = [
  ['Python', 'Foundations + PCEP', '01'], ['HTML / CSS', 'Responsive web basics', '02'], ['SQL', 'Learning next', '03'],
  ['Networking', 'Packet Tracer practice', '04'], ['Data science', 'Curious, building', '05'],
]

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main>
      <nav className="topbar"><a className="brand" href="#top">MK<span>.</span></a><div className="nav-links"><button onClick={() => scrollTo('badges')}>Badges</button><button onClick={() => scrollTo('skills')}>Skills</button><button onClick={() => scrollTo('contact')}>Contact</button></div><span className="status"><i /> Available to learn</span></nav>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Student developer / 2026</p><h1>Muhammad Hamza<br /><em>Khan</em></h1><p className="intro">A curious builder collecting the fundamentals of code, the web, and the systems that connect it all.</p><div className="hero-actions"><button className="primary" onClick={() => scrollTo('badges')}>Explore my credentials <span>-&gt;</span></button><a className="text-link" href="mailto:mhk.2012@icloud.com">Send an email</a></div></div><div className="hero-art" aria-label="Abstract profile illustration"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="code-card"><span>01</span><code>print("hello, world")</code><b>PY</b></div><div className="monogram">MK</div><div className="art-note">learning in public<br /><strong>since 2012</strong></div></div></section>
      <section className="profile-strip"><div><span>Based in</span><strong>Pakistan</strong></div><div><span>Focus</span><strong>Code + systems</strong></div><div><span>Milestone</span><strong>6 credentials earned</strong></div><div><span>Next up</span><strong>Build something real</strong></div></section>
      <section className="section" id="badges"><div className="section-heading"><div><p className="eyebrow">01 / verified learning</p><h2>Credentials<br /><em>collected.</em></h2></div><p className="section-note">A growing archive of courses and certifications from Cisco Networking Academy, OpenEDG, and the Python Institute.</p></div><div className="badge-grid">{badges.map((badge, index) => <article className="badge" key={badge.title}><div className={`badge-mark ${badge.tone}`}><span>{badge.tag}</span><small>{String(index + 1).padStart(2, '0')}</small></div><div className="badge-info"><p className="badge-date">{badge.date}</p><h3>{badge.title}</h3><p>{badge.issuer}</p><a href="https://www.credly.com/users/muhammad-khan.68d5833d" target="_blank" rel="noreferrer">View on Credly <span>↗</span></a></div></article>)}</div></section>
      <section className="split-section" id="skills"><div className="section-heading"><div><p className="eyebrow">02 / the toolkit</p><h2>Skills in<br /><em>motion.</em></h2></div><p className="section-note">Not a finished list. A map of what is being practiced, explored, and turned into hands-on projects.</p></div><div className="skill-list">{skills.map(([name, detail, number]) => <div className="skill-row" key={name}><span>{number}</span><h3>{name}</h3><p>{detail}</p><b>+</b></div>)}</div></section>
      <section className="life-section"><div className="life-intro"><p className="eyebrow">03 / beyond the screen</p><h2>Build. Break.<br /><em>Understand.</em></h2><p>When I am not writing Python or tracing packets, I am following questions wherever they lead: new ideas, new tools, and the small details that make a system work.</p></div><div className="life-grid"><div><span>01</span><h3>Hands-on</h3><p>PC hardware, troubleshooting, and Cisco Packet Tracer labs.</p></div><div><span>02</span><h3>Curiosity</h3><p>Data science, SQL, and the stories hidden inside information.</p></div><div><span>03</span><h3>Hobbies</h3><p>Exploring technology, learning independently, and making things.</p></div></div></section>
      <footer id="contact"><div><p className="eyebrow">Let’s connect</p><h2>Say hello<span>.</span></h2></div><div className="footer-links"><a href="mailto:mhk.2012@icloud.com">mhk.2012@icloud.com <span>↗</span></a><a href="https://www.credly.com/users/muhammad-khan.68d5833d" target="_blank" rel="noreferrer">Credly profile <span>↗</span></a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub account <span>↗</span></a></div><p className="copyright">Muhammad Hamza Khan / Learning log / 2026</p></footer>
    </main>
  )
}

export default App

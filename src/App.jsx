import { useEffect, useState } from 'react'
import DinoGame from './DinoGame'
import './App.css'

const credlyBadges = [
  { title: 'Python Essentials 1', issuer: 'Cisco + OpenEDG Python Institute', date: '19 Apr 2026', tone: 'cyan', tag: 'PY', image: '/badges/python-essentials.svg' },
  { title: 'PCEP Certified Entry-Level Python Programmer', issuer: 'Python Institute', date: '25 Jul 2026', tone: 'copper', tag: 'PCEP', image: '/badges/pcep.svg' },
  { title: 'HTML Essentials', issuer: 'Cisco + JS Institute', date: '07 Aug 2026', tone: 'orange', tag: 'HTML', image: '/badges/html-essentials.svg' },
  { title: 'CSS Essentials', issuer: 'Cisco + JS Institute', date: '18 Aug 2026', tone: 'blue', tag: 'CSS', image: '/badges/css-essentials.svg' },
  { title: 'Computer Hardware Basics', issuer: 'Cisco', date: '24 Aug 2026', tone: 'violet', tag: 'HW', image: '/badges/hardware-basics.svg' },
  { title: 'Networking Basics', issuer: 'Cisco', date: '05 Sep 2026', tone: 'green', tag: 'NET', image: '/badges/networking-basics.svg' },
]

const schoolAchievements = [
  { title: 'Hands-on labs', text: 'Hardware troubleshooting, Cisco Packet Tracer work, and systems practice.' },
  { title: 'Deepening my understanding', text: 'I keep returning to the fundamentals until the logic feels clear and usable.' },
  { title: 'Learning in public', text: 'Building small projects and documenting the process while I sharpen each skill.' },
  { title: 'Future focus', text: 'Moving from foundations into more advanced web, networking, and data work.' },
]

const skillOrbit = [
  { name: 'Python', detail: 'Foundations + PCEP', symbol: 'PY' },
  { name: 'HTML / CSS', detail: 'Responsive web basics', symbol: 'HTML' },
  { name: 'SQL', detail: 'Learning next', symbol: 'SQL' },
  { name: 'Networking', detail: 'Packet Tracer practice', symbol: 'NET' },
  { name: 'Data science', detail: 'Curious, building', symbol: 'DS' },
]

function App() {
  const [selectedSkill, setSelectedSkill] = useState(skillOrbit[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.18 }
    )

    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const orbitStep = 360 / skillOrbit.length

  return (
    <main>
      <nav className="topbar">
        <a className="brand" href="#top">MK<span>.</span></a>
        <div className="nav-links">
          <button onClick={() => scrollTo('badges')}>Badges</button>
          <button onClick={() => scrollTo('skills')}>Skills</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>
        <span className="status"><i /> Available to learn</span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy scroll-reveal">
          <p className="eyebrow">Student developer / 2026</p>
          <h1>
            Muhammad Hamza
            <br />
            <em>Khan</em>
          </h1>
          <p className="intro">
            Based in the UK, I’m a curious builder collecting the fundamentals of code, the web, and the systems that connect it all.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={() => scrollTo('badges')}>
              Explore my credentials <span>-&gt;</span>
            </button>
            <a className="text-link" href="mailto:mhk.2012@icloud.com">Send an email</a>
          </div>
        </div>

        <div className="hero-art scroll-reveal" aria-label="Abstract profile illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="monogram">MK</div>
          <div className="art-note">
            learning in public
            <br />
            <strong>since 2012</strong>
          </div>
        </div>
      </section>

      <section className="profile-strip scroll-reveal">
        <div><span>Based in</span><strong>United Kingdom</strong></div>
        <div><span>Focus</span><strong>Code + systems</strong></div>
        <div><span>Milestone</span><strong>6 credentials earned</strong></div>
        <div><span>Next up</span><strong>Build something real</strong></div>
      </section>

      <section className="section" id="badges">
        <div className="section-heading scroll-reveal">
          <div>
            <p className="eyebrow">01 / verified learning</p>
            <h2>
              Credentials
              <br />
              <em>collected.</em>
            </h2>
          </div>
          <p className="section-note">
            A growing archive of courses and certifications from Cisco Networking Academy, OpenEDG, and the Python Institute.
          </p>
        </div>

        <div className="badge-grid">
          {credlyBadges.map((badge, index) => (
            <article className="badge scroll-reveal" key={badge.title}>
              <div className={`badge-mark ${badge.tone}`}>
                <img src={badge.image} alt={badge.title} />
                <span>{badge.tag}</span>
                <small>{String(index + 1).padStart(2, '0')}</small>
              </div>
              <div className="badge-info">
                <p className="badge-date">{badge.date}</p>
                <h3>{badge.title}</h3>
                <p>{badge.issuer}</p>
                <a href="https://www.credly.com/users/muhammad-khan.68d5833d" target="_blank" rel="noreferrer">
                  View on Credly <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="skills">
        <div className="skill-heading scroll-reveal">
          <p className="eyebrow">02 / the toolkit</p>
          <h2>
            Skills in
            <br />
            <em>motion.</em>
          </h2>
          <p className="section-note">
            Not a finished list. A map of what is being practiced, explored, and turned into hands-on projects.
          </p>
        </div>

        <div className="skill-showcase scroll-reveal">
          <div className="skills-orbit" aria-label="Skill orbit">
            {skillOrbit.map((skill, index) => (
              <button
                key={skill.name}
                type="button"
                className={`orbit-skill ${selectedSkill.name === skill.name ? 'is-selected' : ''}`}
                style={{ '--angle': `${index * orbitStep}deg`, '--orbit-radius': '220px' }}
                onClick={() => setSelectedSkill(skill)}
              >
                <span className="skill-label">{skill.symbol}</span>
              </button>
            ))}

            <div className="skill-center">
              <div>
                <p>Current</p>
                <h3>{selectedSkill.name}</h3>
                <small>{selectedSkill.detail}</small>
              </div>
            </div>
          </div>

          <div className="skill-course-panel">
            <h4>{selectedSkill.name}</h4>
            <ul>
              <li>Core concepts are being practiced through small technical builds and guided exercises.</li>
              <li>{selectedSkill.detail}</li>
              <li>Each topic is treated as a live area of study, not a static checklist.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="life-section">
        <div className="life-intro scroll-reveal">
          <p className="eyebrow">03 / beyond the screen</p>
          <h2>
            Build. Break.
            <br />
            <em>Understand.</em>
          </h2>
          <p>
            When I am not writing Python or tracing packets, I am following questions wherever they lead: new ideas, new tools, and the small details that make a system work.
          </p>
        </div>

        <div className="life-grid scroll-reveal">
          {schoolAchievements.map((item) => (
            <div key={item.title}>
              <span>0{schoolAchievements.indexOf(item) + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <DinoGame />

      <footer id="contact" className="scroll-reveal">
        <div>
          <p className="eyebrow">Let’s connect</p>
          <h2>
            Say hello<span>.</span>
          </h2>
        </div>

        <div className="footer-links">
          <a href="mailto:mhk.2012@icloud.com">mhk.2012@icloud.com <span>↗</span></a>
          <a href="https://www.credly.com/users/muhammad-khan.68d5833d" target="_blank" rel="noreferrer">Credly profile <span>↗</span></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub account <span>↗</span></a>
        </div>

        <p className="copyright">Muhammad Hamza Khan / Learning log / 2026</p>
      </footer>
    </main>
  )
}

export default App

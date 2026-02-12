import { cv } from '../data/cvData'
import { Section } from '../components/Section'

export default function App() {
  return (
    <div className="page">
      <main id="content" className="content layout">
        <aside className="sidebar">
          <div className="photoWrap">
            <img className="photo" src={cv.photo} alt={`${cv.name} headshot`} />
          </div>
          <div className="sideBlock">
            <div className="name">{cv.name}</div>
            <div className="headline">{cv.headline}</div>
            <div className="location">{cv.location}</div>
          </div>
          <div className="sideBlock">
            <a className="sideLink" href={`mailto:${cv.email}`}>
              {cv.email}
            </a>
            {cv.links.map((link) => (
              <a
                key={link.label}
                className="sideLink"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>

        <section className="cvColumn">
          <header className="cvHeader">
            <h1 className="cvTitle">Curriculum Vitae</h1>
            <p className="cvSummary">{cv.summary}</p>
          </header>

          {cv.sections.map((section) => (
            <Section
              key={section.title}
              id={section.title.toLowerCase()}
              title={section.title}
            >
              <div className="stack">
                {section.items.map((item) => (
                  <article key={item.title} className="cvItem">
                    <div className="cvItemTitle">{item.title}</div>
                    <div className="cvItemMeta">{item.meta}</div>
                    {item.body.length ? (
                      <ul className="bullets">
                        {item.body.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </Section>
          ))}

          <footer className="footer">
            <span>Last updated {cv.lastUpdated}</span>
          </footer>
        </section>
      </main>
    </div>
  )
}

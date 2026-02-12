import { cv } from '../data/cvData'
import { Section } from '../components/Section'

export default function App() {
  const toId = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

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
            <div className="location">{cv.address}</div>
          </div>
          <div className="sideBlock">
            {cv.contacts.map((contact) => (
              <a key={contact.label} className="sideLink" href={contact.href}>
                {contact.value}
              </a>
            ))}
            <a className="sideLink" href={cv.website} target="_blank" rel="noreferrer">
              {cv.website.replace('https://', '')}
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
              id={toId(section.title)}
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

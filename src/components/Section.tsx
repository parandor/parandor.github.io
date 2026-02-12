import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <h2 className="sectionTitle">{title}</h2>
      <div className="sectionBody">{children}</div>
    </section>
  )
}


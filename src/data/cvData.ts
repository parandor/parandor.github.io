export const cv = {
  name: 'Paran',
  headline: 'Software Developer',
  location: 'United States',
  email: 'you@example.com',
  photo: '/profile.jpg',
  lastUpdated: '2026-02-12',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle/' },
    { label: 'GitHub', href: 'https://github.com/paran' },
    { label: 'Project', href: 'https://github.com/paran/your-project' },
  ],
  summary:
    'One to two sentences about what you build and the kind of roles you are seeking.',
  sections: [
    {
      title: 'Experience',
      items: [
        {
          title: 'Role Title',
          meta: 'Company · City, ST · 2023 — Present',
          body: [
            'Impact-focused bullet describing what you built and the outcome.',
            'Another bullet highlighting scope, scale, or collaboration.',
          ],
        },
      ],
    },
    {
      title: 'Projects',
      items: [
        {
          title: 'Project Name',
          meta: 'Tech stack · Year',
          body: ['Short description of the project and its impact.'],
        },
      ],
    },
    {
      title: 'Skills',
      items: [
        {
          title: 'Frontend',
          meta: 'React, TypeScript, HTML, CSS',
          body: [],
        },
        {
          title: 'Backend',
          meta: 'Node.js, REST, SQL',
          body: [],
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          title: 'School Name',
          meta: 'Degree · 2018 — 2022',
          body: [],
        },
      ],
    },
  ],
} as const

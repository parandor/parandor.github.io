export const cv = {
  name: 'Peter Arandorenko',
  headline: 'Generative AI, Solutions Architecture, Robotics, AMR, CV, Innovation',
  location: 'Mississauga, Ontario, Canada',
  address: 'Mississauga, Ontario, Canada',
  email: 'parandorenko@gmail.com',
  photo: '/profile.jpg',
  lastUpdated: '2026-02-12',
  contacts: [
    { label: 'Email', value: 'parandorenko@gmail.com', href: 'mailto:parandorenko@gmail.com' },
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/peter-arandorenko-b4b77a21' },
    { label: 'GitHub Project', href: 'https://github.com/parandor' },
    { label: 'Portfolio', href: 'https://bold.pro/my/peter-arandorenko/309r' },
  ],
  summary:
    'Dedicated technical leader and solutions architect with 10+ years of hands-on experience in health, warehousing, and retail. Bringing innovative ideas to life via software engineering, robotics automation, and leadership. Seeking solutions architect, technical lead, or software engineering roles.',
  sections: [
    {
      title: 'Work Experience',
      items: [
        {
          title: 'Principal Software Applications Engineer - Generative AI',
          meta: 'TELUS Health | TELUS Sante - Toronto, ON - Sept 2024 - Present',
          body: [
            'Led AI integration across GCP, Azure, and Palantir to deliver roadmap capabilities, insights, and cost reduction for internal and external customers.',
            'Delivered PensionIQ (pension AI copilot) in Palantir for hundreds of clients, saving ~$225K in headcount per 200 clients per year and improving adversarial tests by 80%.',
            {
              text: 'Led end-to-end delivery of the ArielDB copilot integrating SharePoint TDDs and Azure DevOps artifacts into 8 custom indexes; enabled Q&A over ~2,000 TDDs and ~600K ADO content items.',
              sub: [
                'Owned frontend/backend, AKS deployment, and weekly refresh pipeline with manual data validation; saved ~$300K/year via LLM engineering (semantic kernel, embeddings, hybrid search, vector DBs).',
              ],
            },
            {
              text: 'Delivered CIR (Critical Incident Report Generation) app on GCP, saving ~$400K/year; handled restricted content using GCP SDP DLP deidentification and secure workflows.',
              sub: [
                'Deployed and managed 4 environments (dev/qa/stg/prod) using DevSecOps best practices, with infrastructure defined in a separate repo and deployed via Terraform.',
                'Provisioned GCP infrastructure/services end-to-end; built frontend/backend and DLP de-id/re-id pipeline.',
                'Built a 30+ page notes summarizer with two templates and PDF layout report generation.',
              ],
            },
            'Built and optimized RAG and function-calling LLM apps using GCP, Azure Foundry, Palantir Foundry & AIP, Python/TS, Git/Linux, and LLM evaluation.',
            'Tech stack: GCP, Azure, Palantir Foundry (AIP), Python, TypeScript, Node.js, React, AKS, Terraform, Semantic Kernel, vector DBs, hybrid search, LLM evaluation.',
          ],
        },
        {
          title: 'Technical Lead, Senior Robotics Software Engineer',
          meta: 'Zebra Technologies - Mississauga, ON - Nov 2021 - Nov 2023',
          body: [
            'Led team of 3 to deliver data collection configuration cloud service and APIs for 100s of AMRs.',
            'Reduced network latency and increased system reliability by 80%.',
            'Established agile best practices and coached a high-performance scrum team of 7.',
            'Designed ETL process for ML object detection and improved navigation by 15%.',
            'Integrated observability and tracing, reducing issue ID time by 20x.',
          ],
        },
        {
          title: 'Senior Computer Vision Software Developer',
          meta: 'Zebra Technologies - Mississauga, ON - Jan 2019 - Nov 2021',
          body: [
            'Developed data collection ETL solution for GCP and reduced issue resolution time by 30%.',
            'Improved obstacle mapping accuracy by 25% with obstacle tracking integration.',
            'Optimized mapping performance to meet 15Hz spec.',
            'Integrated simulation test framework in CI/CD for non-regression, improving mapping and tracking by 60%.',
          ],
        },
        {
          title: 'Senior Software Engineer',
          meta: 'Zebra Technologies - Mississauga, ON - Jan 2017 - Jan 2019',
          body: [
            'Created obstacle detection and mapping for AMRs, improving customer traction by 200%.',
            'Delivered calibration and accurate obstacle detections ensuring 99.9% reliability.',
            'Built distributed IPC service for frame of reference transformations.',
          ],
        },
        {
          title: 'Research Engineer, Engineering Product Innovation',
          meta: 'Zebra Technologies - Mississauga, ON - Oct 2014 - Dec 2016',
          body: [
            'Developed WMS-integrated, multi-modal Android apps for wearable devices, reducing pick times by up to 20%.',
            'Focused on enhancing product portfolio distinctiveness within innovation group.',
          ],
        },
        {
          title: 'Embedded Applications Developer',
          meta: 'Zebra Technologies - Mississauga, ON - Jan 2013 - Oct 2014',
          body: [
            'Created palletizing HUD solutions, reducing pallet packing time by 15%.',
            'Built hands-free applications for wearable devices, improving pick time by 25%.',
          ],
        },
        {
          title: 'Embedded Software Developer',
          meta: 'Zebra Technologies - Mississauga, ON - Sept 2010 - Jan 2013',
          body: [
            'Integrated cutting-edge tech into warehousing products, improving UX and productivity by 50%.',
            'Delivered firmware solutions for barcode scanner products.',
          ],
        },
      ],
    },
    {
      title: 'Projects',
      items: [
        {
          title: 'Independent Project (Self-Employed)',
          meta: 'Technical Lead - 11/2023 - 03/2024',
          body: [
            'Designed and delivered a web app for an HVAC services supplier; containerized and deployed on GCP/GKE.',
            'Tech stack: Docker, Python, JavaScript, Flask, GCP, GKE, Kubernetes.',
          ],
        },
      ],
    },
    {
      title: 'Skills',
      items: [
        {
          title: 'Strengths',
          meta: 'Excellent communication and leadership skills; able to align teams in challenging times.',
          body: [
            'Integrates into ambiguous environments with minimal supervision.',
            'Communicates clear, simple solutions to high-level decision makers.',
          ],
        },
        {
          title: 'Leadership',
          meta: 'Communicating, Leading Teams, Mentoring, Facilitating',
          body: [],
        },
        {
          title: 'Project Management',
          meta: 'Critical Thinking, Integrating, Forecasting, Execution',
          body: [],
        },
        {
          title: 'AI Platforms',
          meta: 'Fuel-iX, Azure AI Foundry, Palantir Foundry (AIP)',
          body: [],
        },
        {
          title: 'AI & Robotics',
          meta: 'Machine Learning, Computer Vision, ROS, Gazebo, MATLAB',
          body: [],
        },
        {
          title: 'Data Analytics',
          meta: 'GCP, ETL, Data Mining, Visualization, Observability, Postgres',
          body: [],
        },
        {
          title: 'Web',
          meta: 'Cloud Services, Microservices, REST, gRPC, AWS, Docker, Kubernetes',
          body: [],
        },
        {
          title: 'IT Security',
          meta: 'GDPR, PII, Authentication, Encryption, Access Control',
          body: [],
        },
        {
          title: 'Languages',
          meta: 'C++ (10+ yrs), Python (8+), Terraform (3+), Go (3+), SQL (5+), MATLAB (3+)',
          body: [],
        },
        {
          title: 'Full-Stack',
          meta: 'Node.js, TypeScript, Vite, React',
          body: [],
        },
        {
          title: 'SDLC',
          meta: 'Agile, Scrum, JIRA, GitHub, Linux, Windows, CI/CD, TDD',
          body: [],
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          title: 'University of Waterloo',
          meta: 'BASc Computer Engineering, Electrical and Computer Engineering (ECE) - 2004 - 2009',
          body: [],
        },
      ],
    },
    {
      title: 'Certifications',
      items: [
        {
          title: 'Project Management Professional (PMP)',
          meta: 'PMI - 2024 - 2027',
          body: [],
        },
        {
          title: 'Foundry & AIP Builder Foundations Quiz',
          meta: 'September 11, 2024',
          body: [],
        },
      ],
    },
    {
      title: 'References',
      items: [
        {
          title: 'References Available',
          meta: '',
          body: [],
        },
      ],
    },
    {
      title: 'Patents',
      items: [
        {
          title: '5+ Patents',
          meta: '',
          body: [],
        },
      ],
    },
    {
      title: 'Languages',
      items: [
        {
          title: 'English',
          meta: 'Native or bilingual',
          body: [],
        },
        {
          title: 'Russian',
          meta: 'Native or bilingual',
          body: [],
        },
      ],
    },
  ],
} as const

import { createClient } from '@sanity/client'

const projects = [
  {
    title: "High-Density Watermain Relay",
    client: "City of Vaughan",
    municipality: "Vaughan",
    location: "Vaughan, Ontario",
    type: "Watermain Infrastructure / Underground Civil",
    slug: "vaughan-relay-2024",
    image: "/images/high-density.png",
    overview: "This project involved the relay and replacement of aging high-density watermain infrastructure within the City of Vaughan's urban service network.",
    scope: ["High-density polyethylene (HDPE) relay", "Trench excavation", "Gate valve installation"],
    challenge: "Replacing pressurized watermain in a dense urban setting."
  },
  {
    title: "TTC Track Bed Reconstruction",
    client: "Toronto Transit Commission (TTC)",
    municipality: "Downsview Sector",
    location: "Downsview Sector, Toronto",
    type: "Transit Infrastructure",
    slug: "ttc-track-2024",
    image: "/images/track bed.png",
    overview: "Part of the broader TTC track renewal and infrastructure rehabilitation program.",
    scope: ["Track bed excavation", "Sewer reconstruction", "Watermain relocation"],
    challenge: "Work within the TTC corridor demanded precise sequencing."
  },
  {
    title: "Industrial Storm Outfall",
    client: "Peel Region",
    municipality: "Peel Region",
    location: "Peel Region, Ontario",
    type: "Stormwater Infrastructure",
    slug: "peel-storm-2024",
    image: "/images/industrial-storm.png",
    overview: "Installation of a major industrial storm outfall for Peel Region.",
    scope: ["Large-diameter storm sewer pipe installation", "Deep trench excavation"],
    challenge: "Installing a large-diameter outfall in an active industrial zone."
  }
];

const services = [
  {
    slug: 'sewer-systems',
    title: 'Sewer Systems',
    shortDesc: 'Comprehensive installation and maintenance of municipal sanitary and storm sewer infrastructure.',
    fullDesc: 'GioCrete Construction specializes in the complex installation of municipal sanitary and storm sewer systems.',
    image: '/images/sewer-systems.png',
    features: ['Sanitary & Storm Main Installation', 'Manhole & Catch Basin Structures'],
    stats: [{ label: 'Installed', value: '500km+' }, { label: 'Precision', value: 'Grade Checked' }]
  },
  {
    slug: 'watermain-replacement',
    title: 'Watermain Replacement',
    shortDesc: 'Specialized expertise in water distribution systems, ensuring city-wide access to clean water.',
    fullDesc: 'As a vital component of urban infrastructure, watermain replacement requires mechanical precision.',
    image: '/images/watermain.png',
    features: ['Ductile Iron & PVC Pipe Installation', 'High-Pressure Tapping'],
    stats: [{ label: 'Reliability', value: '100% Tested' }, { label: 'Safety', value: 'Sanitized' }]
  },
  {
    slug: 'road-reconstruction',
    title: 'Road Reconstruction',
    shortDesc: 'Complete reconstruction of municipal roadways, from grading to paving and curbs.',
    fullDesc: 'GioCrete delivers complete multi-phase road reconstruction projects across the GTA.',
    image: '/images/road-reconstruction.png',
    features: ['Full-Depth Road Rehabilitation', 'Sub-base Preparation'],
    stats: [{ label: 'Finish', value: 'Municipal Grade' }, { label: 'Coordination', value: 'Multi-Phase' }]
  }
];

const client = createClient({
  projectId: '6ug8m0m3',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-04-23',
  token: 'skv6mJhhc2aQTbIeubmgzkTxMjEFcaAMM3Z0558IqrOE00UJjfRgvteIVAHJz3J57N85eqUtmI2fAYUpMkvvdxBMYykrPscYLxf1tJdUnCBUlQbR1OfC20dKr5jV5zJ5NzCDrxfFeGmzG7C892AUrpsgxY701qYt3RCq5dtUEns8eVRGnL2j',
})

async function seed() {
  console.log('🚀 Starting full seed process...')

  // 1. Projects
  console.log('📂 Seeding projects...')
  for (const project of projects) {
    await client.createOrReplace({
      _type: 'project',
      _id: `project-${project.slug}`,
      title: project.title,
      slug: { _type: 'slug', current: project.slug },
      client: project.client,
      municipality: project.municipality,
      location: project.location,
      type: project.type,
      overview: project.overview,
      scope: project.scope,
      challenge: project.challenge,
    })
  }

  // 2. Services
  console.log('🛠 Seeding services...')
  for (const service of services) {
    await client.createOrReplace({
      _type: 'service',
      _id: `service-${service.slug}`,
      title: service.title,
      slug: { _type: 'slug', current: service.slug },
      shortDesc: service.shortDesc,
      fullDesc: service.fullDesc,
      features: service.features,
      stats: service.stats,
    })
  }

  // 3. Home Page
  console.log('🏠 Seeding home page...')
  await client.createOrReplace({
    _type: 'home',
    _id: 'home',
    heroBadge: 'Established 2007',
    heroHeadline: 'Critical Foundation. Precision Execution.',
    heroSubtext: "Toronto's premier underground civil contractors. Specializing in high-complexity sewer, watermain, and road reconstruction since 2007.",
    ctaPrimaryLabel: 'Our Operations',
    ctaSecondaryLabel: 'Union Careers',
    expertiseTitle: "Building the Backbone of the <span class='text-accent italic'>Greater Toronto Area.</span>",
    industrialSectionTitle: "Industrial <br/><span class='text-accent italic'>Operations</span>",
    industrialSectionDesc: "Precision execution in critical civil infrastructure. We handle the complexities of the GTA's underground assets.",
    industrialSectionTagline: "Founded 2007 // Unionized Crew",
    recentSectionLabel: "Gallery",
    recentSectionTitle: "Recent <br/>Operations",
    stats: [
      { value: '15+', label: 'Years of Service' },
      { value: 'GTA', label: 'Core Area' },
      { value: 'COR', label: 'Safety Certified' },
      { value: 'LOCAL', label: 'Union Crew' },
    ],
    legacyTitle: 'Precision in the Trenches.',
    legacyText: 'GioCrete Construction is a specialized civil contractor focusing on the backbone of Toronto\'s infrastructure.',
    backgroundText: 'INFRASTRUCTURE',
  })

  // 4. About Page
  console.log('📖 Seeding about page...')
  await client.createOrReplace({
    _type: 'about',
    _id: 'about',
    heroTitle: "Serving <br/>The <span class='italic text-accent'>GTA</span> <br/>Since <span class='text-accent'>'07</span>",
    heroSubtitle: "GioCrete Construction Ltd. was founded with a singular focus: to provide the highest level of expertise in Ontario's civil infrastructure sector.",
    affiliations: [
      { name: 'GTSWCA Member', desc: 'Active participants in the Sewer and Watermain associations.' },
      { name: 'ORCGA Registered', desc: 'Committed to safe excavation and infrastructure protection.' },
      { name: 'Union Local 183 & 793', desc: 'Proudly employing the city’s skilled unionized workforce.' },
      { name: 'COR Certified', desc: 'National safety standard certification for occupational health.' },
    ],
    workTitle: 'Precision in Underground Civil Operations.',
    workText1: 'Specializing in sewer, watermain, and road reconstruction, we understand that our work is the lifeblood of the community.',
    workText2: 'Our unionized workforce is trained to handle the complexities of municipal-grade civil operations.',
    team: [
      { role: 'Operations Manager', name: 'Site lead' },
      { role: 'Site Supervisor', name: 'Field Lead' },
      { role: 'H&S Coordinator', name: 'Safety Lead' },
      { role: 'Project Lead', name: 'Technical Lead' }
    ]
  })

  // 5. Safety Page
  console.log('🛡 Seeding safety page...')
  await client.createOrReplace({
    _type: 'safety',
    _id: 'safety',
    title: 'Zero Compromise',
    subtitle: 'At GioCrete, safety is the foundation of everything we build.',
    metrics: [
      { value: '100%', label: 'PPE Compliance' },
      { value: 'DAILY', label: 'Tailgate Meetings' },
    ],
    protocols: [
      { title: 'Underground Safety', description: 'Specialized shoring and trench safety protocols.' },
      { title: 'Mechanical Safety', description: 'Weekly inspections on all heavy machinery.' },
    ]
  })

  // 6. Careers Page
  console.log('👷 Seeding careers page...')
  await client.createOrReplace({
    _type: 'careers',
    _id: 'careers',
    heroTitle: 'Building Toronto',
    heroSubtitle: 'We’re more than a contractor. We’re a unionized crew built on grit and excellence.',
    reasonsTitle: 'The GioCrete Advantage.',
    reasons: [
      { title: 'Union Protection & Benefits', desc: 'Industry-leading healthcare and pension plans.' },
      { title: 'Modern Machinery', desc: 'Operate the latest heavy civil hardware.' },
    ],
    roles: ['Labourer', 'Operator', 'Foreman'],
    ctaHeading: 'Join the Operations',
    ctaText: 'Ready to start? Send your resume to our office.',
  })

  // 7. Settings
  console.log('⚙️ Seeding settings...')
  await client.createOrReplace({
    _type: 'settings',
    _id: 'settings',
    siteName: 'GioCrete Construction',
    logoNavbar: { _type: 'image' },
    logoFooter: { _type: 'image' },
    footerDescription: "Specialized civil contractor focusing on the backbone of Toronto's infrastructure since 2007.",
    email: 'office@giocrete.com',
    phone: '+1 416 743 4100',
    address: '101 Kenhar Drive, North York, ON, M9L 1N5',
    navigation: [
      { _key: 'nav1', label: 'Overview', href: '/' },
      { _key: 'nav2', label: 'Specializations', href: '/services' },
      { _key: 'nav3', label: 'Operations', href: '/projects' },
      { _key: 'nav4', label: 'About', href: '/about' },
      { _key: 'nav5', label: 'Safety', href: '/safety' },
      { _key: 'nav6', label: 'Careers', href: '/careers' },
    ]
  })

  console.log('✅ Full seed complete!')
}

seed().catch(console.error)

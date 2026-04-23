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
    overview: "This project involved the relay and replacement of aging high-density watermain infrastructure within the City of Vaughan's urban service network. Working within tight urban corridors, Gio Crete's crew executed precision excavation and pipe installation to restore and upgrade the city's water distribution capacity — ensuring long-term service reliability for thousands of Vaughan residents.",
    scope: [
      "High-density polyethylene (HDPE) and large-diameter watermain pipe relay",
      "Trench excavation and shoring in confined urban environments",
      "Gate valve and valve chamber installation",
      "Water service connections and tie-ins",
      "Site restoration including granular backfill and road reinstatement"
    ],
    challenge: "Replacing pressurized watermain in a dense urban setting required careful coordination with the City of Vaughan's engineering team to maintain live water service to surrounding properties throughout construction, with zero tolerance for unplanned outages."
  },
  {
    title: "TTC Track Bed Reconstruction",
    client: "Toronto Transit Commission (TTC) / City of Toronto",
    municipality: "Downsview Sector",
    location: "Downsview Sector, Toronto",
    type: "Transit Infrastructure / Sewer & Track Reconstruction",
    slug: "ttc-track-2024",
    image: "/images/track bed.png",
    overview: "Undertaken in the Downsview sector of Toronto, this project was part of the broader TTC track renewal and infrastructure rehabilitation program — a City of Toronto initiative that bundles TTC track replacement, sewer relining, and road resurfacing work together to minimize disruption to communities. Gio Crete was responsible for the underground civil component, working overnight and in highly constrained conditions beneath and alongside active TTC infrastructure.",
    scope: [
      "Track bed excavation and sub-base preparation",
      "Sewer and drainage reconstruction beneath track corridors",
      "Watermain relocation and tie-ins coordinated with TTC track renewal",
      "Concrete and granular base installation",
      "Night-shift operations to minimize transit service disruption"
    ],
    challenge: "Work within the TTC corridor demanded precise sequencing, safety coordination with transit operations, and strict adherence to the TTC's construction windows — much of the heavy excavation and pipe work was carried out overnight to avoid impacting daytime transit riders."
  },
  {
    title: "Industrial Storm Outfall",
    client: "Peel Region",
    municipality: "Peel Region",
    location: "Peel Region, Ontario",
    type: "Stormwater Infrastructure / Large-Diameter Sewer Construction",
    slug: "peel-storm-2024",
    image: "/images/industrial-storm.png",
    overview: "This large-scale stormwater project involved the installation of a major industrial storm outfall for Peel Region — one of the fastest-growing municipalities in Canada, with a $17.4 billion 10-year infrastructure plan currently underway. Gio Crete executed the construction of large-diameter storm sewer infrastructure designed to manage industrial runoff and reduce flood risk in one of the region's industrial zones.",
    scope: [
      "Large-diameter storm sewer pipe installation (visible in project imagery: precast concrete culvert sections)",
      "Deep trench excavation with engineered shoring systems",
      "Outfall structure construction and tie-in to existing storm network",
      "Dewatering and groundwater management on site",
      "Site grading and restoration"
    ],
    challenge: "Installing a large-diameter outfall in an active industrial zone required extensive dewatering, heavy equipment coordination, and compliance with Peel Region's stormwater and environmental standards — all while maintaining safe access to surrounding industrial operations."
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
  console.log('Seeding projects...')
  for (const project of projects) {
    const doc = {
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
    }
    await client.createOrReplace(doc)
    console.log(`Created/Updated project: ${project.title}`)
  }

  console.log('Seeding home page...')
  const homeDoc = {
    _type: 'home',
    _id: 'home',
    heroHeadline: 'Critical Foundation. Precision Execution.',
    heroSubtext: "Toronto's premier underground civil contractors. Specializing in high-complexity sewer, watermain, and road reconstruction since 2007.",
    expertiseTitle: 'Building the Backbone of the Greater Toronto Area.',
    stats: [
      { value: '15+', label: 'Years of Service' },
      { value: 'GTA', label: 'Core Area' },
      { value: 'COR', label: 'Safety Certified' },
      { value: 'LOCAL', label: 'Union Crew' },
    ],
    legacyTitle: 'Precision in the Trenches.',
    legacyText: 'GioCrete Construction is a specialized civil contractor focusing on the backbone of Toronto\'s infrastructure. From deep-trench watermain installations to multi-phase road reconstructions, our unionized crew delivers precision where it matters most.',
  }
  await client.createOrReplace(homeDoc)
  console.log('Home page seeded.')

  console.log('Seeding safety page...')
  const safetyDoc = {
    _type: 'safety',
    _id: 'safety',
    title: 'Zero Compromise',
    subtitle: 'At GioCrete, safety is the foundation of everything we build. Our COR™ certification reflects our commitment to the highest standards of occupational excellence.',
    metrics: [
      { value: '100%', label: 'PPE Compliance' },
      { value: 'DAILY', label: 'Tailgate Meetings' },
      { value: 'OHSA', label: 'Fully Compliant' },
      { value: '0', label: 'Lost Time Injuries' }
    ],
    protocols: [
      { title: 'Underground Safety', description: 'Specialized shoring and trench safety protocols for all sewer and watermain operations.' },
      { title: 'Mechanical Safety', description: 'Weekly inspections on all heavy machinery, excavators, and utility trucks.' },
      { title: 'Personnel Training', description: 'Continuous OHSA certification and specialized training for unionized personnel.' },
      { title: 'Environmental Protection', description: 'Strict protocols for site water management and sediment control.' }
    ]
  }
  await client.createOrReplace(safetyDoc)
  console.log('Safety page seeded.')

  console.log('Seeding about page...')
  const aboutDoc = {
    _type: 'about',
    _id: 'about',
    heroTitle: "Serving The GTA Since '07",
    heroSubtitle: "GioCrete Construction Ltd. was founded with a singular focus: to provide the highest level of expertise in Ontario's civil infrastructure sector.",
    affiliations: [
      { name: 'GTSWCA Member', desc: 'Active participants in the Sewer and Watermain associations.' },
      { name: 'ORCGA Registered', desc: 'Committed to safe excavation and infrastructure protection.' },
      { name: 'Union Local 183 & 793', desc: 'Proudly employing the city’s skilled unionized workforce.' },
      { name: 'COR Certified', desc: 'National safety standard certification for occupational health.' },
    ],
    workTitle: 'Precision in Underground Civil Operations. Every pipe laid and every road paved is a commitment to the GTA’s resilience.',
    workText1: 'Specializing in sewer, watermain, and road reconstruction, we understand that our work is the lifeblood of the community. Nearly two decades later, GioCrete has become a trusted partner for municipalities across the Greater Toronto Area.',
    workText2: 'Our unionized workforce is trained to handle the complexities of municipal-grade civil operations. From deep-trench excavations to high-precision utility alignments, GioCrete brings mechanical precision to every job site.',
    team: [
      { role: 'Operations Manager', name: 'Site lead' },
      { role: 'Site Supervisor', name: 'Field Lead' },
      { role: 'H&S Coordinator', name: 'Safety Lead' },
      { role: 'Project Lead', name: 'Technical Lead' }
    ]
  }
  await client.createOrReplace(aboutDoc)
  console.log('About page seeded.')

  console.log('Seeding settings...')
  const settingsDoc = {
    _type: 'settings',
    _id: 'settings',
    siteName: 'GioCrete Construction',
    footerDescription: "Specialized civil contractor focusing on the backbone of Toronto's infrastructure since 2007.",
    email: 'office@giocrete.com',
    phone: '+1 416 743 4100',
    address: '101 Kenhar Drive, North York, ON, M9L 1N5',
    instagram: 'https://instagram.com/giocreteconstruction',
    linkedin: '#',
  }
  await client.createOrReplace(settingsDoc)
  console.log('Settings seeded.')

  console.log('Seeding careers page...')
  const careersDoc = {
    _type: 'careers',
    _id: 'careers',
    heroTitle: 'Building Toronto',
    heroSubtitle: 'We’re more than a contractor. We’re a unionized crew built on grit, excellence, and the pride of maintaining the city\'s critical infrastructure.',
    reasonsTitle: 'The GioCrete Advantage.',
    reasons: [
      { title: 'Union Protection & Benefits', desc: 'Industry-leading healthcare, pension plans, and worker protection through Local 183 and 793.' },
      { title: 'Career Growth Paths', desc: 'Clear pathways from pipe layers to site supervisors and project managers.' },
      { title: 'Modern Machinery', desc: 'Operate the latest heavy civil hardware, maintained to the highest standards.' },
      { title: 'Stability & Pride', desc: 'Secure long-term contracts on the city’s most mission-critical assets.' }
    ],
    roles: ['Labourer', 'Operator', 'Foreman', 'Project Manager'],
    ctaHeading: 'Join the <br/><span class="italic text-accent">Operations</span>',
    ctaText: 'Ready to start? Send your resume and certifications directly to our office.',
  }
  await client.createOrReplace(careersDoc)
  console.log('Careers page seeded.')
}

seed().catch(console.error)

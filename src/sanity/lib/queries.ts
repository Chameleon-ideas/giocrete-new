import groq from 'groq'

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  client,
  municipality,
  location,
  type,
  "image": image.asset->url,
  overview,
  scope,
  challenge
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  client,
  municipality,
  location,
  type,
  "image": image.asset->url,
  overview,
  scope,
  challenge
}`

export const servicesQuery = groq`*[_type == "service"] | order(_createdAt asc) {
  title,
  "slug": slug.current,
  "image": image.asset->url,
  shortDesc,
  fullDesc,
  features,
  stats
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  "image": image.asset->url,
  shortDesc,
  fullDesc,
  features,
  stats
}`

export const homeQuery = groq`*[_type == "home"][0] {
  heroBadge,
  heroHeadline,
  heroSubtext,
  ctaPrimaryLabel,
  ctaSecondaryLabel,
  expertiseTitle,
  industrialSectionTitle,
  industrialSectionDesc,
  industrialSectionTagline,
  recentSectionLabel,
  recentSectionTitle,
  stats,
  legacyTitle,
  legacyText,
  "legacyImage": legacyImage.asset->url,
  backgroundText
}`

export const safetyQuery = groq`*[_type == "safety"][0] {
  title,
  subtitle,
  metrics,
  protocols
}`

export const aboutQuery = groq`*[_type == "about"][0] {
  heroTitle,
  heroSubtitle,
  "heroImage": heroImage.asset->url,
  affiliations,
  workTitle,
  workText1,
  workText2,
  "workImage": workImage.asset->url,
  team
}`

export const settingsQuery = groq`*[_type == "settings"][0] {
  siteName,
  "logoNavbar": logoNavbar.asset->url,
  "logoFooter": logoFooter.asset->url,
  footerDescription,
  email,
  phone,
  address,
  instagram,
  linkedin,
  navigation
}`

export const careersQuery = groq`*[_type == "careers"][0] {
  heroTitle,
  heroSubtitle,
  reasonsTitle,
  reasons,
  roles,
  ctaHeading,
  ctaText
}`

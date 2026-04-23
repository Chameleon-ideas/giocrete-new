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

export const homeQuery = groq`*[_type == "home"][0] {
  heroHeadline,
  heroSubtext,
  expertiseTitle,
  stats,
  legacyTitle,
  legacyText,
  "legacyImage": legacyImage.asset->url
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
  affiliations,
  workTitle,
  workText1,
  workText2,
  "workImage": workImage.asset->url,
  team
}`

export const settingsQuery = groq`*[_type == "settings"][0] {
  siteName,
  footerDescription,
  email,
  phone,
  address,
  instagram,
  linkedin
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

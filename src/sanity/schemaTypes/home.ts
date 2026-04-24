import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'expertise', title: 'Expertise / Stats' },
    { name: 'services', title: 'Services Tiles' },
    { name: 'projects', title: 'Recent Projects' },
    { name: 'legacy', title: 'Legacy Callout' },
  ],
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      group: 'hero',
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'expertiseTitle',
      title: 'Expertise Section Title',
      type: 'string',
      group: 'expertise',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      group: 'expertise',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value (e.g. 15+)' },
            { name: 'label', type: 'string', title: 'Label (e.g. Years of Service)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'industrialSectionTitle',
      title: 'Services Section Title',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'industrialSectionDesc',
      title: 'Services Section Description',
      type: 'text',
      group: 'services',
    }),
    defineField({
      name: 'industrialSectionTagline',
      title: 'Services Section Tagline',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesTileImage',
      title: 'Services Tile Image',
      type: 'image',
      options: { hotspot: true },
      group: 'services',
    }),
    defineField({
      name: 'recentSectionLabel',
      title: 'Recent Projects — Section Label',
      type: 'string',
      group: 'projects',
    }),
    defineField({
      name: 'recentSectionTitle',
      title: 'Recent Projects — Section Title',
      type: 'string',
      group: 'projects',
    }),
    defineField({
      name: 'legacyTitle',
      title: 'Legacy Section Title',
      type: 'string',
      group: 'legacy',
    }),
    defineField({
      name: 'legacyText',
      title: 'Legacy Section Text',
      type: 'text',
      group: 'legacy',
    }),
    defineField({
      name: 'legacyImage',
      title: 'Legacy Section Image',
      type: 'image',
      options: { hotspot: true },
      group: 'legacy',
    }),
  ],
})

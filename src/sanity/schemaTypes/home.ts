import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
    }),
    defineField({
      name: 'expertiseTitle',
      title: 'Expertise Section Title',
      type: 'string',
    }),
    defineField({
      name: 'industrialSectionTitle',
      title: 'Industrial Operations Section Title',
      type: 'string',
    }),
    defineField({
      name: 'industrialSectionDesc',
      title: 'Industrial Operations Section Description',
      type: 'text',
    }),
    defineField({
      name: 'industrialSectionTagline',
      title: 'Industrial Operations Section Tagline',
      type: 'string',
    }),
    defineField({
      name: 'recentSectionLabel',
      title: 'Recent Operations Section Label',
      type: 'string',
    }),
    defineField({
      name: 'recentSectionTitle',
      title: 'Recent Operations Section Title',
      type: 'string',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string' },
            { name: 'label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'legacyTitle',
      title: 'Legacy Section Title',
      type: 'string',
    }),
    defineField({
      name: 'legacyText',
      title: 'Legacy Section Text',
      type: 'text',
    }),
    defineField({
      name: 'legacyImage',
      title: 'Legacy Section Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

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

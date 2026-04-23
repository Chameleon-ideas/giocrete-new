import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'affiliations',
      title: 'Affiliations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'desc', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'workTitle',
      title: 'Work Section Title',
      type: 'string',
    }),
    defineField({
      name: 'workText1',
      title: 'Work Section Text 1',
      type: 'text',
    }),
    defineField({
      name: 'workText2',
      title: 'Work Section Text 2',
      type: 'text',
    }),
    defineField({
      name: 'workImage',
      title: 'Work Section Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'team',
      title: 'Team/Crew',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'role', type: 'string' },
          ],
        },
      ],
    }),
  ],
})

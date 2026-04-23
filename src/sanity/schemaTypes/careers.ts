import { defineField, defineType } from 'sanity'

export const careersType = defineType({
  name: 'careers',
  title: 'Careers Page',
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
      name: 'reasonsTitle',
      title: 'Reasons Title',
      type: 'string',
    }),
    defineField({
      name: 'reasons',
      title: 'Reasons to Join',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'desc', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'roles',
      title: 'Open Roles',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    }),
  ],
})

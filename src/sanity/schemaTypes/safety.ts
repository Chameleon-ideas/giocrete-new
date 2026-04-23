import { defineField, defineType } from 'sanity'

export const safetyType = defineType({
  name: 'safety',
  title: 'Safety Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
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
      name: 'protocols',
      title: 'Work-Site Protocols',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
          ],
        },
      ],
    }),
  ],
})

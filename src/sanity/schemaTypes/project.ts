import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'client',
      type: 'string',
    }),
    defineField({
      name: 'municipality',
      type: 'string',
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'type',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'overview',
      type: 'text',
    }),
    defineField({
      name: 'scope',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'challenge',
      type: 'text',
    }),
  ],
})

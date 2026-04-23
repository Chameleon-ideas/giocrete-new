import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'GioCrete CMS',

  projectId: '6ug8m0m3',
  dataset: 'production',

  plugins: [structureTool({ structure })],

  schema: {
    types: schemaTypes,
  },
})

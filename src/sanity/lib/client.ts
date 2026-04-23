import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '6ug8m0m3',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-04-23', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_API_TOKEN, // only if you need to update data or read private datasets
})

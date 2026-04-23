import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['react', 'react-dom'],
    },
    ssr: {
      noExternal: ['react', 'react-dom'],
    },
  },
  integrations: [
    react(),
    sanity({
      projectId: '6ug8m0m3',
      dataset: 'production',
      // useCdn: true, // `false` if you want to ensure fresh data
      studioBasePath: '/studio',
    }),
  ],
});

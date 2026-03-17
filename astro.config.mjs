import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... your other config
  redirects: {
    '/admin': '/admin/',
  },
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
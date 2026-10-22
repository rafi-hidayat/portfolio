import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rafihidayat.com',
  // Emit articles/foo.html rather than articles/foo/index.html, so Vercel's
  // cleanUrls serves /articles/foo with no trailing slash, as before.
  build: { format: 'file' },
  trailingSlash: 'never',
});

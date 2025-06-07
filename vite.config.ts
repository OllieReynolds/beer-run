import { defineConfig } from 'vite';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  base: '/beer-run/',
  build: {
    outDir: 'dist'
  },
  plugins: [
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const index = resolve(__dirname, 'dist/index.html');
        const notFound = resolve(__dirname, 'dist/404.html');
        writeFileSync(notFound, readFileSync(index));
      }
    }
  ]
});

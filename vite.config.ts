import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // `vite build --mode demo` builds the playground app from index.html instead
  // of the library, so the preview script still has something to serve.
  const isDemo = mode === 'demo';

  return {
    plugins: [react()],
    build: isDemo
      ? {
          outDir: 'dist-demo',
        }
      : {
          lib: {
            entry: resolve(import.meta.dirname, 'src/index.ts'),
            formats: ['es', 'cjs'],
            fileName: (format) => `wtk-ui-react.${format === 'es' ? 'js' : 'cjs'}`,
            cssFileName: 'styles',
          },
          rollupOptions: {
            // react and every subpath, so react/jsx-runtime is not bundled in
            external: [/^react($|\/)/, /^react-dom($|\/)/],
          },
          // one stylesheet for the whole library rather than per chunk
          cssCodeSplit: false,
          // public/ belongs to the playground, not to the package
          copyPublicDir: false,
          // src is not published, so a map would point at missing sources
          sourcemap: false,
          emptyOutDir: true,
          target: 'es2023',
        },
  };
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const rootDir = import.meta.dirname || path.resolve();
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        'next/navigation': path.resolve(rootDir, 'src/shims/next-navigation.tsx'),
        'next/link': path.resolve(rootDir, 'src/shims/next-link.tsx'),
        'next/image': path.resolve(rootDir, 'src/shims/next-image.tsx'),
        'next-themes': path.resolve(rootDir, 'src/shims/theme-provider.tsx'),
        '@': path.resolve(rootDir, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

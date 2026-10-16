import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        'next/navigation': path.resolve(__dirname, 'src/shims/next-navigation.tsx'),
        'next/link': path.resolve(__dirname, 'src/shims/next-link.tsx'),
        'next/image': path.resolve(__dirname, 'src/shims/next-image.tsx'),
        'next-themes': path.resolve(__dirname, 'src/shims/theme-provider.tsx'),
        '@': path.resolve(__dirname, '.'),
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

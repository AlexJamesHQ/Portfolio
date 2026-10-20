import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  const rootDir = import.meta.dirname || path.resolve();
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['**/*.{js,css,html,ico,png,svg,webp}'],
        manifest: {
          name: 'Alex James - Portfolio',
          short_name: 'AlexJames',
          description: 'Personal portfolio and creative engineering showcase of Alex James, Product Designer and Full-Stack Engineer.',
          theme_color: '#0a0a0a',
          background_color: '#0a0a0a',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/icon-192.png',
              sizes: '192x192',
              type: 'image/png',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
          runtimeCaching: [
            {
              // Catch all images, including cross-origin ones (GitHub, Dribbble)
              urlPattern: ({ request }) => request.destination === 'image' ||
                /\.(?:png|jpg|jpeg|svg|gif|webp)$/.test(request.url),
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-cache',
                expiration: {
                  maxEntries: 100, // Increased limit for all images
                  maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                },
                cacheableResponse: {
                  statuses: [0, 200], // 0 is required to cache opaque cross-origin responses
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
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
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

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
          id: '/',
          name: 'Alex James',
          short_name: 'Alex James',
          description: 'Personal creative engineering showcase of Alex James, Product Designer and Full-Stack Engineer.',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/icon-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/icon-maskable-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
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
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'images-cache-v2',
                expiration: {
                  maxEntries: 100, // Increased limit for all images
                  maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
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
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

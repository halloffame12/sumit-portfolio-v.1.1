import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(async ({ mode }) => {
    const plugins = [react(), tailwindcss()];
    if (mode === 'development') {
      const { cloudflare } = await import('@cloudflare/vite-plugin');
      plugins.push(cloudflare());
    }
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins,
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
              'vendor-motion': ['framer-motion'],
              'vendor-icons': ['lucide-react'],
            },
          },
        },
      }
    };
});
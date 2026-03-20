import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Parapente en Medellín | Bello Parapente - Vuelos desde San Félix',
          description: 'Bello Parapente ofrece vuelos en parapente sobre Medellín desde el famoso despegue de San Félix, uno de los mejores lugares para volar en Colombia. Disfruta vistas espectaculares desde $220.000 COP.',
        },
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-toast'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));

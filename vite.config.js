import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  server: {
    port: 5173,
    strictPort: true,

    // Para que Vite muestre "Network" y puedas entrar desde otros dispositivos
    host: true,

    // Para que Cloudflare quick tunnel no bloquee el host
    // (modo "rápido", sin pelearte con subdominios aleatorios)
    allowedHosts: true,

    // Evita problemas típicos de HMR por HTTPS (Cloudflare) / WebSocket
    hmr: {
      clientPort: 443,
    },
  },
});
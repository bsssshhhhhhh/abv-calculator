import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'ABV Calculator',
        background_color: '#FAE96F',
        short_name: 'ABV',
      },
      injectRegister: 'inline',
      registerType: 'autoUpdate'
    })
  ]
});

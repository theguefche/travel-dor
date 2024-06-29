import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from "path"
import { viteSingleFile } from 'vite-plugin-singlefile'


//@ts-ignore
const root = resolve(__dirname, "src")
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(root, "components"),
      "@layout": resolve(root, "layout"),
      "@assets": resolve(root, "assets"),
      "@routes": resolve(root, "routes"),
      "@pages": resolve(root, "pages"),
      "@features": resolve(root, "features"),
      "@app-store": resolve(root, "app/store.ts"),
      "@hooks": resolve(root, "hooks"),
      "@utils": resolve(root, "utils"),
      "@translation": resolve(root, "translation"),
      "@typing": resolve(root, "typing"),
      "@config": resolve(root, "config")
    }
  },
  plugins: [
    react(),
    viteSingleFile(),
    svgr({
      svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
      include: "**/*.svg",
    }),
  ],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000, 
    chunkSizeWarningLimit: 100000000,
  },

})

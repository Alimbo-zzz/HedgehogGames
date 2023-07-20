import { defineConfig } from 'vite'
import { resolve } from 'path';
import autoprefixer from 'autoprefixer'

// VARS 
export const root = resolve(__dirname, '../public');
export const outDir = resolve(__dirname, '../dist');
export const src = resolve(__dirname, '../src');


// modules
import alias from './viteAlias';
import plugins from './vitePlugins';



export default defineConfig({
  root,
  plugins,
  server: {
    port: 3030,
  },
  resolve: { alias },
  build: {
    outDir,
    minify: true,
    rollupOptions: {
      input: {
        app: resolve(root, 'index.html')
      }
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: { scss: { additionalData: `@import "@/styles/files/index.scss";` } },
    postcss: { plugins: [autoprefixer()] }
  }
})

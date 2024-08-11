import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'todo-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Todo': './src/components/Todo',
        './todoStore': './src/todoStore.js'
      },
      shared: ['react', 'react-dom', 'zustand'],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})

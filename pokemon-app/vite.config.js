import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'pokemon-app',
      filename: "remoteEntry.js",
      exposes: {
        "./PokemonList": "./src/components/PokemonList",
        "./Pokemon": "./src/atoms/Pokemon.js",
      },
      shared: ["react", "react-dom", "jotai"],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})

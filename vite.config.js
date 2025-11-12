import { defineConfig } from 'vite'

// Build config for publishing as a library
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/starstream.js', // path to your main source file
      name: 'starstream',
      fileName: (format) => `starstream.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      output: {
        globals: {
          // add any externals here if needed (none in this case)
        }
      }
    }
  }
})

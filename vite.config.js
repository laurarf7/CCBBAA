import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  // Caso você esteja usando o Vercel para deploy, a configuração do build é simples
  build: {
    outDir: 'dist',  // A pasta de saída
  },
});

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import {resolve} from 'path';

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/@/assets/css/sass/index.scss";`,
      },
    },
  },
  resolve: {
    alias: [
      // /@/xx => src/xx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xx => types/xx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
  server: {
    host: '0.0.0.0',
    open: true, // 是否自动在浏览器打开
    // 反向代理解决跨域
    proxy: {
      '/api': {
        // target: 'http://localhost:3001',
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

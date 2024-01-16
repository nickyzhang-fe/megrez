import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig({
  plugins: [vueJsx(), vueSetupExtend(), DefineOptions()],
  server: {
    host: '0.0.0.0',
    port: 7777,
    open: true,
    https: false,
  },
})

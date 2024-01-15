import DefaultTheme from 'vitepress/theme'
import { Demo } from '../vitepress'
import EmMegrez from '../../../packages/megrez'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx),
    ctx.app.use(EmMegrez)
    ctx.app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component)
    }
    ctx.app.component('Demo', Demo)
  },
}

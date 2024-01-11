import DefaultTheme from 'vitepress/theme'
import { VPDemo } from '../vitepress'
import EmMegrez from '../../../packages/megrez'
import ElementPlus from 'element-plus'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx),
    ctx.app.use(EmMegrez)
    ctx.app.use(ElementPlus)
    ctx.app.component('Demo', VPDemo)
  },
}

import DefaultTheme from 'vitepress/theme'
import { VPDemo } from '../vitepress'
import EmUI from '../../../packages/components'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx),
    ctx.app.use(EmUI)
    ctx.app.component('Demo', VPDemo)
  },
}

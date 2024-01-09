import { VPDemo } from '../vitepress'
export default {
  enhanceApp(ctx) {
    ctx.app.component('Demo', VPDemo)
  },
}

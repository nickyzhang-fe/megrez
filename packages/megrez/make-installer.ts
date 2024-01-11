/*
 * @Date: 2024-01-11 13:58:27
 * @LastEditors: 张宾宾 zhangbinbin@eastmoney.com
 * @LastEditTime: 2024-01-11 14:25:38
 * @FilePath: \megrez\packages\megrez\make-installer.ts
 * @Description: 
 */
import type { App, Plugin } from '@vue/runtime-core'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => {
      c.use(app)
    })
  }
  return {
    install,
    version: '0.0.1',
  }
}
/*
 * @Date: 2024-01-11 13:55:33
 * @LastEditors: 张宾宾 zhangbinbin@eastmoney.com
 * @LastEditTime: 2024-01-11 14:29:24
 * @FilePath: \megrez\packages\megrez\index.ts
 * @Description: 
 */
import installer from './defaults'
export * from '@megrez/components'
export * from '@megrez/constants'
export * from '@megrez/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer
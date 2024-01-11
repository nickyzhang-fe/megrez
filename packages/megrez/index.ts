import installer from './defaults'
export * from '@megrez/components'
export * from '@megrez/constants'
export * from '@megrez/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer
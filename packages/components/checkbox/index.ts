import { withInstall, withNoopInstall } from '@element-plus/utils'

import Checkbox from './src/checkbox.vue'

export const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
})
export default ElCheckbox

export * from './src/checkbox'

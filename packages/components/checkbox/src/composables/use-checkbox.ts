import type { ComponentInternalInstance } from "vue"
import { CheckboxProps } from "../checkbox"
import { useCheckboxStatus } from "./use-checkbox.status"

export const useCheckbox = (
  props: CheckboxProps, 
  slots: ComponentInternalInstance['slots']
) =>{
  const handleChange = () => {}
  const { hasOwnLabel } = useCheckboxStatus(props, slots)
  return {
    inputId: '',
    model: '',
    isChecked: true,
    isDisabled: false,
    isFocused: false,
    hasOwnLabel,
    handleChange
  }
}
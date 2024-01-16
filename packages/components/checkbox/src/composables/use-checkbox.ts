import { CheckboxProps } from "../checkbox"
export const useCheckbox = (props: CheckboxProps) =>{
  const handleChange = () => {}
  
  return {
    inputId: '',
    model: '',
    isChecked: true,
    isDisabled: false,
    isFocused: false,
    handleChange
  }
}
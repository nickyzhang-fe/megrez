import { CheckboxProps } from "../checkbox"
import { computed } from "vue"
import type { ComponentInternalInstance } from 'vue'
import { isNil } from 'lodash-es'

export const useCheckboxStatus = (
    props: CheckboxProps,
    slots: ComponentInternalInstance['slots'],
) => {
    const hasOwnLabel = computed<boolean>(() => {
        return !!slots.default || !isNil(props.label)
    })
    return {
        hasOwnLabel
    }
}
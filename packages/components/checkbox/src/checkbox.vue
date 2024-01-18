<template>
  <label>
    <span>
      <input
      :id="inputId"
      v-model="model"
      type="checkbox"
      :indeterminate="indeterminate"
      :disabled="isDisabled"
      :value="label"
      :name="name"
      :tabindex="tabindex"
      @change="handleChange"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @click.stop
      />
    </span>
    <span>
      <span v-if="hasOwnLabel">
        <slot />
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { checkboxEmits, checkboxProps } from './checkbox';
import { useCheckbox } from './composables'
import { useSlots } from 'vue'

defineOptions({
  name: 'EmCheckbox'
})

const props = defineProps(checkboxProps)
defineEmits(checkboxEmits)
console.log(props)
const slots = useSlots()

const {
  inputId,
  model,
  isChecked,
  isDisabled,
  isFocused,
  hasOwnLabel,
  handleChange
} = useCheckbox(props, slots)
console.log(isChecked, isDisabled)
</script>
<style scoped lang="scss"></style>

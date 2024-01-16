<template>
  <label>
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
  </label>
</template>

<script setup lang="ts">
import { checkboxEmits, checkboxProps } from './checkbox';
import { useCheckbox } from './composables'

defineOptions({
  name: 'EmCheckbox'
})

const props = defineProps(checkboxProps)
defineEmits(checkboxEmits)
console.log(props)

const {
  inputId,
  model,
  isChecked,
  isDisabled,
  isFocused,
  handleChange
} = useCheckbox(props)
console.log(isChecked, isDisabled)
</script>
<style scoped lang="scss"></style>

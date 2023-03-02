<script lang="ts" setup>
import { ref, watch } from 'vue'
const name = ref('megrez')
watch(name, (val) => {
  console.log(val)
})
</script>
<template>
  <div>
    {{ name }}
  </div>
</template>
<style scoped lang="scss"></style>

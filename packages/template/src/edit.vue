<template>
  <div>
    <span>count is {{ count }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
export default defineComponent({
  // eslint-disable-next-line vue/component-definition-name-casing
  name: '{{componentName}}',
  components: {},
  inheritAttrs: false,
  emits: {},
  setup(props, ctx) {
    console.log(props, ctx)
    const count = ref(0)
    watch(
      () => count.value * 2,
      (val) => {
        console.log(`count * 2 is ${val}`)
      },
    )
    onMounted(() => {
      console.log(`mounted`)
    })

    return {
      count,
    }
  },
})
</script>
<style lang="sass" scoped></style>

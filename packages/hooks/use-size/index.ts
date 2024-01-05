import { computed, inject, unref } from 'vue'
import { componentSizes } from '@megrez/constants'

import type { InjectionKey, Ref } from 'vue'
import type { ComponentSize } from '@megrez/constants'

export const useSizeProps = {
  size: {
    type: String,
    values: componentSizes,
    required: false,
  },
}

export interface SizeContext {
  size: Ref<ComponentSize>
}

export const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('size')

export const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {} as SizeContext)

  return computed<ComponentSize>(() => {
    return unref(injectedSize.size) || ''
  })
}

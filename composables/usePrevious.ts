import { ref, watch } from 'vue'

export function usePrevious<T>(value: T) {
  const previous = ref<T>()

  watch(value, (newValue) => {
    previous.value = newValue
  })

  return previous
}

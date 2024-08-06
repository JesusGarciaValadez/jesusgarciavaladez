import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Logo from '~/components/global/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})

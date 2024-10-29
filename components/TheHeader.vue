<template>
  <header
    class="pointer-events-none relative z-50 flex flex-none flex-col"
    :style="{ height: 'var(--header-height)', marginBottom: 'var(--header-mb)' }"
  >
    <div v-if="isHomePage" ref="avatarRef" class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" />
    <Container
      v-if="isHomePage"
      class="top-0 order-last -mb-3 pt-3"
      :style="{ position: 'var(--header-position)' }"
    >
      <div
        class="top-[var(--avatar-top,theme(spacing.3))] w-full"
        :style="{ position: 'var(--header-inner-position)' }"
      >
        <div class="relative">
          <AvatarContainer
            class="absolute left-0 top-3 origin-left transition-opacity"
            :style="{ opacity: 'var(--avatar-border-opacity, 0)', transform: 'var(--avatar-border-transform)' }"
          />
          <Avatar
            large
            class="block h-16 w-16 origin-left"
            :style="{ transform: 'var(--avatar-image-transform)' }"
          />
        </div>
      </div>
    </Container>
    <div
      ref="headerRef"
      class="top-0 z-10 h-16 pt-6"
      :style="{ position: 'var(--header-position)' }"
    >
      <Container
        class="top-[var(--header-top,theme(spacing.6))] w-full"
        :style="{ position: 'var(--header-inner-position)' }"
      >
        <div class="relative flex gap-4">
          <div class="flex flex-1">
            <AvatarContainer v-if="!isHomePage">
              <Avatar />
            </AvatarContainer>
          </div>
          <div class="flex flex-1 justify-end md:justify-center">
            <MobileNavigation class="pointer-events-auto md:hidden" />
            <DesktopNavigation class="pointer-events-auto hidden md:block" />
          </div>
          <div class="flex justify-end md:flex-1">
            <div class="pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div v-if="isHomePage" class="flex-none" :style="{ height: 'var(--content-offset)' }" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePathname } from 'vue-router'
import { useTheme } from 'vueuse'
import { Container } from '@/components/Container'
import AvatarContainer from '@/components/AvatarContainer.vue'
import Avatar from '@/components/Avatar.vue'
import MobileNavigation from '@/components/MobileNavigation.vue'
import DesktopNavigation from '@/components/DesktopNavigation.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const isHomePage = usePathname() === '/'
const headerRef = ref(null)
const avatarRef = ref(null)
const isInitial = ref(true)

const setProperty = (property, value) => {
  document.documentElement.style.setProperty(property, value)
}

const removeProperty = (property) => {
  document.documentElement.style.removeProperty(property)
}

const clamp = (number, a, b) => {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

const updateHeaderStyles = () => {
  if (!headerRef.value) return

  const { top, height } = headerRef.value.getBoundingClientRect()
  const scrollY = clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight)

  if (isInitial.value) {
    setProperty('--header-position', 'sticky')
  }

  setProperty('--content-offset', `${avatarRef.value?.offsetTop ?? 0}px`)

  if (isInitial.value || scrollY < avatarRef.value?.offsetTop) {
    setProperty('--header-height', `${(avatarRef.value?.offsetTop ?? 0) + height}px`)
    setProperty('--header-mb', `${-(avatarRef.value?.offsetTop ?? 0)}px`)
  } else if (top + height < -64) {
    const offset = Math.max(height, scrollY - 64)
    setProperty('--header-height', `${offset}px`)
    setProperty('--header-mb', `${height - offset}px`)
  } else if (top === 0) {
    setProperty('--header-height', `${scrollY + height}px`)
    setProperty('--header-mb', `${-scrollY}px`)
  }

  if (top === 0 && scrollY > 0 && scrollY >= avatarRef.value?.offsetTop) {
    setProperty('--header-inner-position', 'fixed')
    removeProperty('--header-top')
    removeProperty('--avatar-top')
  } else {
    removeProperty('--header-inner-position')
    setProperty('--header-top', '0px')
    setProperty('--avatar-top', '0px')
  }
}

const updateAvatarStyles = () => {
  if (!isHomePage) return

  const fromScale = 1
  const toScale = 36 / 64
  const fromX = 0
  const toX = 2 / 16

  const scrollY = (avatarRef.value?.offsetTop ?? 0) - window.scrollY

  let scale = (scrollY * (fromScale - toScale)) / (avatarRef.value?.offsetTop ?? 0) + toScale
  scale = clamp(scale, fromScale, toScale)

  let x = (scrollY * (fromX - toX)) / (avatarRef.value?.offsetTop ?? 0) + toX
  x = clamp(x, fromX, toX)

  setProperty('--avatar-image-transform', `translate3d(${x}rem, 0, 0) scale(${scale})`)

  const borderScale = 1 / (toScale / scale)
  const borderX = (-toX + x) * borderScale
  const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

  setProperty('--avatar-border-transform', borderTransform)
  setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
}

const updateStyles = () => {
  updateHeaderStyles()
  updateAvatarStyles()
  isInitial.value = false
}

onMounted(() => {
  updateStyles()
  window.addEventListener('scroll', updateStyles, { passive: true })
  window.addEventListener('resize', updateStyles)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateStyles)
  window.removeEventListener('resize', updateStyles)
})
</script>

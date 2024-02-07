<template>
  <component
    :is="layout"
  />
</template>

<script>
import Default from '@/layout/Default.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    // const router = useRouter()
    // const layout = computed(() => router.currentRoute.value.meta.layout);
    const layout = Default
    return {
      layout
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

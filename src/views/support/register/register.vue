<template>
  <div class="container register-container">
    我是第二个页面
    <button
      @click="goto"
    >
      跳到第一个页面
    </button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    const router = useRouter()
    const store = useStore()
    const goto = () => {
      router.push({
        path: '/starv3',
        query: {
          token: store.state.token,
          lang: store.state.lang
        }
      })
    }
    return {
      goto
    }
  }
}
</script>
<style lang="scss" scoped></style>

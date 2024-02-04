<template>
  <div class="container register-container">
    我是第二个页面
    <button @click="goto">跳到第一个页面</button>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const goto = () => {
      router.push({
        path: '/entry',
        query: {
          lang: 'zh'
        }
      })
    };
    return {
      goto
    };
  }
}
</script>
<style lang="scss" scoped>

</style>

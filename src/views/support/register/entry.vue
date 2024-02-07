<template>
  <div class="container">
    <div>
      <div>用户：{{ userName }}</div>
      <van-button type="primary" @click="reqData">req</van-button>
      <van-button type="success" @click="modifyAction">修改用户名</van-button>
      <van-button type="default" @click="goto">页面跳转</van-button>
    </div>
  </div>
</template>
<script>
import { getInfo } from '@/api/home'
import { useStore } from 'vuex'
import { computed, reactive, toRefs } from 'vue'
import { useRouter, useToute } from 'vue-router'

export default {
  setup() {
    let state = reactive({
      userName: ''
    })
    const store = useStore()
    const router = useRouter()
    state.userName = computed(() => store.state.user.userName)
    console.log(`userName=====${state.userName}`)

    const modifyAction = () => {
      store.commit('user/setState', { userName: '李四' })
      store.dispatch('user/getAccount')
    }

    const reqData = async () => {
      await getInfo((res) => {})
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    const goto = () => {
      router.push({
        path: '/home',
        query: {
          token: store.state.token,
          lang: store.state.lang
        }
      })
    }

    return {
      modifyAction,
      reqData,
      goto,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.button-submit {
  margin-top: 1.5rem;
}

.register-modal {
  h2 {
    font-family: Montserrat-Extra-Bold;
    font-size: 1.3rem;
    padding-top: 3rem;
  }

  p {
    font-size: var(--font-12);
  }

  .button {
    position: fixed;
    bottom: 2rem;
    left: 0;
  }
}
</style>

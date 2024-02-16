<template>
  <div class="container">
    <div>
      <div>用户：{{ userName }}</div>
      <div>当前语言：{{ currentLang }}</div>
      <van-button
        size="mini"
        type="primary"
        @click="reqData"
      >
        请求接口
      </van-button>
      <van-button
        size="mini"
        type="success"
        @click="modifyLang"
      >
        修改语言
      </van-button>
      <van-button
        size="mini"
        type="success"
        @click="modifyAction"
      >
        修改用户名
      </van-button>
      <van-button
        size="mini"
        type="default"
        @click="goto"
      >
        页面跳转
      </van-button>
      <van-button
        size="mini"
        type="default"
        @click="link"
      >
        UI vant
      </van-button>
    </div>
  </div>
</template>
<script>
import { getInfo } from '@/api/home';
import { useStore } from 'vuex';
import { computed, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup () {
    let state = reactive({
      userName: '',
      currentLang: 'en'
    });
    const store = useStore();
    const router = useRouter();
    state.userName = computed(() => store.state.user.userName);
    state.currentLang = computed(() => store.state.lang);

    const modifyAction = () => {
      store.commit('user/setState', { userName: '李四' });
      store.dispatch('user/getAccount');
    };

    const modifyLang = () => {
      store.dispatch('saveState', { lang: 'th' });
    };

    const reqData = async () => {
      await getInfo((res) => {})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const goto = () => {
      router.push({
        path: '/starv3/home',
        query: {
          token: store.state.token,
          lang: store.state.lang
        }
      });
    };

    const link = () => {
      window.location.href = 'https://vant-ui.github.io/vant/#/zh-CN';
    };

    return {
      modifyAction,
      reqData,
      goto,
      link,
      modifyLang,
      ...toRefs(state)
    };
  }
};
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

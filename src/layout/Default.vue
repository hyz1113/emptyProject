<template>
  <div class="main-layout">
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup () {
    const info = ref({});
    return {
      info
    };
  }
});
</script>
<style>
.main-layout {
  width: 100%;
  padding-top: 56px;
}
</style>

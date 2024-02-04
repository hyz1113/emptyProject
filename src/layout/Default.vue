<template>
    <div class="main-layout">
        <div class="main-content">
            <router-view />
        </div>
    </div>
</template>
<script>
import { ref, onBeforeMount, defineComponent } from 'vue';
import { getInfo } from '@/api/home';

export default defineComponent({
    setup() {
        const info = ref({});
        onBeforeMount(async () => {
            // const { data, success } = await getInfo();
            // if (success && data) {
            //     info.value = data;
            // }
        });
        return {
            info,
        };
    },
});
</script>
<style>
.main-layout {
    width: 100%;
    padding-top: 56px;
}
</style>

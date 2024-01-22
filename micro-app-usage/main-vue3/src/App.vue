<script setup>
import { useRoute } from 'vue-router';

import CommonHeader from './components/CommonHeader.vue';
import CommonFooter from './components/CommonFooter.vue';
import MainContainer from './components/MainContainer.vue';
import { onMounted } from 'vue';

const route = useRoute();

onMounted(() => {
  // const loading = document.querySelector('#appLoading');
  // console.log('监听基座应用', loading);
});
</script>

<template>
  <el-config-provider namespace="ep">
    <CommonHeader v-if="route.name !== 'login'" />
    <MainContainer />
    <CommonFooter v-if="route.name !== 'login'" />
  </el-config-provider>
</template>

<style scoped></style>

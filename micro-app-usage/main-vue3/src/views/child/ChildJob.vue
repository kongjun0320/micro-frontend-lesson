<template>
  <div>
    <micro-app
      name="childJob"
      url="http://localhost:8080"
      baseroute="/main/childJob"
      @mounted="onMounted"
      keep-alive
    ></micro-app>
  </div>
</template>

<script setup>
// const onMounted = () => {
//   const loading = document.querySelector('#appLoading');
//   console.log('在基座应用中监听子应用元素 loading', loading);
// };
</script>

<style lang="scss" scoped></style>

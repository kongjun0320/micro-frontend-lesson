<template>
  <div>
    <micro-app
      @datachange="onDataChange"
      name="ChildHome"
      url="http://localhost:3000/childHome"
      ssr
      keep-alive
    ></micro-app>
  </div>
</template>

<script setup>
const onDataChange = (event) => {
  const { activeIndex } = event.detail.data;
  localStorage.setItem('activeIndex', activeIndex);
};
</script>

<style lang="scss" scoped></style>

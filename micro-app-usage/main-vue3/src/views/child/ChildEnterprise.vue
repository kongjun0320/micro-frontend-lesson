<template>
  <div>
    <micro-app
      :data="globalData"
      name="childEnterprise"
      url="http://localhost:3002/child/findEnterprise/"
      iframe
    ></micro-app>
  </div>
</template>

<script setup>
import microApp from '@micro-zoe/micro-app';

const globalData = microApp.getGlobalData();
</script>

<style lang="scss" scoped></style>

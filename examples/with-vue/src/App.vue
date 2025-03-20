<template>
  <view class="container">
    <image class="logo" src="https://github.com/lynx-family.png">
    </image>
    <input />
    <text class="slogan">Lynx: Unlock Native for More</text>
    <text>{{ count }}</text>
  </view>
</template>

<script lang="ts" setup>
import { ref } from '@lynx-js/vue';

let count = ref(0);
function increment() {
  count.value++;
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 16rpx;
}

.logo {
  width: 128rpx;
  height: 128rpx;
  border-radius: 64rpx;
}

.slogan {
  color: #333;
  font-weight: bold;
}
</style>

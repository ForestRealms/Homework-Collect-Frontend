<script setup>
import uservars from "@/uservars";

import MenuView from "@/components/2_UserPage/MenuView.vue";
import CalendarView from "@/components/2_UserPage/CalendarView.vue";
</script>

<template>
  <div id="user-page">
    <MenuView class="content"></MenuView>
    <router-view class="content"></router-view>
  </div>
</template>

<style scoped>
.content {
  top: 0;
  //top: 0;
  //width: 100%;
  /* 其他样式属性 */
}
</style>
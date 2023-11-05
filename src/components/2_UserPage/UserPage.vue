<script setup>
import uservars from "@/uservars";

import MenuView from "@/components/2_UserPage/MenuView.vue";
import CalendarView from "@/components/2_UserPage/CalendarView.vue";
</script>

<template>
 <div id="user-page">
   <MenuView></MenuView>
   <router-view></router-view>
 </div>
</template>

<style scoped>

</style>
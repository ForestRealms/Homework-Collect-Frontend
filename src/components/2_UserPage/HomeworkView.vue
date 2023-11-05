<script setup>
import HomeSubmitForm from "@/components/2_UserPage/HomeSubmitForm.vue";
</script>

<template>
 <div id="updown">
   <HomeSubmitForm />
 </div>
</template>

<style scoped>
.card-header {
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

#updown {
  display: inline-grid;
}
</style>
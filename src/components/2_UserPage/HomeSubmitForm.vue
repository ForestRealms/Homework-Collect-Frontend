<script setup>
  import { ref } from 'vue'
  import { reactive } from "vue";
  import uservars from "../../uservars";
  import axios from "axios";
  import settings from "@/settings";
  const value = ref('')
  // const options = [
  //   {
  //     value: '001',
  //     label: '作业1',
  //     disabled: false
  //   },
  //   {
  //     value: '002',
  //     label: '作业2',
  //     disabled: false
  //   }
  // ]
  let data = reactive({options: undefined})
  console.log(localStorage.getItem("user_id"))
  axios.post(settings.base + "getUnfinishedAssignment", {
    user_id: localStorage.getItem("user_id"),
  }).then(response => {
    data.options = response.data
  })


</script>

<template>
  <div>

    <el-form>
      <!--
        表单项目1：选择要提交的作业
      -->
      <el-form-item label="选择要提交的作业">
        <el-select v-model="value">
      <!--
        从获取到的列表里遍历作业项
      -->
          <el-option
            v-for="item in data.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </el-form-item>



      <el-form-item>
        <el-button @click="console.log(value)">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>
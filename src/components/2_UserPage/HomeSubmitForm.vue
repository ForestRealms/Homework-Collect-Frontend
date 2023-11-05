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
  let data = reactive({
    options: undefined,
    homework_info: {
      title: undefined,
      description: undefined,
      due: undefined
    }
  })

  let submit_text = ref('')
  console.log(localStorage.getItem("user_id"))
  axios.post(settings.base + "getUnfinishedAssignment", {
    user_id: localStorage.getItem("user_id"),
  }).then(response => {
    data.options = response.data
  })

  const reselect = (value) => {
    axios.post(settings.base + "getHomework", {
      id: value
    }).then(response => {
      if(response.data.code === 1){
        data.homework_info.title = response.data.title
        data.homework_info.description = response.data.description
        data.homework_info.due = response.data.due
      }else {
        console.log("错误")
      }
    })
  }


</script>

<template>
  <div>

    <el-form>
      <!--
        表单项目1：选择要提交的作业
      -->
      <el-form-item label="选择要提交的作业">
        <el-select v-model="value" @change="reselect">
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

      <el-form-item label="作业标题">
        <el-text>
          {{ data.homework_info.title}}
        </el-text>
      </el-form-item>

      <el-form-item label="作业描述">
        <el-text>
          {{ data.homework_info.description }}
        </el-text>
      </el-form-item>

      <el-form-item label="作业截止时间">
        <el-text>
          {{ data.homework_info.due }}
        </el-text>
      </el-form-item>

      <el-form-item label="提交文字内容">
        <el-input type="textarea" v-model="submit_text"></el-input>
      </el-form-item>



      <el-form-item>
        <el-button @click="console.log(value)">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>
<script setup>
  import axios from "axios";
  import router from "@/router";
  import {ElMessage} from "element-plus";
  import uservars from "@/uservars";
  const logout = () => {
    axios.post("http://127.0.0.1:8080/logout").then(response => {
      switch (response.data.code) {
        case 0:
        case 1:
        default:
          ElMessage({
            type: "success",
            grouping: true,
            message: response.data.message
          })
            localStorage.setItem("privilege", undefined)
            localStorage.setItem("username", undefined)
            // uservars.privilege = undefined;
            // uservars.username = undefined;
          router.push("/")
      }
    })
  }
  const onSelect = (index) => {
    switch (index){
      case "exit":
        logout()
            break
      case "homework_list":
        router.push("/user/homework")
            break
    }
  }
</script>

<template>
  <div id="menu">
    <el-menu @select="onSelect" default-active="homework_list">
      <el-menu-item index="homework_list">
        <el-icon><EditPen /></el-icon>
        提交作业</el-menu-item>
      <el-menu-item index="exit">
        <el-icon><ArrowLeft /></el-icon>
        退出登录</el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>

</style>
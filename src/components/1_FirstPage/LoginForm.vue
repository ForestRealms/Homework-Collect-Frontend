<script setup>
import { reactive } from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
import router from "@/router";
import uservars from "../../uservars"
import settings from "@/settings";
import {ref} from "vue";
const form = reactive({
  username: '',
  password: ''
})
const agreement = reactive({
  visible: false,
  content: ''
})
const messaging_error = (msg) => {
  ElMessage({
    message: msg,
    grouping: true,
    type: 'error'
  })
}

const messaging_success = (msg) => {
  ElMessage({
    message: msg,
    grouping: true,
    type: 'success'
  })
}

const messaging_warning = (msg) => {
  ElMessage({
    message: msg,
    grouping: true,
    type: 'warning'
  })
}

const getUserAgreement = () => {
  axios.get("http://127.0.0.1:8080/user_agreement").then(response => {
    // console.log(response.data.message)
    agreement.content = response.data.message;
  })
  // console.log(agreement_visible, agreement_content)
}

const submit = () => {
  if(form.username === "" || form.password === ""){
    messaging_warning("用户名或密码为空，请将信息填写完整")
    return;
  }
  axios.post("http://127.0.0.1:8080/login", {
    username: form.username,
    password: form.password
  }).then(response => {
    // console.log(response.data)
    switch (response.data.code) {
      case -1:
      case 0:
        messaging_error(response.data.message) // 显示服务器回传的错误信息
            break
      case 1:
        localStorage.setItem("username", form.username);
        localStorage.setItem("user_id", response.data.user_id)
        // uservars.username = form.username;
        // uservars.user_id = response.data.user_id
        if(response.data.privileged){
          /**
           * 如果判断为是特权用户，则设定uservars中的privilege字段
           * 为true，后续操作对于true将会有所处理，例如：
           *  - 进入用户界面后可以直接发出管理请求
           */
          localStorage.setItem("privilege", true)
          // if (uservars.user_id === undefined){
          //   axios.post(settings.base + "getUserId", {
          //     username: form.username
          //   }).then(r => {
          //     uservars.user_id = r.data.user_id
          //     // console.log(uservars.user_id)
          //   })
          // }
          messaging_success("【管理员】" + response.data.message)
        }else {
          messaging_success(response.data.message)
        }
          router.push("/user/homework", {
            username: form.username
          })
            break
    }
  })


}
</script>

<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" clearable placeholder="在此键入您的用户名" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" show-password clearable
        placeholder="在此输入您的密码"/>
      </el-form-item>
      <el-form-item>
        <el-text>注册或登录代表您同意</el-text>
<!--        改进-->
        <el-button link type="primary" @click="getUserAgreement(); agreement.visible = true">用户协议</el-button>
      </el-form-item>

      <el-form-item style="align-content: center">
        <el-button type="primary" plain @click="submit" size="large" >登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog v-model="agreement.visible" title="网站用户协议">
        <el-text>
          {{ agreement.content }}
        </el-text>
    </el-dialog>
  </div>
</template>

<style scoped>

</style>
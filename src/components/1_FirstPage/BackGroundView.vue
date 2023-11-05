<script setup>
  const title = "欢迎使用智能作业收集系统"
  const description_title1 = "你的智能作业管理助理"
</script>

<template>
  <div>
    <div class="title">
      {{title}}
    </div>
    <el-divider style="margin-left: 40px;" border-style="double">
      {{description_title1}}
    </el-divider>
    <div class="para">
      安全
      <el-divider direction="vertical" />
      高效
      <el-divider direction="vertical" />
      便捷
      <el-divider direction="vertical" />
      准确
    </div>
    <div class="para1">
      精准跟踪作业情况、发布作业、通知功能一应俱全
    </div>
  </div>
</template>

<style scoped>
  .para{
    margin-top: 10px;
    margin-left: 50px;
    font-size: large;
  }
  .para1{
    margin-top: 10px;
    margin-left: 50px;
    font-size: medium;
  }
</style>
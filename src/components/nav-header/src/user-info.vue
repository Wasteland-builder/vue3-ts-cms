<template>
  <el-dropdown class="userInfo">
    <span class="el-dropdown-link">
      <img src="~@/assets/img/logo.jpg" alt="" />
      <span>ExMaterial</span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="CircleCloseFilled">退出登录</el-dropdown-item>
        <el-dropdown-item divided>用户信息</el-dropdown-item>
        <el-dropdown-item>系统管理</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { CircleCloseFilled } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.userInfo {
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      margin-bottom: 6px;
    }
  }
}
</style>

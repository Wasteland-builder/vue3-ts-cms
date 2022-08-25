<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" class="fold-menu">
      <component :is="isFold ? 'fold' : 'expand'"></component>
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <div class="user-info">
        <el-row class="buttons">
          <span>
            <el-icon class="iconPage"><ChatLineRound /></el-icon>
          </span>
          <span>
            <el-icon class="iconPage"><CollectionTag /></el-icon>
          </span>
          <span>
            <span class="dot"></span>
            <el-icon class="iconPage"><Bell /></el-icon>
          </span>
        </el-row>
        <userInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref, onMounted, watch, Ref } from 'vue'
import userInfo from './user-info.vue'

const emit = defineEmits(['foldChange'])

let isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
let screenWidth = ref(0)
onMounted(() => {
  window.onresize = () => {
    screenWidth = document.body.clientWidth as unknown as Ref<number>
    if ((screenWidth as unknown as number) < 768) {
      isFold = true as unknown as Ref<boolean>
      emit('foldChange', isFold)
      console.log(isFold)
      // handleFoldClick()
    } else {
      isFold = false as unknown as Ref<boolean>
      emit('foldChange', isFold)
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    padding-top: 5px;
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    padding: 0 20px;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    .user-info {
      display: flex;
      .iconPage {
        padding: 10px;
        font-size: 22px;
      }
    }
  }
}
</style>

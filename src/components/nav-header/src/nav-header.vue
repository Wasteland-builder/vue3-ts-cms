<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" class="fold-menu">
      <component :is="isFold ? 'fold' : 'expand'"></component>
    </el-icon>
    <div class="content">
      <div class="breadcrumb">
        <em-breadcrumb :breadcrumbs="breadcrumbs"></em-breadcrumb>
      </div>
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
import { defineEmits, ref, computed, ComputedRef } from 'vue'
import EmBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import userInfo from './user-info.vue'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

const emit = defineEmits(['foldChange'])

let isFold = ref(false)
const store = useStore()
const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const route = useRoute()
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
// 响应式布局，但是有一点小问题待解决
// let screenWidth = ref(1960)
// onMounted(() => {
//   window.onresize = () => {
//     screenWidth = document.body.clientWidth as unknown as Ref<number>
//     if ((screenWidth as unknown as number) < 768) {
//       isFold = true as unknown as Ref<boolean>
//       emit('foldChange', isFold)
//       // handleFoldClick()
//     } else {
//       isFold = false as unknown as Ref<boolean>
//       emit('foldChange', isFold)
//     }
//     // console.log(screenWidth)
//   }
// })

// const handleFoldClick = () => {
//   console.log(screenWidth)
//   if ((screenWidth.value as any) >= 600) {
//     console.log(isFold)
//     isFold = !isFold
//     emit('foldChange', isFold)
//   }
// }
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

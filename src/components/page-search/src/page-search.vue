<template>
  <div class="page-search">
    <em-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="Search">搜索</el-button>
        </div>
      </template>
    </em-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EmForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    EmForm
  },
  setup(props) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
    }

    return {
      formData,
      handleResetClick
    }
  }
})
</script>

<style scoped>
.header {
  color: black;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>

<template>
  <div class="user">
    <em-form v-bind="searchFormConfig"></em-form>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EmForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    EmForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped lang="less"></style>

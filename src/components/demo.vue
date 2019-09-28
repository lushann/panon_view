<template lang="html">
  <div class="body">
    <div class="form">
          <h1 id="form-title">{{from_title}}</h1>
          <div class="form">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item>
   <el-button type="primary" @click="onSubmit">立即创建</el-button>
   <el-button>取消</el-button>
 </el-form-item>
</el-form>
          </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'demo.vue',
  data() {
    return {
      from_title: '注册'
    }
  }
}
</script>

<style lang="css" scoped>

</style>

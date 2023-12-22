<template>
  <div>
    <!-- 
      1. 如果父组件使用 v-model:
        相当于 父组件传递的 参数是 value , 监听函数是 change/input
    -->
    <select :value="value" @change="fn">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">深圳</option>
      <option value="104">广州</option>
      <option value="105">吉林</option>
    </select>
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String,
      default:'104'
    }
  },
  methods:{
    fn(e){
      this.$emit('input',e.target.value)
    }
  }

}
</script>

<style>

</style>
<template>
  <div>
    <!-- 
      v-model是双向绑定，意味着修改下拉菜单会直接修改父级接受的数据，会报错
      <select v-model="cityId" > 
    -->
    <select :value="cityId" @change="fn">
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
    cityId:{
      type:String,
      default:'103'
    }
  },
  methods:{
    fn(e){
      this.$emit('changeId',e.target.value)
    },
  }

}
</script>

<style>

</style>
<template>
  <div id="app">
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>
    <BaseCount></BaseCount>
    <BaseCount></BaseCount>
    <BaseCount></BaseCount>
    <!-- 1. 给子组件标签，通过添加属性的方式 传值 -->
    <!-- 传值后，添加监听函数 @changeTitle="handleChange"-->
    <BaseSon :title="myTitle" @changeTitle="handleChange"></BaseSon>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue';
import BaseOne from './components/BaseOne.vue';
import BaseTwo from './components/BaseTwo.vue';
import BaseSon from './components/BaseSon.vue';

export default {
  components:{
    BaseOne:BaseOne,
    BaseTwo,
    BaseCount,
    BaseSon
  },
  data(){
    return{
      myTitle:'黑马程序员'
    }
  },
  methods:{
    // 根据子传父的消息进行逻辑修改
    handleChange(newTitle){
      this.myTitle = newTitle
    },
  }
}
</script>

<style>

</style>

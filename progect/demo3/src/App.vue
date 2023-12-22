<template>
  <div id="app">
    <!-- 修改层级传参的数据 -->
    <button @click="changeDatas">修改根组件数据</button>
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
      // 简单数据类型
      myTitle:'黑马程序员',
      color:'pink',
      // 复杂数据类型
      userInfo:{
        name:'EZ',
        age:18
      },
    }
  },
  methods:{
    // 根据子传父的消息进行逻辑修改
    handleChange(newTitle){
      this.myTitle = newTitle
    },
    // 修改根组件数据，查看层级传递接收数据变化
    changeDatas(){
      this.color = 'green'
      this.userInfo.name = 'KING'
      this.userInfo.age = 31
    }
  },
  // 为子孙后代夸层级提供参数 provide
  provide(){
    return{
      // 简单数据类型(非响应式 - 层级接收后不会因为根组件修改而自动修改)
      color:this.color,
      // 复杂数据类型(响应式 - 层级接收后会因为根组件修改而自动修改)
      // *共享数据 推荐使用复杂数据类型
      userInfo:this.userInfo
    }
  }
}
</script>

<style>

</style>

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
    <BaseSon 
      :title="myTitle" 
      @changeTitle="handleChange"
    ></BaseSon>
    <!-- 
      v-model 组件简化拆分:
      1. 表单输入框：v-model = :value + @input；
      2. 表单下拉菜单：v-model = :value='' + @changed=''；
     -->
    <BaseSelect 
      :cityId="selectedId" 
      @changeId="selectId"
    ></BaseSelect>
    <!-- 
      父组件使用 v-model 的方式 :
      v-model="selectedId"
      相当于：
      :value='selectedId' @input='this.selectedId = value'
    -->
    <BaseVmodel v-model="selectedId"></BaseVmodel>
    
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue';
import BaseOne from './components/BaseOne.vue';
import BaseTwo from './components/BaseTwo.vue';
import BaseSon from './components/BaseSon.vue';
// v-model 组件简化拆分
import BaseSelect from './components/BaseSelect.vue';
// 父组件使用 v-model
import BaseVmodel from './components/BaseVmodel.vue';

export default {
  components:{
    BaseOne:BaseOne,
    BaseTwo,
    BaseCount,
    BaseSon,
    // v-model 组件简化拆分
    BaseSelect,
    BaseVmodel
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
      selectedId:'105'
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
    },
    // v-model 组件简化拆分
    selectId(value){
      this.selectedId = value
    },
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

<!-- 安装 Vetur 插件 .vue文件的代码才能高亮 -->
<!-- 1. 结构部分 -->
<template>
  <!-- Vue2 有且只能有一个根元素 -->
  <div class="app">
    <div class="box" @click="fn"></div>
  </div>
</template>

<!-- 
  2. 行为部分
    导出的是当前组件的配置项
    里面可以提供 data(特殊) methods computed watch 生命周期的8大钩子 
-->
<script>
  export default{
    methods:{
      fn(){
        alert("你点了我！！！")
      }
    },
    created(){
      console.log("渲染前执行的代码！！")
    }
  }

</script>

<!-- 
  3. 样式部分 
    (1) 让style支持less
      a. 给style加上 lang='less'
      b. 安装依赖包 less less-loader
      c. 安装插件语法 yarn add less less-loader -D
-->
<style lang="less">
  .app{
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    .box{
    width: 100px;
    height: 100px;
    background-color: red;
    }
  }
  
</style>

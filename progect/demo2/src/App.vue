<template>
  <div class="App">
    <!-- 
      头部组件 
        3.使用组件 
          快捷键 HmHeader + TAB键 => 自动补全
          如果 TAB键没有自动补全：设置cscode 设置 -> 设置 -> 搜索'trigger on tab' -> 勾选'启用后，按tab展开emmet缩写...'
    -->
    <HmHeader></HmHeader>
    
    <!-- 主体组件 -->
    <HmMain></HmMain>

    <!-- 底部组件 -->
    <HmFooter></HmFooter>

  </div>
</template>

<script>
// 1. 导入组件
import HmHeader from './components/HmHeader.vue';
import HmMain from './components/HmMain.vue';
import HmFooter from './components/HmFooter.vue';


export default {
  // 2. 局部注册
  components:{
    // 2.1注册组件： '组件名'：组件对象，组件名建议大驼峰命名
    HmHeader:HmHeader,
    // 组件名 和 组件对象 同名可以如下简写
    HmMain,
    HmFooter
  }
}
</script>

<style>
.App{
  width: 600px;
  height: 700px;
  background-color: aquamarine;
  margin: 0 auto;
  padding: 20px;
}

</style>
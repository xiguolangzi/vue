<template>
  <div class="base-two">
    我是 BaseTwo
    <button @click="clickSend">发布消息通知</button>
  </div>
</template>

<script>
// 导入事件调度中心
import Bus from '../utils/EventBus';
export default {
  methods:{
    clickSend(){
      // 3.发布消息
      // .$emit('订阅标识','发送的消息')
      Bus.$emit('sendMsg','今日天气不错！')
    },
  }
}
</script>

<style scoped>
  /* 
  1. 默认style是全局作用域
  2. scoped 控制局域作用域
*/
div{
  border: 2px solid #ff0000;
  margin: 30px;
}
</style>
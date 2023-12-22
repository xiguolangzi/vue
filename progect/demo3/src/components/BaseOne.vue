<template>
  <div class="base-one">
    我是 BaseOne
    接收的消息是：{{ msg }}
  </div>
</template>

<script>
// 导入时间调度中心
import Bus from '../utils/EventBus'
export default {
  created(){
    // 在渲染之前 进行监听Bus事件
    // 消息订阅 .$on('订阅标识'，回调函数)
    Bus.$on('sendMsg',(msg)=>{
      console.log(msg)
      this.msg = msg
    })

  },
  data(){
    return{
      msg:''
    }
  }

}
</script>

<style scoped>
/* 
  1. 默认style是全局作用域
  2. scoped 控制局域作用域
*/
  div{
    border: 3px solid #0000ff;
    margin: 30px;
  }
</style>
<template>
  <div class="bass-son">
    <!-- 3. props接受的值 渲染使用-->
    我是son组件: <span style="color: red;"><strong>{{ title }}</strong></span>
    <div>
      <button @click="changeFn">修改title</button>
    </div>
    
  </div>
</template>

<script>
export default {
  // 2. 通过props进行接受父级传过来的参数
  props:['title',],
  methods:{
    changeFn(){
    // 通过$emit('父级监听函数名','修改的值') 向父级发送消息通知
    this.$emit('changeTitle','传智教育')
    },
  }
  

}
</script>

<style>
.bass-son{
  border: 3px solid blue;
  margin: 10px;
}
</style>
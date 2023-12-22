<template>
  <div class="base-grandson">
    我是孙子组件
    <br>
    {{ color }}
    <br>
    {{ userInfo.name }}
    <br>
    {{ userInfo.age }}
  </div>
</template>

<script>
export default {
  // 夸层级接收数据
  inject:['color','userInfo']
}
</script>

<style scoped>
.base-grandson{
  border: 2px solid orangered;
  padding: 20px;
  margin: 10px;
}

</style>
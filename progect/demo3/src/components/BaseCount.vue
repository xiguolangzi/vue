<template>
  <div class="base-count">
    <button @click="count--" :disabled="count<=0"> - </button>
    <span> {{count}} </span>
    <button @click="add"> + </button>
  </div>
</template>

<script>
export default {
  // data是一个函数，保证没有组件实例，维护独立的数据
  data(){
    return{
      count:5
    }
  },
  methods:{
    add(){
      this.count++
    }
  },
}
</script>

<style>

</style>
<template>
  <div class="bass-son">
    <!-- 3. props接受的值 渲染使用-->
    我是son组件: <span style="color: red;"><strong>{{ title }}</strong></span>
    <div>
      <button @click="changeFn">修改title</button>
    </div>
    <BaseGrandSon></BaseGrandSon>
    
  </div>
</template>

<script>
import BaseGrandSon from './BaseGrandSon.vue'
export default {
  // 2. 通过props进行接受父级传过来的参数
  // props:['title',],

  // 2.1 props 数据类型校验
  // props:{
  //   title:string
  // },
  
  // 2.2 props 完整写法
  props:{
    title:{
      // a.类型判断
      type:String,
      // b.非空校验
      require:true,
      // c.默认值设置
      default:"黑马程序员",
      // d.自定义逻辑校验
      validator(value){
        console.log(value)
        //传入值value的校验逻辑，返回true通过，false不通过
        return true
      }
    }
  },
  methods:{
    changeFn(){
    // 通过$emit('父级监听函数名','修改的值') 向父级发送消息通知
    this.$emit('changeTitle','传智教育')
    },
  },
  components:{
    BaseGrandSon,
  }
  

}
</script>

<style>
.bass-son{
  border: 3px solid blue;
  margin: 10px;
}
</style>
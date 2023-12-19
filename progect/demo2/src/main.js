import Vue from 'vue'
import App from './App.vue'
// 1. 导入的代码，放在代码的顶部(规范) HmButton带不带.vue都可以
import HmButton from './components/HmButton'

// 提示环境信息(开发环境/生产环境) ， false标识不提示
Vue.config.productionTip = false

/*
  2. 组件进行全局注册
    语法：Vue.component('组件名', 组件对象)
*/
Vue.component('HmButton', HmButton)

new Vue({
  // .$mount('#app') 相当于 el:'#app',
  // el:'#app',
  // render: h => h(App),
  render: (createElement) => {
    // 基于App 创建元素结构
    return createElement(App)
  }
}).$mount('#app')

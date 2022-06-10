import Toast from './toast.vue'
const obj = {}
obj.install = function(Vue) {
    // Vue.prototype.$toast = 对象  哪个对象？
    // 1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)
        // 2.new方式，根据组件构造器，可以创建出一个组件对象
    const toast = new toastConstructor()
        //   3.将组件对象，手动挂载到某一个元素上
        // toast.$mount(document.createElement('div')):创建一个div，并挂在toast的dom树上，toast.$el对应的就是div
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}
export default obj
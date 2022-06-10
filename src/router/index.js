import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace
    // push
Router.prototype.push = function push(location, onResolve, onReject) {
        if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
        return originalPush.call(this, location).catch(err => err)
    }
    // replace
Router.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}
const routes = [{
        path: '',
        redirect: '/login'
    },
    {
        path: '/home',
        meta: {
            keepAlive: true
        },
        component: () =>
            import ('views/home/home.vue')
    },
    {
        path: '/catagory',
        component: () =>
            import ('views/Category/Category.vue')
    },
    {
        path: '/shopping',
        component: () =>
            import ('views/cart/Cart.vue')
    },
    {
        path: '/profile',
        component: () =>
            import ('views/profile/profile.vue')
    },
    {
        path: '/detail/:iid',
        component: () =>
            import ('views/detail/detail.vue')
    }, {
        path: '/login',
        component: () =>
            import ('components/common/login/login.vue')
    }
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router
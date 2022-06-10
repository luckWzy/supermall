import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carList: [] //添加变量用于保存放进来的东西
    },
    mutations: {
        addcount(state, payload) {
            payload.count++;
        },
        addToCart(state, payload) {
            payload.isSelected = true
            state.carList.push(payload)
        }
    },
    actions: {
        addGoodsCart(context, payload) {
            // for (let item of state.carList) {
            //     if (item.iid == payload.iid) {
            //         oldProduct = item
            //     }
            // }还可以如下
            return new Promise((resolve, reject) => {
                let product = context.state.carList.find(item => {
                    return item.iid === payload.iid
                })
                if (product) {
                    context.commit('addcount', product)
                    resolve('当前数量加1')
                } else {
                    payload.count = 1;
                    context.commit('addToCart', payload)
                    resolve('添加新商品')
                }
            })

        }
    },
    modules: {},
    getters: {
        cartList(state) {
            return state.carList;
        },
        cartListLength(state) {
            return state.carList.length;
        }
    }
})
<!--  -->
<template>
  <div>
    <!-- 导航 -->
    <cart-nav-bar class="cartNav">
      <div slot="center">购物车({{cartLength}})</div>
    </cart-nav-bar>
    <!-- 列表 -->
  <cart-list/>
    <!-- 结算 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import CartNavBar from 'components/common/navbar/NavBav.vue'
import cartList from 'views/cart/CartChildren/CartList.vue'
import CartBottomBar from 'views/cart/CartChildren/CartBottomBar.vue'
export default {
 name:'Cart',
 components:{
   CartNavBar,
   cartList,
   CartBottomBar
 },
 computed:{
   cartLength(){
     return this.$store.state.carList.length
   }
 }
}
</script>

<style  scoped>
.cartNav{
background: var(--color-tint);
color: #fff;
}
</style>

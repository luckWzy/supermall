<template>
  <div id="app">

    <tabbar>
    <tabbar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbarImg/profile.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbarImg/proActive.svg" />
        <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbarItem path="/catagory" activeColor="blue">
       <img slot="item-icon" src="~assets/img/tabbarImg/fenlei.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbarImg/fenleiActive.svg" />
        <div slot="item-text">分类</div>
    </tabbarItem>
    <tabbarItem path="/shopping">
       <img slot="item-icon" src="~assets/img/tabbarImg/shoping.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbarImg/shoppinActive.svg" />
        <div slot="item-text">购物车</div>
    </tabbarItem>
    <tabbarItem path="/profile" >
       <img slot="item-icon" src="~assets/img/tabbarImg/my.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbarImg/myactive.svg" />
        <div slot="item-text">我的</div>
    </tabbarItem>
    </tabbar>
  </div>
</template>
<script>
import tabbarItem from 'components/common/tobbar/tabbatItem.vue';
export default {
  name:'App',
  components:{
   tabbar:()=>import ('components/common/tobbar/tabbar.vue'),
   tabbarItem
  }
}
</script>
<style>
@import "../.././assets/css/base.css";
#tab-bar{
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  box-shadow: 0 -10px rgba(100,100,100,.1);
  z-index: 19;
 
}
.cart{
  background:darkcyan;
}
</style>

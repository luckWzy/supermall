<!--  -->
<template>
  <div id="maxd">
    <nav-bar class="home-nav"><div slot="center">购物广场</div></nav-bar>
    <tab-control  :title="['流行','新款','女装']" 
                  @tabClick="tabClick" ref="tabControl1" v-show="isLoad" class="feixed"></tab-control>
    <bscorll class="content1" ref="scorll" 
    :probe="3" @pull-up-load="true" @scorll="contentScroll"
    @pullingUp="loadMore">
      <swiper :imgList="banners" class="swip" @swiperLoad="swiperLoad"></swiper>
      <home-recommand :imgRecommad="recommmands"></home-recommand>
      <feature></feature>
      <tab-control  :title="['流行','新款','女装']" 
                  @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list> 
    </bscorll>  
    <back-top @click.native="backClick" v-show="IsShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBav.vue'
// 什么时候用这两个网格请求？当这这个组件被created时
import {gethomeMutidata,getHomeGoods} from 'network/home'
import swiper from 'components/common/swiper/Swiper.vue'
import homeRecommand from './Feature/homeRecommand.vue'
import feature from 'views/home/Feature/FeatureView.vue'
import TabControl from 'components/content/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import bscorll from 'components/content/homeScroll.vue'
import backTop from 'components/content/backTop.vue'
import {itemListenterMixin,backTopMinin} from 'common/mixin.js'
export default {
components: { 
  NavBar,
swiper,
homeRecommand,
feature,
TabControl,
GoodsList,
bscorll,
backTop
 },
name:'home',
data(){
  return {
   banners:[],
   recommmands:[],
   dKeyword:[],
   keywords:[],
   goods:{
     'pop':{page:0,list:[]},
     'new':{page:0,list:[]},
     'sell':{page:0,list:[]}
   },
   currentType:'pop',
   IsShow:false,
   tabOffsetTop:0,
   isLoad:false,
   saveY:0
  }
},
mixins:[itemListenterMixin,backTopMinin],
activated(){
      // this.$refs.scorll.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scorll.scroll.refresh()
},
deactivated(){
      this.saveY= this.$refs.scorll.getScrollY()
      // 2.取消全局事件的监听 参数（事件，函数）
      this.$bus.$off('itemImageLoad',this.homeImagListener)
},
created(){  //这里写主要逻辑，所以在methods里再封装一层
  this.gethomeMutidata();
  //第一次请求第1页的数据
  this.getHomeGoods('pop');
  this.getHomeGoods('new');
  this.getHomeGoods('sell');
   
},
mounted(){
  console.log('home mounted');
  //一旦创建好，就开始监听图片加载
  //  this.getselectYearByDistinct();//在mounted()中添加这个方法，就解决点击两次才有反应
   // 重新计算图片的高度，刷新,让$refs.scorll永远不为undefined
},
methods:{
  gethomeMutidata(){
    gethomeMutidata().then(res=>{
    this.banners = res.data.banner.list
    console.log(res+'data');
    this.recommmands = res.data.recommend.list
    // this.dKeyword = res.data.dKeyword.list
    // this.keywords = res.data.keywords.list
})
},
  getHomeGoods(type){
    const page =this.goods[type].page+1 //动态取页码
    getHomeGoods(type,page).then(res=>{
    console.log(res); 
    this.goods[type].list.push(...res.data.list)
    this.goods[type].page+=1;
    this.$refs.scorll.scroll.finishPullUp();
})
},
    tabClick(index){
    switch(index){
      case 0:
        this.currentType = 'pop'
        break
      case 1:
        this.currentType = 'new'
        break
      case 2:
        this.currentType = 'sell'
        break
    }
    this.$refs.tabControl1.currentIndex = index;
    this.$refs.tabControl2.currentIndex = index
},
  contentScroll(position){
    //  if(-position.y>1000){
    //    this.IsShow = true
    //  }else{
    //    this.IsShow = false
    //  } 简写成一句话
    this.IsShow = -position.y>1000
    this.isLoad = -position.y > this.tabOffsetTop
},
    // this.$refs.scorll.scroll.scrollTo(0,0,500)
    loadMore(){
      console.log('jiazai');
    this.getHomeGoods(this.currentType)
       // 重新计算图片的高度，刷新
    // this.$refs.scorll.scroll.refresh()
  },
  //吸顶效果：轮播图加载完后，计算tabControl的高度
swiperLoad(){
 this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
 console.log(this.$refs.tabControl2.$el.offsetTop+'swiper');
  }
}
}
</script>

<style  scoped>
#maxd{
  height: 100vh;
  position: relative;
  z-index: 9;
}
.home-nav{
  background: var(--color-tint);
  color: aliceblue;
  font-size: larger;
  /* position: fixed;在使用原生滚动时，为了让导航条不随着滚动一起滚
  top: 0;
  right: 0;
  left: 0;
  z-index: 9; */
}
/* #tab-control-item{
  position: sticky;
  top:44px;
  /* 设置sticky就必须设置top:默认为sticky，但是一旦达到top值，就会自动变成fixed*/
/* .content{
  height:calc(100%-93px) ;
  overflow: hidden;
  margin-top:44px ;
} */
.content1{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom:49px;
  left: 0;
  right: 0;
}
.feixed{
  position: relative;
  z-index: 99;
}
</style>

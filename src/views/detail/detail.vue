<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <home-scroll class="content" ref="scorll" @scorll="ItemScroll"  :probe="3" @pull-up-load="true" >
      <detail-swiper :top-images="topImages" ></detail-swiper>
      <detail-info :goods="goods"></detail-info>
      <detail-shop :shopInfo="shop"></detail-shop>
      <!-- 商品展示-->
    <detail-goods-info :goods-info="goodsInfo" @goodsInfoImgLoad="goodsInfoImgLoad"></detail-goods-info>
    <detail-params-info :goods-params="paramInfo" ref="params" ></detail-params-info> <!-- 商品参数-->
    <comment-info :comment-info="commentInfo" ref="comment" ></comment-info><!-- 商品评论-->
    <recommend-goods :goods="recommends" ref="recommend" /><!-- 商品推荐-->
   </home-scroll>
   <bottom-bar @addCart="addToCart"></bottom-bar>
  </div>
</template>

<script>
import detailNavBar from './childComponent/detailNavBar.vue'
import {getDetail,Goods,Shop,getGoodsRecommend} from 'network/detail.js'
import detailSwiper from './childComponent/detailSwiper.vue'
import detailInfo from './childComponent/detailInfo.vue'
import DetailShop from './childComponent/detailShop.vue'
import homeScroll from 'components/content/homeScroll.vue'
import detailGoodsInfo from './childComponent/detailGoodsInfo.vue'
import detailParamsInfo from './childComponent/detailParamsInfo.vue'
import commentInfo from './childComponent/commentInfo.vue'
import recommendGoods from 'components/content/goods/GoodsList.vue'
import BottomBar from './childComponent/BottomBar.vue'
import {backTopMinin} from 'common/mixin.js'
export default {
  name:'datail',
  data () {
    return {
      id:null,
      topImages:[],
      goods:{},
      shop:{},
      goodsInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopY:[],
      currentIndex:0
    }
  },
  // mixins:[backTopMinin],
  components:{
     detailNavBar,
     detailSwiper,
     detailInfo,
     DetailShop,
     homeScroll,
     detailGoodsInfo,
     detailParamsInfo,
     commentInfo,
     recommendGoods,
     BottomBar
  },
  created(){
    this.id=this.$route.params.iid
    //详情页请求数据最好封装一层
    getDetail(this.id).then(res=>{
     console.log(res)
     this.topImages = res.result.itemInfo.topImages 
     //3.获取商品信息
     this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
     
     //4.获取店铺信息
     this.shop = new Shop(res.result.shopInfo)
      // 获取商品图片信息
     this.goodsInfo = res.result.detailInfo;
      // 获取商品参数信息
     this.paramInfo = res.result.itemParams
     //获取商品评论信息
     if(res.result.rate.cRate!=0){
       this.commentInfo = res.result.rate.list[0]
     }
   })
    //请求推荐数据
    getGoodsRecommend().then(res=>{
      this.recommends = res.data.list
    })
 },
  methods:{
    goodsInfoImgLoad(){  
        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop) 
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopY.push(Number.MAX_VALUE) 
    },
    //点击标题滚动到对应位置
    titleClick(index){
     this.$refs.scorll.scroll.scrollTo(0,-this.themeTopY[index]+44,1000)
    },
    //滚动页面显示对应标题
    ItemScroll(position){
      const positionY = -position.y
        for(var i=0;i<this.themeTopY.length-1;i++){
          if( ((this.currentIndex!==i)&&positionY>=this.themeTopY[i]) &&(positionY<this.themeTopY[i+1])){
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex+1;
            
              break;
          }
        }
    },
  addToCart(){
    const product ={}
    product.iid = this.id
    product.img = this.topImages[0]
    product.title = this.goods.title
    product.desc = this.goods.desc
    product.price = this.goods.oldPrice
    // 2.将商品product加入到购物车
  //  this.$store.carList.push(product)虽然可以这么写，但是最好通过如下方式
     this.$store.dispatch("addGoodsCart",product).then(res=>{
       this.$toast.show('加入购物车成功！',2000)
     })
     alert('成功加入购物车！')
 }
}
}
</script>

<style  scoped>
#detail{
  position: relative;
  z-index: 77;
  background: #fff;
  height: 100vh;
}
.content{
    overflow: hidden;
    height: calc(100% - 44px - 49px);
}
.detail-nav{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 4;
  background: #fff;
}
</style>

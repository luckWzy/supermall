<!--  -->
<template>
  <div>
<nav-bar>
  <div slot="left" class="back" @click="backChange">
    <img src="~assets/img/back.svg" />
  </div>
  <div slot="center" class="title">
    <div v-for="(item,index) in titles" :key="item.index" 
    class="title-item" :class="{active:index===currentIndex}"
    @click="changecolr(index)">{{item}}</div>
  </div>
</nav-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBav.vue'
export default {
  data () {
    return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
    }
  },
  components:{
      navBar
  },
  methods:{
    
    changecolr(index){
  this.currentIndex=index
  this.$emit("titleClick",index)
    },
    backChange(){
      this.$router.go(-1)
    }
  }
}
</script>

<style  scoped>
.title{
    display: flex;
}
.title-item{
    flex: 1;
}
.active{
  color:red;
}
.back img{
  margin-top: 10px;
}
</style>

<!--  -->
<template>
   <div class="recommand">
       <div v-for="item in imgRecommad" :key="item.index" class="remmond-item">
           <a :href="item.link">
               <img :src="item.image" alt="">
               <div>{{item.title}}</div>
           </a>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
      imgRecommad:{
          type:Array
      }
  }
}
</script>

<style  scoped>
.recommand{
        display: flex;
        font-size: 14px;
        text-align: center;
        padding:10px 0 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        border-bottom: 8px solid #eee;
}
.remmond-item{
        flex:1
}
.remmond-item img{
    width: 64px;
    height: 64px;
    border-radius:40% ;
}
</style>

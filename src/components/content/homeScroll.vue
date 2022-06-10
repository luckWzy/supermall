<!--  -->
<template>
  <div class="wrappers" ref="wrapper">
      <div class="content" >
    <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
        scroll:null,
        mes:1
    }
  },
  props:{
    probe:{
      Type:Number,
      default:0
    },
    pullUpLoad:{
      Type:Boolean,
      default:true
    }
   
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
    probeType:this.probe,
    click:true,
    pullUpLoad:this.pullUpLoad,
    mouseWheel: true,
    oberveDOM:true
    })
    this.scroll.on('scroll',(position)=>{
            this.$emit('scorll',position)
    }),
    this.scroll.on('pullingUp',()=>{
      // 1.请求网络数据,传给首页做
      this.$emit('pullingUp')
      // 2.再一次允许上拉刷新
    })
  },
  methods:{
    refresh(){
      this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll?this.scroll.y:0
    }
  }
}
</script>

<style  scoped>
</style>

<!--  -->
<template>
  <div class="tabcontrol">
      <div  v-for="(item,index) in title" :key="item" 
      class="tabcontrol-item" :class="{active:index===currentIndex}"
      @click="change(index)">
          <span>{{item}}</span>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
        currentIndex:0
    }
  },
  props:{
      title:Array
  },
  methods:{
     change(index){
         this.currentIndex = index;
         this.$emit('tabClick',index)
     }
}
}

</script>

<style  scoped>
.tabcontrol{
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
    background: #eee;
    z-index: 99;
}
.tabcontrol-item{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.active span{
    padding: 5px;
border-bottom: 3px solid var(--color-tint);
}
</style>

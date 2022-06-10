<template>
    <div class="tab-bar-item" @click="tabitemClick">
        <div v-if="!IsActive" class="sd"><slot name="item-icon" ></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default{
    name:'tabbarItem',
    props:{
       path:String,
       activeColor:{
           type:String,
           default:'red'
       }
    },
    data(){
        return {
        }
    },
    computed:{
        IsActive(){
          return  this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
           return this.IsActive?{color:this.activeColor}:{}
        }
    },
    methods:{
        tabitemClick(){
            this.$router.push(this.path).catch(err=>err)
        }
    }
}
</script>
<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;/*移动端常用高度*/
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
</style>
<template>
  <div id="app">

  <maintabbaritem/>
      <keep-alive exclude="datail">
        <router-view></router-view>
    </keep-alive>

  </div>
</template>
<script>
import maintabbaritem from 'components/content/MainTabbatItem.vue'
export default {
  components:{
    maintabbaritem,
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>

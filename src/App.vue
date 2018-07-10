<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MFooter from 'components/footer/footer'
export default {
  name: 'App',
  components:{
     MFooter
  }
}
</script>
<style lang="less" scoped>
@base:37.5;
/*引入公共的css方法2*/
   /*@import 'common/less/common.css'  
   @import 'common/fonts/iconfont.css'*/
 
le>

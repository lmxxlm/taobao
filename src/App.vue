<template>
  <div id="app">
    <m-header ></m-header>
    <keep-alive>
        <router-view/>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from 'components/header/header'
import MFooter from 'components/footer/footer'
export default {
  name: 'App',
  components:{
     MHeader,
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

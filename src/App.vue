<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
          <router-view/>
      </keep-alive>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style lang="less">
  @import './common/less/trans.less';
  @base:37.5;
</style>

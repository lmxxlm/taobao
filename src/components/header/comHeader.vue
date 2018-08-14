<template >
  <div class="header flex_between">
     <slot name="left"></slot>
     <slot name="center"></slot>
     <slot name="right"></slot>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped lang="less">
  @import '../../common/less/bg.less';
  @base:37.5;
  .header{.line_h(40rem/@base);position:fixed;top:0;background:#F4F4F4;box-sizing:border-box;width:100%;padding:0 10rem/@base;font-size:14rem/@base;}
</style>

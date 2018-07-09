<template>
  <div class="header flex_between grad2">
  	<div class="left flex_column">
  		<i class="icon iconfont icon-sys2 com_icon"></i>
  		<span>扫一扫</span>
  	</div>
  	<div class="center flex_between">
  		<i class="icon iconfont icon-sousuo"></i>
  		<input type="text" placeholder="温柔群超仙收腰" />
  		<i class="icon iconfont icon-zhaoxiang"></i>
  	</div>
  	<div class="right flex_between">
  		<div class="redB flex_column">
  			<i class="icon iconfont icon-ai-hongbao com_icon"></i>
  			<span>分红包</span>
  		</div>
  		<div class="hym flex_column">
  			<i class="icon iconfont icon-huiyuanma com_icon"></i>
  			<span>会员码</span>
  		</div>
  	</div>
  </div>
</template>

<script type="text/esmascript-6">
  export default {
  }
</script>

<style scoped lang='less'>
    @base:37.5;
    .header{
    	position:fixed;
    	top:0;
    	width:100%;
    	box-sizing: border-box;
    	padding:4rem/@base 10rem/@base;
    	padding-top:10rem/@base;
    	z-index:10;
    	span{
    		font-size:12rem/@base;
    		margin-top:3rem/@base;
    		white-space: nowrap;
    	}
       .com_icon{font-size:20rem/@base;line-height:20rem/@base;padding:0;}/*给字体图标价格line-height;就会撑满*/
       .center{
       	  margin:0 10rem/@base;
       	  height:30rem/@base;
       	  border-radius:15rem/@base;
       	  background:rgba(255,255,255,0.3);
       	  padding:0 8px;
       	  input{
       	  	border:none;
       	    background:none; 
       	    color:#fff;
       	  }
       	  input::-webkit-input-placeholder{
       	  	color:#fff;
       	  	padding-left:10rem/@base;
       	  	font-size:14rem/@base;
       	  }
       	  .icon-zhaoxiang{font-size:16rem/@base;line-height:16rem/@base;}
       }
       .right{
           .redB{margin-right:10rem/@base;}
       }
    }
</style>
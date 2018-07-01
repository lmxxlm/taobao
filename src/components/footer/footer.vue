<template>
	<div class="footer flex_between">
		<router-link tag="div" to="/home"> <!--这里面的to路径要和main里的router路径对应-->
			<i class="icon iconfont icon-taobao home"></i>
			<span>首页</span>
		</router-link>
		<router-link tag="div" to="/wt">
			<i class="icon iconfont icon-weitao1 wt" ></i>
			<span>微淘</span>
		</router-link>
		<router-link tag="div" to="/mes">
			<i class="icon iconfont icon-xiaoxi mes" ></i>
			<span>消息</span>
		</router-link>
		<router-link tag="div" to="/goodsCar">
			<i class="icon iconfont icon-gouwuche "></i>
			<span>购物车</span>
		</router-link>
		<router-link tag="div" to='/mine'>
			<i class="icon iconfont icon-wode mine"></i>
			<span>我的</span>
		</router-link>
	</div>
</template>

<script type="text/esmascript-6">
  export default {
  }
</script>

<style scoped lang="less">
     @base:37.5;
    .footer{
    	position:fixed;
    	bottom:-1px;
    	width:100%;
    	z-index:10;
        background:#EAECF8;
        color:#555;
        padding-top:10px;
        padding-bottom:5px;
    	div{
    		display:flex;
    		flex-direction:column;
        	justify-content:space-between;
        	align-items:center;
        	width:100%;
        	text-align:center;
        	i{font-size:25rem/@base;line-height:25rem/@base;padding:0;margin:0;}
        	span{font-size:12rem/@base;margin-top:3rem/@base;}
    	}
    	.router-link-active{color:#FE6205;}
    }
</style>
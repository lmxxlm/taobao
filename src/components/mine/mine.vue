<template>
	<div class="mine">
		<mine-head></mine-head>
		<mine-content></mine-content>
		<div class="wrap">
			<div class="block"></div>
		</div>
		<m-footer></m-footer>
	</div>
</template>

<script type="text/esmascript-6">
  import MineHead from 'components/mine/head'	 //头部
  import MineContent from 'components/mine/content'	//内容部分
	import MFooter from 'components/footer/footer'

  export default {
  	data(){
  		return {
  			headData:{},
  		}
  	},
   components:{
   	   MineHead,
   	   MineContent,
			 MFooter
   }
  }
</script>
<style scoped lang="less">
	.mine{
		position:fixed;
		width:100%;
		height:100%;
		background:#F2F2F2 !important;
	}
</style>

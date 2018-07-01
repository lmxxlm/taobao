<template>
	<div class="tab clearfix">
		<div class="block flex_column" v-for="item in tabs" :key="item.class">
			<img :src="item.bgImg" alt="" :class="item.class" />
			<span>{{item.name}}</span>
		</div>
	</div>
</template>

<script type="text/esmascript-6">
	export default{
		data(){
            return{
            	tabs:[
            	  {class:'tm',bgImg:require('common/image/tabs/tm.jpg'),name:'天猫'},
            	  {class:'jhs',bgImg:require('common/image/tabs/jhs.jpg'),name:'聚划算'},
            	  {class:'tmgj',bgImg:require('common/image/tabs/tmgj.jpg'),name:'天猫国际'},
            	  {class:'wm',bgImg:require('common/image/tabs/wm.jpg'),name:'外卖'},
            	  {class:'tmcs',bgImg:require('common/image/tabs/tmcs.jpg'),name:'天猫超市'},
            	  {class:'czzx',bgImg:require('common/image/tabs/czzx.jpg'),name:'充值中心'},
            	  {class:'fzlx',bgImg:require('common/image/tabs/fzlx.jpg'),name:'飞猪旅行'},
            	  {class:'ljb',bgImg:require('common/image/tabs/ljb.jpg'),name:'领金币'},
            	  {class:'pm',bgImg:require('common/image/tabs/pm.jpg'),name:'拍卖'},
            	  {class:'fl',bgImg:require('common/image/tabs/fl.jpg'),name:'分类'},
            	]
            }
		}
	}
</script>

<style scoped lang="less">
   @base:37.5;
   .tab {
   	background:#fff;
   	width:100%;
   	padding-bottom:10rem/@base;
   	.block{
   		padding-top:10rem/@base;
   		width:20%;
   		float:left;
   		img{width:35rem/@base;}
   		span{margin-top:5rem/@base;color:#999;}
   	 }
   }
</style>
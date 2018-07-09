<template>
	<div class="guessLikes">
		<div class="title">
			<i class="icon iconfont icon-shoucang"></i><span>{{likeDatas.title}}</span>
		</div>
		<div class="wrapLikes" id="wrapLikes" >
			<div class="block" v-for="(item,index) in likeDatas.datas" :key="index">
				<img :src="item.imgUrl" alt="" />
				<p class="info">{{item.info}}</p>
				<div class="wrapInfo flex_between">
					<p class="left">
						<i>￥</i>
						<span>{{item.money}}</span>
						<span>{{item.hasPayPerson}}人付款</span>
					</p>
					<i class="icon iconfont icon-shenglve"></i>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import { waterFlows } from 'common/js/waterfallFlow'
	export default{
		data(){
			return {
				likeDatas:{
					title:'猜你喜欢',
					datas:[
					   {
					   	imgUrl:require('common/image/likes/1.jpg'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					    {
					   	imgUrl:require('common/image/likes/7.jpg'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/3.jpg'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/4.jpg'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/5.jpg'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/6.jpg'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/7.jpg'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/8.jpg'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					]
				}
			
			}
		},
		mounted(){
			this.$nextTick(function(){
			  waterFlows('wrapLikes','block');
			  setTimeout(function(){
			  	waterFlows('wrapLikes','block');
			  },500);
			});
		},
	}
</script>

<style scoped lang='less'>
    @base:37.5;
    .guessLikes{
    	margin-top:10rem/@base;
    	width:100%;
    	/*头部标题*/
    	.title{
    		padding:10rem/@base;
    		background:#fff;
    		text-align:center;
    		font-size:18rem/@base;
    		color:#F85003;
    		i.icon{display:inline-block;font-size:18rem/@base;margin-right:5rem/@base;}
    	}
    	/*瀑布流*/
    	.wrapLikes{
    		width:100%;
    		position:relative;
    		.block{
    			width:49%;
    			display:inline-block;
    			background:#fff;
    			position:absolute;
    			padding-left:1%;
    			img{
    				width:100%;
    			}
    			.info{
    				font-size:14rem/@base;
    				color:#333;
    				padding:0;
    				padding-left:10rem/@base;
    			}
    			.wrapInfo{
    				i{display:inline-block;}
    				p{
    					color:red;
    					span:nth-child(2){
    						font-size:20rem/@base;
    					}
    					span:last-child{
    						color:#999;
    						font-size:12rem/@base;
    					}
    				}
    			}
    	     }
    	}
    }
</style>
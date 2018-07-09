<template>
	<div class="guessLikes">
		<div class="title">
			<i class="icon iconfont icon-shoucang"></i><span>{{likeDatas.title}}</span>
		</div>
		
		<div class="wrapLikes" ref="wrapLikes">
			<div class="block" v-for="item in likeDatas.datas">
				<img :src="item.imgUrl" alt="" />
				<p>{{item.info}}</p>
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
	import { waterFull } from 'common/js/waterfallFlow'
	export default{
		mounted(){
			waterFull(this.$refs.wrapLikes,'block');
		},
		data(){
			return {
				likeDatas:{
					title:'猜你喜欢',
					datas:[
					   {
					   	imgUrl:require('common/image/likes/1.png'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					    {
					   	imgUrl:require('common/image/likes/2.png'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/3.png'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/4.png'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/5.png'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/6.png'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/7.png'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					   {
					   	imgUrl:require('common/image/likes/8.png'),
					   	info:'海带富含水分',
					   	money:'198',
					   	hasPayPerson:'1869'
					   },
					]
				}
			
			}
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
    			img{
    				width:100%;
    			}
    		}
    	}
    }
</style>
<template>
	<div class="tbPlay">
		<span class="tag grad1">{{playDatas.tag}}</span>
		<div class="wrapBlock clearfix">
			<div class="block"  v-for="item in playDatas.data"  :key="item.id">
				<div class="bg" ref="bgImg" :bgPic="item.bgImg">
					<i class="icon"  :class="item.icon=='love'?'iconfont icon-shoucang':item.icon" >{{item.icon=='live'?'LIVE':''}}</i>
				</div>
				<div class="wrapInfo" >
					<p>{{item.title}}</p>
					<p>{{item.info}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/esmascript-6">
	import {setBgImg} from 'common/js/setBgImg'
	export default{
		name:'tbPlay',
		props:{
			playDatas:{
				type:Object,
				default:null
			}
		},
		mounted(){
			this.setBg();
		},
		methods:{
			setBg(){
				for(var i in this.$refs.bgImg){
					setBgImg(this.$refs.bgImg[i]);
				}
			}
			
		}
	}
</script>

<style scoped lang="less">
     @base:37.5;
    .tbPlay{
    	margin-top:10rem/@base;
    	position:relative;
    	.tag{
    		position:absolute;
    		left:0;
    		top:-5rem/@base;
    		color:#fff;
    		z-index:10;
    		font-size:16rem/@base;
    		width:100rem/@base;
    		height:30rem/@base;
    		line-height:30rem/@base;
    		text-align:center;
    		border-top-right-radius: 30rem/@base;
    		border-bottom-right-radius: 30rem/@base;
    	}
    	.block{
    		width:33%;
    		float:left;
    		position:relative;
    		border-right:1rem/@base solid #e3e3e3;
    		.wrapInfo{
    			p:first-child{font-size:14rem/@base;}
    			p:last-child{color:#999;}
    			padding:12rem/@base 10rem/@base;
    			background:#fff;
    			
    		}
    		.bg{
    			height:130rem/@base;
    			position:relative;
    			i{position:absolute;}
    			i.live{
    				width:40rem/@base;
    			    height:15rem/@base;
    			    border-top-right-radius: 10rem/@base;
    			    background:red;
    			    bottom:0;
    			    left:0;
    			    color:#fff;
    			    text-align:center;
    			    line-height:15rem/@base;
    			    font-size:10rem/@base;
    			}
    		}
    	}
    	.block:first-child{
    		width:66%;
    		.bg{
    			i.icon{
    				position:absolute;
    				right:10rem/@base;
    				bottom:10rem/@base;
    				color:red;
    				font-size:18rem/@base;
    				line-height:18rem/@base;
    				
    				
    				
    			}
    		}

    	}
    	.block:first-child,.block:nth-child(2){
    		.wrapInfo{
    			position:absolute;
    			left:0;
    			bottom:0;
    			color:#fff;
    		   background: transparent;
    		   p:last-child{color:#fff;}
    		}
    	}
    }
</style>
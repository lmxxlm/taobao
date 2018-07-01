<template>
	<div class="actives clearfix">
		<div class="block clearfix" v-for="item in actives" :class="item.type" :key="item.type">
			<div class="left">
				<span v-if="item.type=='hssx'" class="name">{{item.name}}</span>
				<div class="wrapInfo">
					<p>{{item.title}}</p>
					<p v-if="item.type=='hqg'">
						<i v-for="itemChild in item.info.split(':')">{{itemChild}}</i>
					</p>
					<p v-else>{{item.info}}</p>
				</div>
				<img :src="item.imgL" alt="" />
			</div>
			<img :src="item.imgR" alt="" class="right" />
		</div>
	</div>
</template>

<script>
	import {countTime,daysLater} from 'common/js/countTime'
	export default {
		data(){
			return {
				actEndTime:'',
				actives:[
				    {type:'hssx',title:'品质生鲜',info:'甄选地道时鲜',
				    imgL:require('common/image/actives/hssx_1.png'),
				    imgR:require('common/image/actives/hssx_2.png'),name:'活色生鲜'},
				    {type:'yhh',title:'有好货',info:'高颜值美物',
				    imgL:require('common/image/actives/yhh_1.png'),
				    imgR:require('common/image/actives/yhh_2.png')},
				    {type:'hqg',title:'海抢购',info:'2018-07-03 10:25',
				    imgL:require('common/image/actives/hqg_1.png'),
				    imgR:require('common/image/actives/hqg_2.png')},
				    {type:'bmqd',title:'必买清单',info:'帮您整理好',
				    imgL:require('common/image/actives/bmqd_1.png'),
				    imgR:require('common/image/actives/bmqd_2.png')},
				    {type:'agj',title:'爱逛街',info:'新品100款',
				    imgL:require('common/image/actives/agj_1.png'),
				    imgR:require('common/image/actives/agj_2.png')},
				    {type:'yxtb',title:'印象淘宝',info:'魔性小视频',
				    imgL:require('common/image/actives/yxtb_1.png'),
				    imgR:require('common/image/actives/yxtb_2.png')}
				]
			}
		},
		created(){
			this.getCountDown();
		},
		methods:{
			//倒计时
			getCountDown() {
			   var that = this;
			   for(var i in this.actives){
			   	  if(this.actives[i].type=='hqg'){
			   	  	var EndTime=this.actives[i].info;
			   	  	 this.actives[i].info = countTime(EndTime);
			   	  	 var singalTime = setInterval(function () {
					    that.actives[i].info = countTime(EndTime)
					 }, 1000);
					 if(this.actives[i].info=='00:00:00:00'){
					    clearInterval(singalTime)
					 }
					 
					 return false
			   	  }
			   }
			},

		}
	}
</script>

<style scoped lang="less">
    @base:37.5;
    .actives{
    	margin-top:10rem/@base;
    	width:100%;
    	background:#fff;
    	.block:nth-child(2n){border-left:1rem/@base solid #e3e3e3;}

    	.block{
    		width:50%;
    		float:left;
    		position:relative;
    		height:150rem/@base;
    		padding:10rem/@base;
    	    box-sizing:border-box;
    	    border-bottom:1rem/@base solid #e3e3e3;
    	    
    		.left{
    			height:100%;
    			width:40%;
    			position:relative;
    			img{
    				max-width:100%;
    				position:absolute;
    				bottom:0;
    				right:0;
    				max-height:60%;

    			}
    			.wrapInfo{
    				p:first-child{font-size:16rem/@base;color:red;}
    				p:last-child{font-size:12rem/@base;color:#666;
    				   white-space: nowrap;
    				   i{display:inline-block;border-radius:2rem/@base;padding:1rem/@base;background:red;color:#fff;margin-right:2rem/@base;}
    				}
    			}
    			.wrapInfo:nth-child(2){
    				p:first-child{color:#3CA6CF;}
    			}
    			.wrapInfo:nth-child(3){
    				p:first-child{font-weight:bold;}
    			}
    			
    		}
    		.right{
    			max-width:45%;
    			position:absolute;
    			right:7rem/@base;
    			bottom:10rem/@base;
    		    max-height:90%;
    			
    		}
    	}
    	/*活色生鲜*/
    	.hssx{
    		overflow: hidden;
    		.name{
    			width:90%;
    			height:50rem/@base;
    			color:#fff;
    			background:red;
    			display:inline-block;
    			position:absolute;
    			top:-20rem/@base;right:5rem/@base;
    			text-align:center;
    			line-height:50rem/@base;
    			border-bottom-left-radius: 50%;
    			border-bottom-right-radius: 50%;
    		}
    		.wrapInfo{
    			position:absolute;
    			left:100%;
    			z-index:5;
    			white-space: nowrap;
    			top:0;
    			
    			p:first-child{font-size:14rem/@base !important;}
    		}
    	}
    	
    	.yxtb{
    		.wrapInfo{
    			p:first-child{color:#F5AE4D !important;}
    		}
    	}
    }
</style>
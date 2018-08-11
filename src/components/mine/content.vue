<template>
	<div class="content">

		<div class="naughtyVal flex_between">
			<div class="left">
				<p>88会员</p>
				<p>淘气值--</p>
			</div>
			<loop class="right" :setOptions="options" ref='loop'>
				<swiper-slide v-for="item in tqzData" :key="item.id"  slot="content">
		    		 <div  class="flex_between" >
		               <div>
			               	<p>{{item.pTitle}}</p>
			               	<p>{{item.pInfo}}</p>
		               </div>
		               <span  :data-url="item.imgUrl" ref="loopImg" :style="addImg"></span>
				   </div>
		        </swiper-slide>
			</loop>
		</div>

		<block :blockData="myOrder" :type="'type_myOrder'" v-if=" Object.keys(myOrder).length>0"></block>
		<block :blockData="tools" :type="'type_tools'" v-if="Object.keys(tools).length>0"></block>
	</div>
</template>

<script>
	import Loop from 'base/swiper/loop'
	import Block from 'components/mine/block'
	import { comUrl } from 'common/js/util' //正常的引入一个变量


	export default {
		data(){
			return {
				options:{
				   direction: 'vertical',
					autoplay:{delay:2000},
					autoHeight: true,
				},
				tqzData:[],
				myOrder:{},//我的订单
				tools:{},//必备工具
				addImg:{
					backgroundImage:"url("+require('../../common/image/mine/head.png')+")",
					backgroundRepeat:'no-repeat',
					backgroundSize:'100% 100%'
				},
			}
		},
		created(){
			this.getTqz();
		},
		methods:{
			getTqz(){
				var that=this;
				var url = comUrl+'mine';
				var data = '';
		   	   	this.$http.get(url).then((response) => {
		   	   		var result = JSON.parse(response.bodyText).data.content;
					this.tqzData = result.tqz.loops;
					this.myOrder = result.myOrder;
				    this.tools = result.tools;

					this.$nextTick(function(){
						 that.setBgImg();//用setTimeout 200也可以获取到
					})

				})
			},
			setBgImg(){
				//动态生成图片是个问题
				var oImgs=this.$refs.loopImg;
				for(var i in oImgs){
//					oImgs[i].className=`bg_img(${oImgs[i].dataset.url})`;
                   console.log(oImgs[i].dataset.url,'==============')

					//oImgs[i].style.cssText="backgroundImage:url('../../common/image/mine/head.png') no-repeat;background-size:100% 100%;";
//	 				oImgs[i].style.backgroundImage="url('../../common/image/mine/head.png')";
//	 				oImgs[i].style.backgroundRepeat="no-repeat";
//	 				oImgs[i].style.backgroundSize='cover';

	 				//this.addBg=`{background:url(${oImgs[i].dataset.url}) no-repeat,background-size:100% 100%}`;
	 				this.addImg=`{
	 					backgroundImage:"url("+require('../../common/image/mine/loop.png')+")",
						backgroundRepeat:'no-repeat',
						backgroundSize:'100% 100%'
	 				}`;

				}
			}
		},
		components:{
			Loop,
			Block
		}
	}
</script>

<style scoped lang="less">
	 @import '../../common/less/bg.less';
	 @base:37.5;
	 .content{
	 	position:relative;
	 	margin-top:-20rem/@base;
	 	padding:0 10rem/@base;
	 	.naughtyVal{
	 		background:#fff;
	 		border-radius:10rem/@base;
	 		padding:10rem/@base;
	 		div.left{
	 			p:first-child{font-size:17rem/@base;font-family: "arial rounded mt bold";color:#E4BD9D;}
	 			p:last-child{color:#333;font-size:12rem/@base;}
	 		}
	 		.right{
	 			height:40rem/@base;
	 			width:70%;
	 			padding-left:10rem/@base;
	 			border-left:1px solid #e3e3e3;
	 			color:#666;
	 			p:first-child{
	 				font-size:14rem/@base;
	 			}
	 			p:last-child{
	 				font-size:12rem/@base;
	 			}
	 			span{
	 				display:inline-block;
	 				width:60rem/@base;
	 				height:36rem/@base;
	 				border:1px solid #e3e3e3;

	 			}
	 		}
	 	}
	 }

</style>

<template>
	<div class="home">
	   <loop :setOptions="swiperOptionHP" :hpLoops="pics"  v-if="pics.length>0 && swiperOptionHP!=undefined" class="hpLoop">
	   	   <swiper-slide v-for="item in pics" :key="item.id"  slot="content">
	    		<img :src="item.src" alt="" />
	       </swiper-slide>
	       
	   </loop>
	   <!--中间tab模块-->
	   <tabs></tabs>
	   <!--淘宝头条-->
	   <div class="taobaoHeadline flex_between" ref="taobaoHeadline">
	   	   <img src="../../common/image/spLoop/tbtt.jpg" alt="" class="left" />
	   	   <loop class="spLoop" :setOptions="swiperOptionSP" ref="spLoop">
		   	   <swiper-slide  class="spSwiper" slot="content" v-for="item in spLoopDatas" :key="item.id" ref="wrap" :bgPic="item.bgurl">
		   	   	 <div class="wrap">
		   	   	 	 <p><i>{{item.title1}}</i>{{item.info1}}</p>
		   	   	     <p><i>{{item.title2}}</i>{{item.info2}}</p>
		   	   	 </div>
		       </swiper-slide>
	       </loop>
	   </div>
	   <!--活动-->
	   <actives></actives>
       <!--淘宝直播-->
       <tb-play :playDatas="tbPlayDatas" v-if="tbPlayDatas"></tb-play>
	</div>
</template>

<script type="text/esmascript-6">
	import Loop from 'base/swiper/loop'
	import Tabs from 'components/home/tab'
	import Actives from 'components/home/active'
	import TbPlay from 'components/home/tbPlay'
	
	import {setBgImg} from 'common/js/setBgImg'

	export default{
		name:'Home',
		data(){
			return {
				 spLoopDatas:[
			       {bgurl:require('common/image/spLoop/bg1.jpg'),id:'001',title1:'热评',info1:'山东分公司的后果福达dsfd股份达伽达伽伐的',title2:'热议',info2:'yydytywef山水风光是对方的还是高仿的还是高仿还是官方'},
			       {bgurl:require('common/image/spLoop/bg2.jpg'),id:'002',title1:'热评',info1:'山东分公司的后达伽达伽伐的',title2:'热议',info2:'yydytywef山水风光是对方的还是高仿的还是高仿还是官方'},
			       {bgurl:require('common/image/spLoop/bg3.jpg'),id:'003',title1:'热评',info1:'山东分公司gfbvgfbvghb伽伐的',title2:'热议',info2:'yydytywef山水风光是对方的还是高仿的还是高仿还是官方'},
			       {bgurl:require('common/image/spLoop/bg4.jpg'),id:'004',title1:'热评',info1:'山东分公司的sfdfr伽伐的',title2:'热议',info2:'yydytywef山水风光是对方的还是高仿的还是高仿还是官方'},
			       {bgurl:require('common/image/spLoop/bg5.jpg'),id:'005',title1:'热评',info1:'山东分公司的后dvdfg达伽伐的',title2:'热议',info2:'yydytywef山水风光是对方的还是高仿的还是高仿还是官方'},
			    ],
				pics:[
					{src:require('common/image/loop/loop1.jpg'),id:'1001'},//直接写路径不显示
					{src:require('common/image/loop/loop2.jpg'),id:'1002'},
					{src:require('common/image/loop/loop3.jpg'),id:'1003'},
				],
				swiperOptionHP: { //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
			         notNextTick: true,
			         autoplay:{delay:2000},
			         autoHeight: true,
			          pagination: {
			            el: '.swiper-pagination'
			          }
			      },
			    swiperOptionSP:{
					direction: 'vertical',
					autoplay:{delay:2000},
					autoHeight: true,
			    },
			//    淘宝直播data
			    tbPlayDatas:{
			    	tag:'淘宝直播',
			    	data:[
			    	   {
			    	   	bgImg:require('common/image/tbPlay/6.jpg'),
			    	   	title:'红人私藏好物分享',
			    	   	info:'颜值越高责任越重',
			    	   	icon:'love',
			    	   	id:'001',
			    	   },
			    	   {
			    	   	bgImg:require('common/image/tbPlay/3.jpg'),
			    	   	title:'主播优选',
			    	   	info:'开叉阔腿裤',
			    	   	icon:'',
			    	   	id:'002'
			    	   },
			    	    {
			    	   	bgImg:require('common/image/tbPlay/2.jpg'),
			    	   	title:'全球现场',
			    	   	info:'开叉阔腿裤',
			    	   	icon:'live',
			    	   	id:'003'
			    	   },
			    	   {
			    	   	bgImg:require('common/image/tbPlay/1.jpg'),
			    	   	title:'全球现场',
			    	   	info:'开叉阔腿裤',
			    	   	icon:'live',
			    	   	id:'004',
			    	   },
			    	   {
			    	   	bgImg:require('common/image/tbPlay/4.jpg'),
			    	   	title:'全球现场',
			    	   	info:'开叉阔腿裤',
			    	   	icon:'live',
			    	   	id:'005',
			    	   }
			    	],
			    	
			    }
			}
		},
		mounted(){
			var that=this;
			this.$nextTick(function(){
				that.spBgPics();
			});
		},
		methods:{
			//展示竖屏的背景图片
			spBgPics(){//如果是引进来的组件一定要加$el
				var wraps=this.$refs.wrap;
				for(var i in wraps){
				    setBgImg(wraps[i].$el)
				}
			}
		},
		components:{
			Loop,
			Tabs,
			Actives,
			TbPlay,
		}
	}
</script>

<style scoped lang="less">
    @base:37.5;
    
    .home{
    	padding-top:53rem/@base;
    	padding-bottom:100rem/@base;
    	background:#F3F2F1;
    	.hpLoop{
	    	.swiper-slide {
	    		width:100%;
	    		img{width:100%;height:150rem/@base;}
	    	}
	    	.swiper-pagination{
	    		position: fixed;
	    		bottom:0;
	    		background:red;
	    		left:50%;
	    		
	    	}
	    }
	    /*竖屏轮播*/
	   .taobaoHeadline{
	   	background:#fff;
	   	  .spSwiper,.swiper-wrapper{height:45rem/@base !important;}
	   	  padding-left:10rem/@base;
	   	  .wrap{
	   	  	height:100%;
	   	  	padding-right:80rem/@base;
	   	  	background: -webkit-linear-gradient(left, rgba(255,255,255,1) 60%, rgba(255,255,255,0)) 70%;
		    /* Safari 5.1 - 6.0 */
		    background: -o-linear-gradient(left, rgba(255,255,255,1)  60%, rgba(255,255,255,0)) 70%;
		    /* Opera 11.1 - 12.0 */
		    background: -moz-linear-gradient(left, rgba(255,255,255,1)  60%, rgba(255,255,255,0)) 70%;
		    /* Firefox 3.6 - 15 */
		    background: linear-gradient(to right,  rgba(255,255,255,1)  60%, rgba(255,255,255,0)) 70%;
	   	  	p{
	   	  		overflow: hidden;
	   	  		white-space:nowrap;
	   	  	    text-overflow: ellipsis;
	   	  	    font-size:14rem/@base;
	   	  	    i{
		      	    color:#FB8206;
			      	border:1px solid #FB8206;
			      	padding:2rem/@base;
			      	line-height:12rem/@base;
			      	border-radius:3rem/@base;
			      	margin-right:5rem/@base;
			      	font-size:12rem/@base;
			      	display:inline-block
			      }
	   	  	}
	   	  }
	      img{
	      	width:42rem/@base;
	      	height:44rem/@base;
	      	margin-right:10rem/@base;
	      }

	   }
    }
</style>

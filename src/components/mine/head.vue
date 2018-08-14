<template>
	<div class="head bg_grad">
		<div class="top flex_between">
			<img :src="headDatas.headImg" alt="" class="left" />
			<div class="center ">
				<p class="tel">{{headDatas.userName}}</p>
				<p>
					<i class="icon iconfont icon-qinqingzhanghu"></i>
				    <span>我的亲情号</span>
				    <i class="icon iconfont icon-you1"></i>
				</p>
			</div>
			<span class="set right" @click="set">设置</span>
		</div>
		<div class="tabs flex_between">
			<div class="box flex_column" v-for="item in headDatas.tabs" :key="item.id">
				<span class="num">{{item.num}}</span>
				<span class="name">{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { comUrl } from 'common/js/util' //正常的引入一个变量
	export default {
		data(){
			return{
				headDatas:{}
			}
		},
		created(){
			this.getHeadData();
		},
		methods:{
			 getHeadData(){
		   	   	this.$http.get(comUrl+'mine',{ credentials: true }).then((response) => {
					  this.headDatas=JSON.parse(response.bodyText).data.header;
					  console.log(this.headDatas.headImg);
					  this.headDatas.headImg = require('../../common/image/mine/head.png');
				  })
	   	 },
			 set(){//去设置页面
				 this.$router.push({path:'/sets'})
			 }
		}
	}
</script>

<style scoped lang="less">
   @import '../../common/less/bg.less';/*绝对不能少了；*/
   @base:37.5;
	 #app .footer{display:none;}
   .head{
   	  .bg_grad(#FF8800,#FF5300,#fff);
   	  padding-bottom:40rem/@base;
   	  font-size:12rem/@base;
   	  .top{
   	  	padding:20rem/@base 10rem/@base 10rem/@base 20rem/@base;
   	  	position:relative;
   	  	img{
   	  		width:60rem/@base;
   	  		height:60rem/@base;
   	  		border-radius:50%;
   	  	}
   	  	.center{
   	  		width:100%;
   	  		text-align:left;
   	  		padding-left:10rem/@base;
   	  		p:first-child{
   	  			font-size:18rem/@base;
   	  			font-weight:bold;
   	  			}
   	  		p:last-child{
   	  			margin-top:5rem/@base;
   	  			background:rgba(0,0,0,0.2);
   	  			display:inline-block;
   	  			padding:2rem/@base 5rem/@base;
   	  			border-radius: 15rem/@base;
                span{ font-size:12rem/@base;}
   	  			i{display:inline-block;font-size:14rem/@base;}
   	  		}
   	  	}
   	  	.right{
   	  		white-space: nowrap;
   	  		position:absolute;
   	  		top:20rem/@base;right:10rem/@base;
   	  		font-size:14rem/@base;
   	  	}
   	  }

   	  .tabs{
   	  	padding:0 30rem/@base;
   	  	.box{
   	  		span:last-child{margin-top:3rem/@base;}
   	  	}
   	  }
   }
</style>

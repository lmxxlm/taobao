<template>
	<div class="block">
		<div class="title flex_between">
			<span class="name">{{blockData.title}}</span>
			<span>{{blockData.info}}<i class="icon right"></i></span>
		</div>
		<div class="boxs flex_between">
			<div class="box flex_column" v-for='item in blockData.tabs' :key="item.id">
				<i class="icon iconfont" :class="item.class"></i>
				<span>{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script >
	export default{
		props:{
			blockData:{
				type:Object,
				default:{}
			}
		},
		data(){
			return {
				mes:''
			}
		},
		mounted(){
			console.log(this.blockData,"=========,,,,,");
		}
	}
</script>

<style scoped lang="less">
   @base:37.5;
   .block{
   	   margin-top:10rem/@base;
   	   background:#fff;
   	   border-radius:10rem/@base;
   	   .title{
   	   	  padding:10rem/@base;
   	   	  border-bottom:1rem/@base solid #e3e3e3;
   	   	  span:first-child{color:#333;font-size:14rem/@base;}
   	   	  span:last-child{font-size:12rem/@base;color:#999;}
   	   }
   	   .boxs{
   	   	 padding:10rem/@base;
   	   }
   }
</style>
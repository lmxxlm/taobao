<template>
	<div class="block">
		<div class="title flex_between">
			<span class="name">{{blockData.title}}</span>
			<span>{{blockData.info}}<i class="icon right"></i></span>
		</div>
		<div class="boxs flex_between" ref="boxs">
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
			},
			type:{
				type:String,
				default:''
			}
		},
		watch:{
			blockData:{//深入坚挺了数据   然后再调用设置宽度的方法，这样保证所有的值已经获取到
				handler: function (val, oldVal) { 
					 var that = this;
				     if(val!=oldVal){
				     	that.$nextTick(function(){
				     		that.setWidth();
				     	})
				     }
				},
			      deep: true,
			      immediate: true
			}
		},
		methods:{
			setWidth(){
				this.$refs.boxs.style.width='100%';
				if(this.$refs.boxs.children.length>1){
					for(var item of this.$refs.boxs.children){
						if(this.type=='type_myOrder'){
							item.style.width="20%";
						}else if(this.type=='type_tools'){
							item.style.width='25%';
						}	
					}
				}
				
			}
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
   	   	 padding-bottom:0;
   	   	 flex-wrap:wrap;
   	   	 box-sizing: border-box;
   	   	 .box{
   	   	 	margin-bottom:10rem/@base;
   	   	 	i.icon{
   	   	 		font-size:28rem/@base;
   	   	 		line-height:28rem/@base;
   	   	 	}
   	   	 }
   	   	 
   	   }
   }
</style>
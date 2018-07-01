<template>
    <swiper ref="mySwiper" :options="swiperOption" class="testLoop">
    	 <slot name="content"></slot>
	     <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script type="text/esmascript-6">
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default{
		props:{
			setOptions:{
				type:Object,
				default:{},
			},
		},
		data(){
			return {
				swiperOption:{}
			}
		},
		created(){
			this.swiperOption=this.setOptions;
			console.log("swiperOption",this.swiperOption);
		},
	    computed: {
	      swiper() {
		    return this.$refs.mySwiper.swiper
		  }
	    },
	    mounted() {
	    	//this.swiper.autoplay(3000,true);
	    	console.log('mounted swiper' , this.swiper);
	    	// console.log(this.swiper.autoplay,'================')
	    	//this.swiper.autoplay=true;
	    	//this.swiper.autoplay.start();
	    	// this.swiper.slideTo(3, 1000, false)
	    },
		components:{
	  		swiper,
	  		swiperSlide
  	   }
	}
</script>

<style scoped lang="less">
    @base:37.5;
</style>

<template>
	<div class="mine">
		<div class="head">
			
		</div>
	</div>
</template>

<script type="text/esmascript-6">
  export default {
  	created () {
		this.$http.jsonp('http://localhost:8083/api/seller',{ credentials: true }).then((response) => {
		  console.log(response)
	    })
    }
  }
</script>

<style>
</style>
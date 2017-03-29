<template>
<div class="demo1">
	 <h1>hello! 我是demo1</h1>
     <p>{{msg}}</p>
</div>
</template>	
<script>
export default {
	  name: 'demo1',
	  data () {
	    return {
	      msg: '生活不止眼前的苟且，还有诗和远方 ！'
	    }

	  }
}
</script>
<style type="scss" scoped>
	p,h1{ color: red; }
</style>
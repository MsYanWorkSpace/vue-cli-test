<template>
<div class="demo2">
	 <h1>hello! 我是demo2</h1>
     <p>{{msg}}</p>
</div>
</template>	
<script>
export default {
	  name: 'demo2',
	  data () {
	    return {
	      msg: '你觉得简单，那就是简单！'
	    }

	  }
}
</script>
<style type="scss" scoped>
	p,h1{ color: green; }
</style>
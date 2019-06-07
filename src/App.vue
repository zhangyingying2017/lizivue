<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
	import rem from './rem/rem.js'
	export default {
	  name: 'App'
	}
</script>

<style>
	@import url("./styles/style.css");
	@import url("./fonts/iconfont.css");
</style>

<template>

<div>
		<div id="slogan" class="text-center">
			<h1>Walletex</h1>
			<h6 class="text-secondary">Seu gerenciador de carteira.</h6>
		</div>
		<div id="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup>
import { useQuasar } from 'quasar'

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

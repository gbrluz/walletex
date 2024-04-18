<template>

<div id="container" class="text-center">
		<div id="slogan" >
			<h1>Walletex</h1>
			<h6 class="text-secondary">Seu gerenciador de carteira.</h6>
		</div>
		<div id="main">
			<q-btn v-for="btn in name" :to="btn" class="q-pa-md" color="blue">{{ btn }}</q-btn>
			<RouterView/>
		</div>
	</div>
			
</template>

<script setup>

const name  = ['Transactions', 'Wallet', 'Settings']
</script>

<style scoped>

</style>

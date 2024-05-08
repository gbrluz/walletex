<template>

<div id="container" class="text-center">
		<div id="slogan" >
			<h1>Walletex</h1>
			<h6 class="text-secondary">Seu gerenciador de carteira.</h6>
		</div>
		<div id="main">
			<q-btn v-for="btn in name" :to="btn" class="q-ma-sm" color="blue">{{ btn }} </q-btn>
			<RouterView/>
		</div>
	</div>
			
</template>

<script setup>

const name  = ['Transações', 'Carteira', 'Configurações']
</script>

<style scoped>

</style>

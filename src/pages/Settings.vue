<template>
    <h5>Seu Perfil</h5>
    <div id="container">

    <q-card
    class="my-card text-white q-ma-xl"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Dados</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input rounded outlined v-model="name" label="Nome Completo"/>
        <br/>
        <q-input rounded outlined v-model="email" label="Email" />
        <br/>
        <q-input rounded outlined v-model="number" label="Número" />
        <br/>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // name: (""),
      // email: (""),
      // number
    };
  },
}
</script>

<style scoped>
#container {
  padding-left: 20%;
  padding-right: 20%;
}
</style>
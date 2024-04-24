<template>
  <div id="container">
    <h5>Transações</h5>

    <h3>R$ {{ soma }}</h3>

    <br />

    <q-btn label="INSERIR TRANSAÇÃO" color="blue" @click="alert = true" />
    &nbsp;
    <q-btn
      label="DELETAR TRANSAÇÃO"
      color="blue"
      @click="removeItem(rows[id])"
    />

    <br />

    <q-dialog v-model="alert" v-on:keyup.enter="addItem(name, price) ; v-close-popup" >
      <q-card>
        <q-card-section>
          <div class="text-h6">Insira os dados</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined v-model="name" label="Nome"></q-input>

          <q-input outlined v-model="price" label="Preço"></q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
            @click="addItem(name, price)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div>
      <q-table
      flat bordered
      title="Ultimos 30 dias"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :rows-per-page-options="[0]"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  { name: "id", label: "#", field: "id"},
  { name: "name", label: "Nome", field: "name", align: "center" },
  { name: "price", label: "Preço", field: "price" },
  { name: "data", label: "Data", field: "data" },
];

const rows = [
  {
    id: 1,
    name: "Lanche",
    price: "12.33",
    data: "12/03/2024",
  },
  {
    id: 2,
    name: "Academia",
    price: "109.90",
    data: "10/03/2024",
  },
  {
    id: 3,
    name: "Posto",
    price: "220.00",
    data: "07/03/2024",
  },
  {
    id: 4,
    name: "Mercado",
    price: "158.78",
    data: "03/03/2024",
  },
  {
    id: 5,
    name: "Roupa",
    price: "198.90",
    data: "01/03/2024",
  },
  {
    id: 6,
    name: "Roupa",
    price: "198.90",
    data: "01/03/2024",
  },
];

export default {
  data() {
    return {
      columns,
      rows,
      selected: [],
      alert: false,
      name: ref(''),
      price: ref('')
    };
  },

  computed: {
    soma() {
      return this.rows.reduce((acc, item) => {
        acc += Number(item.price);
        return acc;
      }, 0);
    },
  },

  methods: {
    addItem(name, price) {
      const data = new Date(Date.now()).toLocaleDateString();
      this.rows.push({ name, price, data });
      name = "";
      price = "";
    },
    removeItem(id) {
      // this.rows.splice(rows.indexOf(2));
      console.log(rows.filter(e=> e.id=2))
    }
  },
};
</script>

<style scoped>
#container {
  padding-left: 20%;
  padding-right: 20%;
}
</style>

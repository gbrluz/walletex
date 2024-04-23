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
      @click="removeItem(selected)"
    />

    <br />

    <q-dialog v-model="alert">
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
        title="Ultimos 30 dias"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      />
    </div>
    <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  { name: "name", label: "Nome", field: "name", align: "center" },
  { name: "price", label: "Preço", field: "price" },
  { name: "data", label: "Data", field: "data" },
];

const rows = [
  {
    name: "Lanche",
    price: "12.33",
    data: "12/03/2024",
  },
  {
    name: "Academia",
    price: "109.90",
    data: "10/03/2024",
  },
  {
    name: "Posto",
    price: "220.00",
    data: "07/03/2024",
  },
  {
    name: "Mercado",
    price: "158.78",
    data: "03/03/2024",
  },
  {
    name: "Roupa",
    price: "198.90",
    data: "01/03/2024",
  },
  {
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
      console.log(data);
    },
    removeItem(selected) {
      this.rows.splice(selected, 1);
      // console.log(selected)
    },
    getSelectedString() {
      return this.selected.length === 0 ? "" : `${this.selected.length} record${
            this.selected.length > 1 ? "s" : ""
          } selected of ${rows.length}`;
    },
  },
};
</script>

<style scoped>
#container {
  padding-left: 20%;
  padding-right: 20%;
}
</style>

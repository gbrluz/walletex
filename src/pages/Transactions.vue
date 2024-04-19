<template>
  <div id="container">
    <h5>Transações</h5>

    <h3>R$ 1506,56</h3>
    {{ item }}
    <br />

    <q-btn color="blue" @click="addItem('maça','2121','23123')">INCLUIR TRANSAÇÃO</q-btn>
    &nbsp;
    <q-btn color="blue" @click="removeItem('maça','2121','23123')">DELETAR TRANSAÇÃO</q-btn>

    <div>
      <q-table
        title="Ultimos 30 dias"
        :rows="item"
        :columns="columns"
        row-key="name"
      />
    </div>
  </div>
</template>

<script>
const columns = [
  { name: "name", label: "Nome", field: "name", align: "center" },
  { name: "price", label: "Preço", field: "price" },
  { name: "data", label: "Data", field: "data" },
];

const rows = [
  {
    name: "Lanche",
    price: "12,33",
    data: "12/03/2024",
  },
  {
    name: "Academia",
    price: "109,90",
    data: "10/03/2024",
  },
  {
    name: "Posto",
    price: "220,00",
    data: "07/03/2024",
  },
  {
    name: "Mercado",
    price: "158,78",
    data: "03/03/2024",
  },
  {
    name: "Roupa",
    price: "198,90",
    data: "01/03/2024",
  },
  {
    name: "Roupa",
    price: "198,90",
    data: "01/03/2024",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
  watch:{
    rows(item) {
      if (newItem, oldItem) {
        this.getItem()
      }
    }
  },
  methods: {
    addItem(name, price, data) {
      rows.push({name,price,data})
      console.log(rows)
    },
    removeItem(item) {
      rows.splice(item[0],1)
      console.log(rows)
    }
  },
};
</script>


<style scoped>

#container {
  padding: 20%
}</style>
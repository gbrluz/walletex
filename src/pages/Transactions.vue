<template>
  <div id="container">
    <h5>Transações</h5>



    <h3></h3>
    {{ soma }}

    <!-- <p>
  Ask a yes/no question:
  <input v-model="row" :disabled="loading" />
</p> -->
<p>{{ answer }}</p>
    <br />

    <q-btn color="blue" @click="addItem('maça','2121','23123')">INCLUIR TRANSAÇÃO</q-btn>
    &nbsp;
    <q-btn color="blue" @click="removeItem('maça','2121','23123')">DELETAR TRANSAÇÃO</q-btn>

    <div>
      <q-table
        title="Ultimos 30 dias"
        :rows="rows"
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
      row: '',
      answer: 'Questions usually contain a question mark. ;-)',
      loading: false
    };
  },
  computed: {
    soma() {
      return this.rows.reduce((acc,item)=> {
        acc+=Number(item.price)
        return acc
      },0);
    }
  },

  watch: {
    // whenever question changes, this function will run
    rows: {
      handler(newQuestion, oldQuestion) {
      console.log("aqui")
      if (newQuestion.includes('?')) {
        console.log("aaaa")
      }
    },
      deep: true
    }

  },
  // watch:{
  //   rows(item,newItem) {
  //     console.log("aqui")
  //     if (item.includes()) {
  //       console.log("aqui")
  //       this.getItems()
  //     }
  //   }
  // },
  methods: {
    async getItems () {
      console.log("methods")
      return rows;
    },
    addItem(name, price, data) {
      this.rows.push({name,price,data})
      console.log(rows)
    },
    removeItem(item) {
      this.rows.splice(item[0],1)
      console.log(rows)
    },
    async getAnswer() {
      this.loading = true
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      } finally {
        this.loading = false
      }
    }
  },
  
};
</script>


<style scoped>

#container {
  padding: 20%
}

</style>
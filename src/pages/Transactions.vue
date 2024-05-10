<template>
  <div id="container">
    <h5>Transações</h5>

    <h3>R$ {{ soma.toFixed(2).replace(".",",") }}</h3>

    <br />

    <q-btn label="INSERIR TRANSAÇÃO" color="blue" @click="alert = true" />
    &nbsp;
    <q-btn
      label="DELETAR TRANSAÇÃO"
      color="blue"
      @click="deleteItem = true"
    />

    <br />

    <q-dialog
      v-model="deleteItem"
      v-on:keyup.enter="
        removeItem(id);
        v - close - popup;
      "
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Insira os dados</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined v-model.number="id" label="ID"></q-input>

        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
            @click="removeItem(id)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="alert"
      v-on:keyup.enter="
        addItem();
        v - close - popup;
      "
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Insira os dados</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined v-model="name" label="Nome"></q-input>

          <q-input outlined v-model.number="price" label="Preço"></q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
            @click="addItem(name, price.Number)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div>
      <q-table
        flat
        bordered
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
import axios from "axios";

const columns = [
  { name: "id", label: "#", field: "id" },
  { name: "name", label: "Nome", field: "name", align: "center" },
  { name: "price", label: "Preço", field: "price" },
  { name: "data", label: "Data", field: "data" },
];

export default {
  data() {
    return {
      columns,
      transactions: [],
      rows: [],
      selected: [],
      alert: false,
      deleteItem: false,
      name: ref(""),
      price: ref(),
      id: ref(),
      data: ref("")
    };
  },

  computed: {
    soma() {
      return this.transactions.reduce((acc, item) => {
        acc += Number(item.price);
        return acc;
      }, 0);
    },
  },

  methods: {
    addItem() {
      axios({
        url: "http://localhost:4000",
        method: "post",
        data: {
          query: `
          mutation CreateTransaction($input: CreateTransactionInput){
            newTransaction: addTransaction (data: $input) {
              name,
              price,
              data
            }
          }
        `,
        variables: {
          input: {
            name: this.name,
            price: this.price,
          }
        }
        },
      }).then((response) => {
        const query = response.data.transactions;
        this.getItems();
      });
    },
    removeItem() {
      axios({
        url: "http://localhost:4000",
        method: "post",
        data: {
          query: `
          mutation removeTransaction ($id: Int) {
            removeTransaction(id: $id)
          }
          `,
        variables: {
            id: this.id,
        }
        },
      }).then((response) => {
        const query = response.data.transactions;
        this.getItems();
      });
    },
    getItems () {
      axios({
      url: "http://localhost:4000",
      method: "post",
      data: {
        query: `
        {
          transactions {
            id
            name
            price
            data
          }
        }
        `,
      },
    }).then((response) => {
      const query = response.data;
      this.transactions = query.data.transactions;

      this.rows = this.transactions.map(transacao => {
        const date = new Date(transacao.data).toLocaleDateString('pt-BR');
        return{
          ...transacao,
          data: date
        }
      })
    });
    }
  },
  created() {
    this.getItems();
  },
};
</script>

<style scoped>
#container {
  padding-left: 20%;
  padding-right: 20%;
}
</style>

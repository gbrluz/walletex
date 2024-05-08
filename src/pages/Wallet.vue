<template>
  <div id="container">
    <h3>Meus Cartões</h3>

    <q-btn
      class="q-mb-lg"
      label="CADASTRAR NOVO CARTÃO"
      color="blue"
      @click="addCardDialog = true"
    />
    &nbsp;

    <div class="row justify-center" style="max-height: 100px">
      <q-card
        v-for="(card, index) in cards"
        class="my-card text-white q-ma-md column"
      >
        <q-card-section>
          <q-card-actions align="right">
            <q-btn
              round
              color="white"
              glossy
              text-color="black"
              icon="close"
              size="xs"
              @click="removeCard(card.id)"
            />
          </q-card-actions>
          <div class="text-h4 text-weight-bolder">{{ card.cardFlag }}</div>
          <br />
          <div class="text-h5">{{ card.cardName }}</div>
          <br />
          <br />

          <div class="text-h4">{{ card.cardNumber }}</div>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog
      v-model="addCardDialog"
      v-on:keyup.enter="
        addCard();
        v - close - popup;
      "
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Insira os dados</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            outlined
            v-model="cardNumber"
            label="Número do Cartão"
            mask="#### #### #### ####"
          ></q-input>
          <q-input outlined v-model="cardName" label="Nome do Cartão"></q-input>
          <q-input
            outlined
            v-model="cardFlag"
            label="Bandeira do Cartão"
            mask="card"
          ></q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
            @click="addCard()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  data() {
    return {
      cards: [],
      id: 0,
      cardNumber: "",
      cardFlag: "",
      cardName: "",
      addCardDialog: false,
      slide: ref(1),
    };
  },

  methods: {
    getCards() {
      axios({
        url: "http://localhost:4000",
        method: "post",
        data: {
          query: `
        {
          cards {
            id
            cardNumber
            cardName
            cardFlag
          }
        }
        `,
        },
      }).then((response) => {
        const query = response.data;
        this.cards = query.data.cards;
        // console.log(this.cards);
      });
    },
    addCard() {
      axios({
        url: "http://localhost:4000",
        method: "post",
        data: {
          query: `
          mutation addCard($input: CardInput){
            newCard: addCard (data: $input) {
              id,
              cardNumber,
              cardName,
              cardFlag
            }
          }
        `,
          variables: {
            input: {
              cardNumber: this.cardNumber,
              cardName: this.cardName,
              cardFlag: this.cardFlag,
            },
          },
        },
      }).then((response) => {
        const query = response.data.cards;
        this.getCards();
        (this.cardNumber = ""), (this.cardName = ""), (this.cardFlag = "");
      });
    },
    removeCard(id) {
      axios({
        url: "http://localhost:4000",
        method: "post",
        data: {
          query: `
          mutation removeCard ($id: Int) {
            removeCard(id: $id)
          }
          `,
          variables: {
            id,
          },
        },
      }).then((response) => {
        this.getCards();
      });
    },
  },

  created() {
    this.getCards();
  },
};
</script>

<style lang="sass" scoped>
.my-card
  background: radial-gradient(circle, #0e4399 0%, #002259 100%)
</style>

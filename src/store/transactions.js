import { defineStore } from 'pinia';

function buildTransaction() {
    return {
        id: '',
        name: '',
        price: '',
        data: ''
    }
}

export const Transaction = defineStore('Transaction' ,{
    state: ()=> {
        return {
            transaction: buildTransaction()
        }
    },
    actions: {
        setTransaction(transaction) {
            this.transaction = transaction
        },
        resetTransaction() {
            this.transaction = buildTransaction
        },
        setId(id) {
            this.transaction.id = parseInt(id)
        },
    },
    getters: {
        getId() {
            return this.transaction.id
        },
        getName() {
            return this.transaction.name
        },
        getPrice() {
            return this.transaction.price
        },
        getData() {
            return this.transaction.data
        }
    }
})
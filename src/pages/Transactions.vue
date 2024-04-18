<template>
   
   <div id="container" >
    <h5>Transações</h5>
    <br/>

    

    <div class="q-pa-md">
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
  { name: 'item', align: 'center', label: 'Item', field: 'item'},
  { name: 'price', label: 'Price', field: 'price'},
  { name: 'data', label: 'Data', field: 'data' },
]

const rows = [
  {
    item: 'Lanche',
    price: '12,33',
    data: '12/03/2024'
  },
  {
    item: 'Academia',
    price: '109,90',
    data: '10/03/2024'
  },
  {
    item: 'Posto',
    price: '220,00',
    data: '07/03/2024'
  },
  {
    item: 'Mercado',
    price: '158,78',
    data: '03/03/2024'
  },
  {
    item: 'Roupa',
    price: '198,90',
    data: '01/03/2024'
  },
  {
    item: 'Roupa',
    price: '198,90',
    data: '01/03/2024'
  },
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}

</script>

<style scoped>

</style>
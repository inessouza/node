<template>
  <div id="app">
    <h1>Módulo Vue JS</h1>
    <div v-for="cliente in clientes" :key="cliente.id">
      <ClienteVue :cliente="cliente"/>
    </div>
  </div>
</template>

<script>
import ClienteVue from './components/ClienteVue'
export default {
  name: 'App',
  data() {
    return {
      nameComplete: "Anthony Vieira de Souza",
      clientAnthony: {
        nome: "Anthony Vieira de Souza",
        email: "anthony@gmail.com",
        idade: "23"
      },
      clientes: [
        {
          id: 1,
          nome: "Fulano Um",
          email: "fulanoum@gmail.com",
          idade: 101
        },
        {
          id: 2,
          nome: "Fulano Dois",
          email: "fulanodois@gmail.com",
          idade: 102
        },
        {
          id: 3,
          nome: "Fulano Três",
          email: "fulanotres@gmail.com",
          idade: 103
        },
        {
          id: 4,
          nome: "Fulano Quatro",
          email: "fulanoquatro@gmail.com",
          idade: 104
        },
      ]
    }
  },
  components: {
    ClienteVue
  }
}
</script>

<style>

</style>

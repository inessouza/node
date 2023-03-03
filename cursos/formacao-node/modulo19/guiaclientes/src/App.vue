<template>
  <div id="app">
    <h1>Módulo Vue JS</h1>
    <ClienteVue :cliente="clientAnthony"/>
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
      }
    }
  },
  components: {
    ClienteVue
  }
}
</script>

<style>

</style>

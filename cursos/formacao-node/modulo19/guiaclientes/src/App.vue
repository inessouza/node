<template>
  <div id="app">
    <h1>Módulo Vue JS</h1>
    <h3>Cadastro:</h3>
    <input type="text" placeholder="Nome" v-model="nameField"><br>
    <small id="error" v-if="valid">Nome Inválido, tente novamente!</small><br>
    <input type="email" placeholder="Email" v-model="emailField"><br><br>
    <input type="number" placeholder="Idade" v-model="ageField"><br><br>
    <button @click="registerUser">Cadastrar</button>
    <div v-for="(cliente, index) in clientes" :key="cliente.id">
      <h4>{{ index + 1 }}</h4>
      <ClienteVue :cliente="cliente" @meDelete="deleteUser($event)"/>
    </div>
  </div>
</template>

<script>
import ClienteVue from './components/ClienteVue'
export default {
  name: 'App',
  data() {
    return {
      nameField: "",
      emailField: "",
      ageField: 0,
      valid: false,
      nameComplete: "Anthony Vieira de Souza",
      clientAnthony: {
        name: "Anthony Vieira de Souza",
        email: "anthony@gmail.com",
        age: "23"
      },
      clientes: [
        {
          id: 1,
          name: "Fulano Um",
          email: "fulanoum@gmail.com",
          age: 101
        },
        {
          id: 2,
          name: "Fulano Dois",
          email: "fulanodois@gmail.com",
          age: 102
        },
        {
          id: 3,
          name: "Fulano Três",
          email: "fulanotres@gmail.com",
          age: 103
        },
        {
          id: 4,
          name: "Fulano Quatro",
          email: "fulanoquatro@gmail.com",
          age: 104
        },
      ]
    }
  },
  components: {
    ClienteVue
  },
  methods: {
    registerUser: function() {
      if (this.nameField === "" || this.nameField === " " || this.nameField.length < 3) {
        this.valid = true
      } else {
        this.clientes.push({ name: this.nameField, email: this.emailField, age: this.ageField, id: Date.now() })
        this.nameField = ""
        this.emailField = ""
        this.ageField = ""
      }
    },
    deleteUser: function($event) {
      console.log("Recebendo Evento")
      console.log($event)
    }
  }
}
</script>

<style>
  #error {
    color: red;
  }

</style>

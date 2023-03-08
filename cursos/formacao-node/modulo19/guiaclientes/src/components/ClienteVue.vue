<template>
    <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
        <h4>Nome: {{ cliente.name }}</h4>
        <p>Email: {{ cliente.email }}</p>
        <p v-if="showAge === true">Idade: {{ cliente.age }}</p>
        <p v-else>Idade do usuário é confidencial.</p>
        <button @click="changeColor($event)">Mudar cor!</button>
        <button @click="emitDeleteEvent">Deletar</button>
        <hr>
    </div>
</template>

<script>

export default {
    name: 'ClienteVue',
    data() {
        return {
            isPremium: false
        }
    },
    props: {
        cliente: Object,
        showAge: Boolean
    },
    methods: {
        changeColor: function($event) {
            console.log($event)
            this.isPremium = !this.isPremium
        },
        emitDeleteEvent: function() {
            console.log("Emitindo do Filho")
            this.$emit("meDelete")
        }
    }
}
</script>

<style scooped>
    .cliente {
        background-color: #D3D3D3;
        max-width: 600px;
        height: 200px;
        padding: 1%;
        margin-top: 2%;
    }
</style>

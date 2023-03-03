<template>
    <div id="cliente">
        <h4>Nome: {{ cliente.nome }}</h4>
        <hr>
        <p>Email: {{ cliente.email }}</p>
        <p v-if="showAge === true">Idade: {{ cliente.idade }}</p>
        <p v-else>Idade do usuário é confidencial.</p>
    </div>
</template>

<script>

export default {
    name: 'ClienteVue',
    data() {
        return {
        }
    },
    props: {
        cliente: Object,
        showAge: Boolean
    }
}
</script>

<style scooped>
    #cliente{
        background-color: #D3D3D3;
        max-width: 600px;
        height: 200px;
        padding: 1%;
        margin-top: 2%;
    }
</style>

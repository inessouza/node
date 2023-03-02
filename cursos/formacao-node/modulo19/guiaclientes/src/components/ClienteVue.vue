<template>
    <div id="cliente">
        <input type="text" :value="nome">
        <hr>
        <input type="text" :value="descricao">
        <h2>{{ nome }}</h2>
        <p>{{ descricao }}</p>
    </div>
</template>

<script>

export default {
    name: 'ClienteVue',
    data() {
        return {
            nome: "Inês",
            numero: "7",
            email: "inessouzasp@gmail.com",
            idade: 34,
            descricao: "Lorem Ipsum"
        }
    }
}
</script>

<style scooped>
    #cliente{
        color: blue;
        background-color: #D3D3D3;
    }
</style>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{ parameterOfRoute }}</h4>
  </div>
</template>

<script>
    export default {
        created() {
            this.parameterOfRoute = this.$route.params.id
        },
        data() {
          return {
            parameterOfRoute: "Nothing"
          }
        }
    }
</script>

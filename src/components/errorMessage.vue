<script>
export default {
  name: "errorMessage",
  props: {
    error: null
  }
}
</script>

<template>
  <div class="error--container">
    <h3>Error!</h3>
    <div>{{error}}</div>
  </div>
</template>

<style scoped lang="scss">
  .error--container {
    margin-top: 4em;
    display: flex;
    align-items: center;
    flex-flow: column ;
    min-height: calc(100vh - 13em);
    h3 {
      font-size: 4.5em;
    }
    div {
      font-size: 2em;
    }
  }
</style>

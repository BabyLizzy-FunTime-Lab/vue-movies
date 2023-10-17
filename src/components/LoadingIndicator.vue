<script>
import {useMovieStore} from "@/stores/MovieStore";
import getImages from "@/mixins/getImages";
export default {
  name: "LoadingIndicator",
  mixins: [getImages],
  data() {
    return {
      store: useMovieStore(),
    }
  }
}
</script>

<template>
    <div class="loading--container">
      <h3>Loading Movies...</h3>
      <img :src="getIconUrl('spinner.gif')" alt="Loading indicator...">
    </div>
</template>

<style scoped lang="scss">
  .loading--container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column ;
    min-height: calc(100vh - 5.5em);
  }
</style>

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

</template>

<style scoped>

</style>

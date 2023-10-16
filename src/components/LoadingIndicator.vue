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
    <div>
      <h3 style="margin: 0 auto;" >Loading Movies...</h3>
      <img :src="getIconUrl('spinner.gif')" alt="Loading indicator...">
    </div>
</template>

<style scoped>

</style>

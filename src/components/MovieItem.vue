<script>
import getImages from "@/mixins/getImages";
export default {
  name: "MovieItem",
  mixins: [getImages],
  data() {
    return {
      posterSrc: null
    }
  },
  props: {
    imgUrl: String,
    movieTitle: String,
    releaseYear: String,
    imDb: String
  },
  methods: {
    showDetails(imDb) {
      this.$router.push({
        name: 'movieDetails',
        params: {
          imDb: imDb
        }
      })
    }
  }
}
</script>

<template>
  <li class="list-group-item movie--item" @click="showDetails(imDb)">
    <img :src="checkPoster(this.imgUrl)" class="moviePoster" alt="Poster of the movie">
    <div>
      <h2>{{movieTitle}}</h2>
      <h3>{{releaseYear}}</h3>
    </div>
  </li>
</template>

<style lang="scss" scoped>
  .movie--item {
    display: flex;
    img {
      height: 9.5em;
      width: 6.5em;
      object-fit: contain;
      background-color: lightgray;
    }
    div {
      padding-left: 1em;
    }
  }
</style>

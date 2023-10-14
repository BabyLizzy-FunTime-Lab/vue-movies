<script>
import {useMovieStore} from "@/stores/MovieStore";

import MovieItem from "@/components/MovieItem.vue";
export default {
  name: "HomeView",
  components: {
    MovieItem
  },
  data() {
    return {
      store: useMovieStore(),
      searchTitle: ""
    }
  },
  methods: {
    searchMovie(movieTitle) {
      this.store.searchMovie(movieTitle);
    }
  }
}
</script>

<template>
  <div>
    <h1>Pinia Movies</h1>
    <div class="wrapper search--controls">
      <input @keyup.enter="searchMovie(searchTitle)" type="text" v-model="searchTitle" placeholder="Input movie name here">
      <button @click="searchMovie(searchTitle)" class="btn btn-success">Search movies</button>
      <button class="btn btn-danger">Clear</button>
    </div>
    <h4>Total hits: {{ store.getTotalSearchResults }}</h4>
    <ul class="list-group" v-if="store.getSearchResults && store.getSearchResults.length">
      <MovieItem
          v-for="movie of store.getSearchResults"
          :key="movie.imdbID"
          :img-url="movie.Poster"
          :movie-title="movie.Title"
          :release-year="movie.Year"/>
    </ul>
  </div>
</template>

<style scoped>
.search--controls {
  display: flex;
  column-gap: .5em;
  margin-bottom: 1em;
}
</style>

<script>
import {useMovieStore} from "@/stores/MovieStore";
import MovieItem from "@/components/MovieItem.vue";
import paginationControls from "@/components/paginationControls.vue";
import loadingIndicator from "@/components/LoadingIndicator.vue";

export default {
  name: "HomeView",
  components: {
    MovieItem,
    paginationControls,
    loadingIndicator
  },
  data() {
    return {
      store: useMovieStore(),
      searchTitle: "",
    }
  },
  methods: {
    searchMovieDefault(movieTitle) {
      this.store.searchMovie(movieTitle, 1);
    },
    clearResults() {
      this.store.clearResults();
    }
  },
  computed: {}
}
</script>

<template>
  <div>
    <h1>Pinia Movies</h1>
    <div class="wrapper search--controls">
      <input @keyup.enter="searchMovieDefault(searchTitle)" type="text"
             v-model="searchTitle" placeholder="Input movie name here">
      <button @click="searchMovieDefault(searchTitle)" class="btn btn-success">Search movies</button>
      <button @click="clearResults()" class="btn btn-danger">Clear</button>
    </div>
    <loading-indicator v-if="!this.store.getLoading"/>
    <div v-else-if="store.getSearchResults && store.getSearchResults.length">
      <h4>Total hits: {{ store.getTotalSearchResults }}</h4>
      <pagination-controls/>
      <ul class="list-group">
        <MovieItem
            v-for="movie of store.getSearchResults"
            :key="movie.imdbID"
            :img-url="movie.Poster"
            :movie-title="movie.Title"
            :release-year="movie.Year"/>
      </ul>
      <pagination-controls/>
    </div>
  </div>
</template>

<style scoped>
.search--controls {
  display: flex;
  column-gap: .5em;
  margin-bottom: 1em;
}
</style>

<script>
import {useMovieStore} from "@/stores/MovieStore";
import MovieItem from "@/components/MovieItem.vue";
import paginationControls from "@/components/paginationControls.vue";
import loadingIndicator from "@/components/LoadingIndicator.vue";
import errorMessage from "@/components/errorMessage.vue";

export default {
  name: "HomeView",
  components: {
    MovieItem,
    paginationControls,
    loadingIndicator,
    errorMessage
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
    <h1>Cine Rasmussen</h1>
    <div class="wrapper search--controls">
      <input @keyup.enter="searchMovieDefault(searchTitle)" type="text"
             v-model="searchTitle" placeholder="Input movie name here">
      <div class="search--controls__buttons">
        <button @click="searchMovieDefault(searchTitle)" class="btn btn-success">Search movies</button>
        <button @click="clearResults()" class="btn btn-danger">Clear</button>
      </div>
    </div>
    <loading-indicator v-if="!store.getLoading"/>
    <error-message v-else-if="store.getError" :error="store.getError"/>
    <div v-else-if="store.getSearchResults && store.getSearchResults.length">
      <h4>Total hits: {{ store.getTotalSearchResults }}</h4>
      <pagination-controls/>
      <ul class="movie--list list-group">
        <MovieItem
            v-for="movie of store.getSearchResults"
            :key="movie.imdbID"
            :im-db="movie.imdbID"
            :img-url="movie.Poster"
            :movie-title="movie.Title"
            :release-year="movie.Year"/>
      </ul>
      <pagination-controls/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search--controls {
  display: flex;
  flex-wrap: wrap;
  column-gap: .5em;
  row-gap: .5em;
  margin-bottom: 1em;
  input {
    width: 13em;
  }
  .search--controls__buttons {
    display: flex;
    column-gap: .5em;
    width: 13em;
  }
}
@media (max-width: 450px) {
  .search--controls__buttons {
    justify-content: space-between;
  }
}
.movie--list {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>

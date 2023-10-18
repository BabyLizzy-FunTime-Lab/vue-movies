<script>
import {useMovieStore} from "@/stores/MovieStore";
import loadingIndicator from "@/components/LoadingIndicator.vue";
import errorMessage from "@/components/errorMessage.vue";
import getImages from "@/mixins/getImages";
export default {
  name: "MovieDetailsView",
  mixins: [getImages],
  components: {
    loadingIndicator,
    errorMessage
  },
  data() {
    return {
      store: useMovieStore(),
      imDb: String,
      movieDetails: Object
    }
  },
  created() {
    this.imDb = this.$route.params.imDb;
    this.store.searchMovieDetails(this.imDb);
    this.movieDetails = this.store.getMovieDetails
  }
}
</script>

<template>
  <loading-indicator v-if="!store.getLoading"/>
  <error-message v-else-if="store.getDetailsError" :error="store.getDetailsError"/>
  <div class="movie--details" v-else-if="store.getMovieDetails">
    <h1>{{store.getMovieDetails.Title}} - {{store.getMovieDetails.Year}}</h1>
    <div class="img--plot--actors">
      <img :src="checkPoster(store.getMovieDetails.Poster)">
      <div>
        <h2>Plot:</h2>
        <p>{{store.getMovieDetails.Plot}}</p>
        <h2>Actors:</h2>
        <p>{{store.getMovieDetails.Actors}}</p>
        <h3>Awards:</h3>
        <p>{{store.getMovieDetails.Awards}}</p>
        <h3>Country:</h3>
        <p>{{store.getMovieDetails.Country}}</p>
        <h4>Rated: {{store.getMovieDetails.Rated}}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .movie--details {
    background-color: lightseagreen;
    border-radius: 1em;
    padding: 2em;
    margin-bottom: 2em;
    .img--plot--actors {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      column-gap: 1em;
      img {
        height: 29.5em;
        width: 19.5em;
        object-fit: cover;
        background-color: black;
        justify-self: center;
      }
      p {
        margin-top: .3em;
        margin-bottom: .5em;
      }
      h2, h3, h4 {
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 750px) {
    .movie--details{
      .img--plot--actors {
        grid-template-columns: none;
        grid-template-rows: auto auto;
        row-gap: 1em;
        img {
          width: 100%;
          max-width: 19.5em;
          height: auto;
          min-height: 29.5em;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .movie--details {
      padding-left: .5em;
      padding-right: .5em;
    }
    .img--plot--actors {
      img {
        max-height: 25em;
      }
    }
  }
</style>

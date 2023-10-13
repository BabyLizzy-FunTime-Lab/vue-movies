<script>
export default {
  name: "MovieItem",
  data() {
    return {
      posterSrc: null
    }
  },
  props: {
    imgUrl: String,
    movieTitle: String,
    releaseYear: String
  },
  methods: {
    checkPoster() {
      console.log(this.imgUrl);
      if (this.imgUrl === 'N/A') {
        // I don't understand why I couldn't use require here.
        // require is undefined.
        return '/images/no-image.jpg';
      } else {
        return this.imgUrl;
      }
    }
  }
}
</script>

<template>
  <li class="list-group-item movie--item">
    <img :src="checkPoster()" class="moviePoster" alt="Poster of the movie">
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

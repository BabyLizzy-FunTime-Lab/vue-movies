<script>
import {useMovieStore} from "@/stores/MovieStore";
export default {
  name: "paginationBtn",
  data () {
    return {
      store: useMovieStore()
    }
  },
  props: {
    pageNumber: Number
  },
  methods: {
    getNewPage(pageNumber) {
      this.store.getNewPage(pageNumber);
    }
  }
}
</script>

<template>
  <!--The current page will be highlighted.-->
  <li v-if="pageNumber === this.store.currentPage"
      @click="getNewPage(pageNumber)" class="page-item active">
    <a class="page-link" href="#">{{pageNumber}}</a>
  </li>
  <li v-else class="page-item" @click="getNewPage(pageNumber)">
    <a class="page-link" href="#">{{pageNumber}}</a>
  </li>
</template>

<style scoped>

</style>

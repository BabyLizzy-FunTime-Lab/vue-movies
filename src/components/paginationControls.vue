<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item disabled" @click="previous">
        <a class="page-link" tabindex="-1">Previous</a>
      </li>
      <pagination-btn
          v-for="btn of buttonArray"
          :page-number="btn"/>
      <li class="page-item" @click="next">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useMovieStore} from "@/stores/MovieStore";
import paginationBtn from "@/components/paginationBtn.vue";
export default {
  name: "paginationControls",
  components: {
    paginationBtn
  },
  data () {
    return {
      store: useMovieStore(),
      itemsPerPage: 10
    }
  },
  computed: {
    totalButtonPages() {
      return Math.ceil(this.store.getTotalSearchResults / this.itemsPerPage);
    },
    buttonArray() {
      let buttonArray = [];
      if(this.store.currentPage === 1) {
        for(let i = 1; i <= 3; i++) {
          if( i <= this.totalButtonPages ) {
            buttonArray.push(i);
          }
        }
        return buttonArray;
      }
      if(this.store.currentPage === this.totalButtonPages) {
        for(let i = this.totalButtonPages; i >= (this.totalButtonPages - 2); i--) {
          if(i > 0) {
            buttonArray.unshift(i);
          }
        }
        return buttonArray;
      }
      let previousPage = this.store.currentPage - 1;
      let nextPage = this.store.currentPage + 1;
      buttonArray = [previousPage, this.store.currentPage, nextPage];
      return buttonArray;
    }
  },
  methods: {
    previous() {
      for (let i = 3; i >= 1; i--) {
        if (this.store.currentPage === this.totalButtonPages && this.totalButtonPages >= 6) {
          this.store.currentPage -= 4;
          break;
        }
        if ((this.store.currentPage - i - 1) >= 1) {
          this.store.currentPage -= i;
          break;
        }
      }
      this.store.getNewPage(this.store.currentPage);
    },
    next() {
      for (let i = 3; i >= 1; i--) {
        if(this.store.currentPage === 1 && this.totalButtonPages >= 6) {
          this.store.currentPage += 4;
          break;
        }
        if((this.store.currentPage + i + 1) <= this.totalButtonPages) {
          this.store.currentPage += i;
          break;
        }
      }
      this.store.getNewPage(this.store.currentPage);
    }
  }
}
</script>

<style scoped>

</style>

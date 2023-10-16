import {defineStore} from "pinia";
import axios from "axios";
const baseDataURL = 'http://www.omdbapi.com/?apikey=5fd91ecf&';
const baseImgURL = 'http://img.omdbapi.com/?apikey=5fd91ecf&';

export const useMovieStore= defineStore('movies', {
    state: () => {
        return {
            loadingStatus: 'notLoading',
            searchResults: [],
            totalSearchResults: Number,
            movieDetails: [],
            currentPage: Number,
            currentSearch: String,
            errors: null
        }
    },
    actions: {
        searchMovie(movieTitle, pageNumber) {
            this.loadingStatus = 'loading';
            // Search movies by. It returns an array
            let searchURL = baseDataURL + "type=movie&page=" + pageNumber + '&s=' + movieTitle
            axios.get(searchURL).then(result => {
                this.loadingStatus = 'notLoading';
                this.totalSearchResults = result.data.totalResults;
                this.searchResults = result.data.Search;
                this.currentPage = pageNumber;
                this.currentSearch = movieTitle;
                console.log("searching...");
                console.log(result.data.Search);
            })
            .catch(err => {
                this.loadingStatus = 'notLoading';
                this.totalSearchResults = "0";
                this.searchResults = [];
                this.errors = err;
            })
        },
        clearResults() {
            this.totalSearchResults = "0";
            this.searchResults = [];
            this.errors = null;
        },
        getNewPage(pageNumber) {
            this.searchMovie(this.currentSearch, pageNumber);
        }
    },
    getters: {
        getSearchResults() {
            return this.searchResults;
        },
        getTotalSearchResults() {
            return this.totalSearchResults;
        },
        getLoading() {
            return this.loadingStatus === 'notLoading';
        }
    }
})

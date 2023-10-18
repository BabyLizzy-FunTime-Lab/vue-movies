import {defineStore} from "pinia";
import axios from "axios";
const baseDataURL = 'https://www.omdbapi.com/?apikey=5fd91ecf&';
const baseImgURL = 'https://img.omdbapi.com/?apikey=5fd91ecf&';

export const useMovieStore= defineStore('movies', {
    state: () => {
        return {
            loadingStatus: 'notLoading',
            searchResults: [],
            totalSearchResults: Number,
            movieDetails: Object,
            currentPage: Number,
            currentSearch: String,
            errors: null,
            detailsErrors: null
        }
    },
    actions: {
        searchMovie(movieTitle, pageNumber) {
            this.loadingStatus = 'loading';
            // Search movies by. It returns an array
            let searchURL = baseDataURL + "type=movie&page=" + pageNumber + '&s=' + movieTitle;
            axios.get(searchURL)
                .then(result => {
                    this.loadingStatus = 'notLoading';
                    // The Status code is always 200 so I had to include this to catch bad results.
                    if(result.data["Response"] === 'False') {
                        console.warn("There was a problem with the search: " + result.data["Error"]);
                        this.errors = result.data['Error'];
                    } else {
                        this.totalSearchResults = result.data.totalResults;
                        this.searchResults = result.data.Search;
                        this.currentPage = pageNumber;
                        this.currentSearch = movieTitle;
                        this.errors = null;
                        console.log("Search OK");
                    }
                })
                .catch(err => {
                    console.log(err);
                    console.log("we got an error");
                    this.loadingStatus = 'notLoading';
                    this.totalSearchResults = "0";
                    this.searchResults = [];
                    this.errors = err;
                })
        },
        searchMovieDetails(imDb) {
            this.loadingStatus = 'loading';
            let searchURL = baseDataURL + 'i=' + imDb;
            axios.get(searchURL).then(result => {
                this.loadingStatus = 'notLoading';
                // The Status code is always 200 so I had to include this to catch bad results.
                if(result.data["Response"] === 'False') {
                    console.warn("There was a problem with the details search: " + result.data["Error"]);
                    this.detailsErrors = result.data['Error'];
                } else {
                    this.movieDetails = result.data;
                    this.detailsErrors = null;
                    console.log("Details Search OK");
                }
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
        getMovieDetails() {
            return this.movieDetails;
        },
        getTotalSearchResults() {
            return this.totalSearchResults;
        },
        getLoading() {
            return this.loadingStatus === 'notLoading';
        },
        getError() {
            return this.errors;
        },
        getDetailsError() {
            return this.detailsErrors;
        }
    }
})

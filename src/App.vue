<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import {store} from "./store";

export default {
    components: { AppHeader, AppMain },
    data() {
        return {
            store
        };
    },
    methods: {
        handleSearch () {
            this.getMovies();
            this.getTvSeries();            
        },
        getMovies() {
            axios.get (this.store.apiMovieURL, {
                params: {
                    api_key: this.store.apiKey,
                    query: this.store.searchedTitle,
                }
            }).then((resp) => {
                console.log(resp);
                this.store.movies = resp.data.results
                this.store.searchedTitle = ""
            })
        },
        getTvSeries() {
            axios.get (this.store.apiTvSeriesURL, {
                params: {
                    api_key: this.store.apiKey,
                    query: this.store.searchedTitle,
                }
            }).then((resp) => {
                console.log(resp);
                this.store.tvSeries = resp.data.results
                this.store.searchedTitle = ""
            })

        }
    } 
} 
</script>

<template>
    <div class="ms_wrapper">
        <AppHeader @search="handleSearch" />
        <AppMain />
    </div>
</template>

<style lang="scss">
@use "./styles/general.scss"

</style>
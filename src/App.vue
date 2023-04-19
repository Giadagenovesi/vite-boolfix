<script>

import AppHeader from "./components/AppHeader.vue";
import axios from "axios";
import {store} from "./store";

export default {
    components: { AppHeader },
    data() {
        return {
            store
        };
    },
    methods: {
        handleSearch () {
            axios.get (this.store.apiMovieURL, {
                params: {
                    apy_key: this.store.apiKey,
                    query: this.store.searchedTitle,
                }
            }).then((resp) => {
                console.log(resp);
                this.store.movies = resp.data.results
            })
        }
    } 
}
  
</script>

<template>
    <AppHeader @search="handleSearch" />
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>
<script>

import AppHeader from "./components/AppHeader.vue";
import {store} from "./store";
import axios from "axios"

export default {
    components: { AppHeader },
    data() {
        return {
            store
        };
    },
    methods: {
        handleSearch () {
            axios.get (apiMovieURL, {
                params: {
                    apy_key: "f576b5c37c837406903a68c263e7d8cf",
                    query: this.store.searchedTitle,
                }
            }).then((resp) => {
                console.log(resp);
                this.store.movies = resp.data.result
            })
        }
    } 
}
  
</script>

<template>
    <AppHeader />
    <div @search="handleSearch"></div>
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>
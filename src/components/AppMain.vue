<script>
import { store } from '../store';
export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h2>Film</h2>
    <ul>
        <li v-for="movie in store.movies">
            <h4>{{ movie.title }} </h4>
            <h5>{{ movie.original_title }} </h5>
            <h6>{{ movie.original_language }}</h6>
            <p>{{ movie.vote_average }}</p>
        </li>
    </ul>
</template>

<style>
</style>

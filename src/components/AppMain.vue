<script>
import MovieCard from './MovieCard.vue';
import SeriesCard from './SeriesCard.vue';
import { store } from '../store';
export default {
    name: "AppMain",
    components: {
        MovieCard,
        SeriesCard
    },
    data() {
        return {
            store,
        }
    }, 
}
</script>

<template>
    <div class="container">
        <h2>Film</h2>
        <div class="container-fluid">
            <div class="row row-cols-4">
                <div class="col mb-4" v-for="movie in store.movies">
                    <MovieCard :movie="movie"/>
                </div>
            </div>
        </div>
        <h2>TV Series</h2>
        <div class="container-fluid">
            <div class="row row-cols-4">
                <div class="col mb-4" v-for="series in store.tvSeries">
                    <SeriesCard :series="series"/>
                </div>
            </div>
        </div>
    </div>
</template>



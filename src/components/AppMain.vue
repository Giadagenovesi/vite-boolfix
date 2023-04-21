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
    <main>
        <div class="container">
        <h2 class="mb-3">FILM</h2>
        <div class="container-fluid">
            <div class="row row-cols-4">
                <div class="col mb-4" v-for="movie in store.movies">
                    <MovieCard :movie="movie"/>
                </div>
            </div>
        </div>
        <h2 class="mb-3">SERIE TV</h2>
        <div class="container-fluid">
            <div class="row row-cols-4">
                <div class="col mb-4" v-for="series in store.tvSeries">
                    <SeriesCard :series="series"/>
                </div>
            </div>
        </div>
        </div>
    </main>
    
</template>

<style scoped lang="scss">
    main{
        height: calc(100% - 80px);
        padding-top: 7rem;
        h2 {
            color: #dc3545;
        }
    }
</style>



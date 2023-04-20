<script>
import { store } from '../store';
export default {
    name: "AppMain",
    data() {
        return {
            store,
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
            <div>
                <img src="../assets/img/italy-flag.png" alt="" v-if="movie.original_language === 'it'">
                <img src="../assets/img/usa-flag.jpg" alt="" v-else-if="movie.original_language === 'en'">
                <img src="../assets/img/france-flag.png" alt="" v-else-if="movie.original_language === 'fr'">
                <h6 v-else>{{ movie.original_language }}</h6>
            </div>
            <p>{{ movie.vote_average }}</p>
        </li>
    </ul>
    <h2>TV Series</h2>
    <ul>
        <li v-for="series in store.tvSeries">
            <h4>{{ series.name }} </h4>
            <h5>{{ series.original_name }} </h5>
            <div>
                <img src="../assets/img/italy-flag.png" alt="" v-if="series.original_language === 'it'">
                <img src="../assets/img/usa-flag.jpg" alt="" v-else-if="series.original_language === 'en'">
                <img src="../assets/img/france-flag.png" alt="" v-else-if="series.original_language === 'fr'">
                <h6 v-else>{{ series.original_language }}</h6>
            </div>
            <p>{{ series.vote_average }}</p>
        </li>
    </ul> 
</template>

<style scoped lang="scss">
img {
    width: 30px;
}
</style>

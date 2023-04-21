<script>
import { store } from '../store';

export default {
    name: "MovieCard",
    props: {
        movie: Object
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL (imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card movie-card">
        <div class="ms_card-img">
            <img :src="getImagePath(`${store.imageURL}${movie.poster_path}`)" alt="" v-if="movie.poster_path">
            <img src="../assets/img/No-Image-Placeholder.svg.png" alt="" v-else>
        </div>
        <div class="card-body">
            <h4>{{ movie.title }} </h4>
            <h5>{{ movie.original_title }} </h5>
            <div>
                <span v-if="movie.original_language === 'it'">Lingua: <img src="../assets/img/italy-flag.png" alt="" ></span>
                <span v-else-if="movie.original_language === 'en'">Lingua: <img src="../assets/img/usa-flag.jpg" alt="" ></span> 
                <span v-else-if="movie.original_language === 'fr'">Lingua: <img src="../assets/img/france-flag.png" alt="" ></span>
                <h6 v-else>Lingua:{{ movie.original_language }}</h6>
            </div>
            <p>{{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card{
    height: 100%;
}
.ms_card-img img {
    max-width: 100%;
}
.card-body img {
    width: 30px;
}
</style>
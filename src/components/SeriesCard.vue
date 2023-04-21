<script>
import { store } from '../store';

export default {
    name: "SeriesCard",
    props: {
        series: Object,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL (imgPath, import.meta.url).href;
        }
    },
    computed: {
        getRatingTvSeries() {
            return Math.ceil(this.series.vote_average/ 2)
        }
    }
}
</script>

<template>
    <div class="card series-card">
        <div class="poster">
            <img :src="getImagePath(`${store.imageURL}${series.poster_path}`)" alt="" v-if="series.poster_path">
            <img src="../assets/img/No-Image-Placeholder.svg.png" alt="" v-else>
        </div>
        <div class="ms_card-info">
            <h5>Titolo: {{ series.name }} </h5>
            <h6>Titolo Originale: {{ series.original_name }} </h6>
            <div class="language">
                <span v-if="series.original_language === 'it'">Lingua: <img src="../assets/img/italy-flag.png" alt="" ></span>
                <span v-else-if="series.original_language === 'en'">Lingua: <img src="../assets/img/usa-flag.jpg" alt="" ></span>
                <span v-else-if="series.original_language === 'fr'">Lingua: <img src="../assets/img/france-flag.png" alt="" ></span>
                <h6 v-else>Lingua: {{ series.original_language }}</h6>
            </div>
            <div class="rating">
                <p>Valutazione: {{ getRatingTvSeries}}</p>
                <i v-for="num in getRatingTvSeries" :key="num" class="fa-solid fa-star"></i>
                <i v-for="num in (5 - getRatingTvSeries)" class="fa-regular fa-star"></i>
            </div>
            <p> {{ series.overview }}</p>

        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 100%;
    position: relative;
    border: 5px solid white;
}
.poster img {
    max-width: 100%;
}
.language img {
    width: 30px;
}
.ms_card-info {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    padding: .3rem;
    font-size: .8rem;
    background-color: black;
    color: white;
    height: 100%;
    overflow-y: auto;
}
.card:hover {
    z-index: 2;
}
.card:hover .poster {
    z-index: -1;
}
.rating i {
    color: #ffbd00;
    margin: .3rem;
} 
</style>
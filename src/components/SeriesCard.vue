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
        <div class="ms_card-img">
            <img :src="getImagePath(`${store.imageURL}${series.poster_path}`)" alt="" v-if="series.poster_path">
            <img src="../assets/img/No-Image-Placeholder.svg.png" alt="" v-else>
        </div>
        <div class="card-body">
            <h4>{{ series.name }} </h4>
            <h5>{{ series.original_name }} </h5>
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
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 100%;
}
.ms_card-img img {
    max-width: 100%;
}
.card-body img {
    width: 30px;
}
</style>
import { reactive }  from "vue";

export const store = reactive({
   movies: [],
   tvSeries: [],
   apiKey: "f576b5c37c837406903a68c263e7d8cf", 
   apiMovieURL: "https://api.themoviedb.org/3/search/movie",
   apiTvSeriesURL: "https://api.themoviedb.org/3/search/tv",
   searchedTitle: "", 
});
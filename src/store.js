import { reactive }  from "vue";

export const store = reactive({
   movies: [],
   tvSeries: [], 
   apiMovieURL: "https://api.themoviedb.org/3/search/movie",
   apiTvSeriesURL: "https://api.themoviedb.org/3/search/tv",
   searchedTitle :"", 
});
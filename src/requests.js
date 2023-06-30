const API_KEY = "69e00b68d84bed6323001210c2e54598";

const requests = {
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}$with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}$with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}$with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}$with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}$with_genres=99`,
};

export default requests;

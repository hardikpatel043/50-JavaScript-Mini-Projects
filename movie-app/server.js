const API_KEY = '5dbc8aa7d72959322f794d4d9a60edeb';
const BASE_URL = 'https://api.themoviedb.org/3';

export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

export const BY_POPULARITY = '/discover/movie';
export const SEARCH = '/search/movie';

export async function getMovies(url, param = null) {
  const responseData = await fetch(
    `${BASE_URL}${url}?api_key=${API_KEY}&${param}`
  );

  const jsonResponse = await responseData.json();

  return jsonResponse.results;
}

export async function getPopularMovies() {
  const param = 'sort_by=popularity.desc';

  return await getMovies(BY_POPULARITY, param);
}

export async function searchMovies(searchTerm) {
  const param = `query=${searchTerm}`;
  return await getMovies(SEARCH, param);
}

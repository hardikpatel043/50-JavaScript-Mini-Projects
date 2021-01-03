import { IMAGE_PATH, getPopularMovies, searchMovies } from './server.js';

const movieContainerElement = document.getElementById('movieapp');
const searchFormElement = document.getElementById('search-form');
const searchElement = document.getElementById('search');

const movies = getPopularMovies();

movies.then((data) => {
  data.forEach((movie) => {
    updateDisplay(movie);
  });
});

searchFormElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchElement.value;

  const movies = searchMovies(searchTerm);
  movieContainerElement.innerHTML = '';

  movies.then((data) => {
    data.forEach((movie) => {
      updateDisplay(movie);
    });
  });
});

function updateDisplay(movie) {
  const { poster_path, title, vote_average } = movie;
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');

  movieElement.innerHTML = `
            <img
                    src="${IMAGE_PATH + poster_path}"
                    alt=""
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                  vote_average
                )}">${vote_average}</span>
            </div>
    `;
  movieContainerElement.appendChild(movieElement);
}

function getClassByRate(vote) {
  return vote > 8 ? 'green' : vote > 6 ? 'orange' : 'red';
}

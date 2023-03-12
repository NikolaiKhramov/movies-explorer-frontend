import { shortMovieDuration, movieImageUrl } from "./constants";

export function filterMovies(movies, keyWord, isShort) {
  const keyWordUnified = keyWord.toLowerCase();

  const moviesFiltered = movies.filter((movie) => {
    const movieNameRu = movie.nameRU && movie.nameRU.toLowerCase();
    const movieNameEn = movie.nameEN && movie.nameEN.toLowerCase();

    if (isShort) {
      return ( movie.duration <= shortMovieDuration && (movieNameRu.includes(keyWordUnified) || movieNameEn.includes(keyWordUnified)) )
    } else return (movieNameRu.includes(keyWordUnified) || movieNameEn.includes(keyWordUnified))
  })

  return moviesFiltered;
}

export function handleMovieData(movies) {
  return movies.map((movie) => ({
        country: movie.country || 'country',
        director: movie.director || 'director',
        duration: movie.duration || 60,
        year: movie.year || 2023,
        description: movie.description || 'description',
        image: `${movieImageUrl}/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${movieImageUrl}/${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU || 'Название фильма',
        nameEN: movie.nameEN || 'Title',
  }))
}

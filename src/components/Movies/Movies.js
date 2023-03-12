import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Searchform from '../SearchForm/Searchform';
import Moviescardlist from '../MoviesCardList/Moviescardlist';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import { filterMovies, handleMovieData } from '../../utils/SearchFunctionality';
import { notFoundMessage, searchErrorMessage } from '../../utils/constants';

function Movies({ isLogged }) {

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const defaultMoviesStoraged = JSON.parse(localStorage.getItem('defaultMoviesStoraged')) || [];

  useEffect(() => {
    const foundMoviesStoraged = JSON.parse(localStorage.getItem('foundMoviesStoraged')) || [];
    const keyWordStoraged = localStorage.getItem('keyWordStoraged') || '';
    const isShortStoraged = JSON.parse(localStorage.getItem('isShortStoraged')) || false;

    foundMoviesStoraged && setSearchedMovies(foundMoviesStoraged);
    keyWordStoraged && setKeyWord(keyWordStoraged);
    isShortStoraged && setIsShortMovies(isShortStoraged);
  }, []);

  function getFilteredMovies(keyWord, isShortMovies) {
    if (!defaultMoviesStoraged.length) {
      setIsLoading(true);
      moviesApi.getAllMovies()
        .then((allMovies) => {
          const moviesAdapted = handleMovieData(allMovies);
          localStorage.setItem('defaultMoviesStoraged', JSON.stringify(moviesAdapted));
          const filteredMovies = keyWord
            ? filterMovies(moviesAdapted, keyWord, isShortMovies)
            : [];
          handleFilterResult(filteredMovies);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(searchErrorMessage);
        })
        .finally(() => setIsLoading(false));
    } else {
      const filteredMovies = keyWord
        ? filterMovies(defaultMoviesStoraged, keyWord, isShortMovies)
        : [];
      handleFilterResult(filteredMovies);
    }
  };

  function handleFilterResult(movies) {
    setSearchedMovies(movies);
    localStorage.setItem('foundMoviesStoraged', JSON.stringify(movies));
    movies.length === 0
      ? setErrorMessage(notFoundMessage)
      : setErrorMessage('');
  }

  function handleSubmitSearch(keyWord) {
    setKeyWord(keyWord);
    localStorage.setItem('keyWordStoraged', keyWord);
    getFilteredMovies(keyWord, isShortMovies);
  };

  function handleChangeCheckbox(isChecked) {
    setIsShortMovies(isChecked);
    localStorage.setItem('isShortStoraged', isChecked);
    getFilteredMovies(keyWord, isChecked);
  };

  function renderMoviesSection() {
    if (errorMessage.length) {
      return <p className='search-form__message'>{errorMessage}</p>;
    }
    return (
      <Moviescardlist movies={searchedMovies} />
    )
  };

  return (
    <>
      <Header
        isLogged={isLogged}
      />
      <Searchform
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCheckbox={handleChangeCheckbox}
        showError={setErrorMessage}
        isLoading={isLoading}
      />
      {isLoading ? <Preloader /> : renderMoviesSection()}
      <Footer />
    </>
  )
}

export default Movies;

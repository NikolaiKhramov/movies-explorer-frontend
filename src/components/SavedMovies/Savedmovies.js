import Header from "../Header/Header";
import Searchform from '../SearchForm/Searchform';
import Moviescardlist from '../MoviesCardList/Moviescardlist';
import Footer from "../Footer/Footer";
import { filterMovies } from "../../utils/SearchFunctionality";
import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { noSavedMovies, notFoundMessage } from "../../utils/constants";

function Savedmovies({ isLogged }) {

  const { savedMovies } = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useState({
    keyWord: '',
    isShort: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  function getFilteredMovies(keyWord, isShort) {
    const filteredMovies = filterMovies(savedMovies, keyWord, isShort);
    filteredMovies.length === 0 ? setErrorMessage(notFoundMessage) : setErrorMessage('');
    setMovies(filteredMovies);
  };

  useEffect(() => {
    setMovies(savedMovies);
    getFilteredMovies(searchParams.keyWord, searchParams.isShort);
    !savedMovies.length ? setErrorMessage(noSavedMovies) : setErrorMessage('');
  }, [savedMovies]);

  function handleSubmitSearch(word) {
    setSearchParams({...searchParams, keyWord: word});
    getFilteredMovies(word, searchParams.isShort);
  };

  function handleChangeCheckbox(isChecked) {
    setSearchParams({...searchParams, isShort: isChecked});
    getFilteredMovies(searchParams.keyWord, isChecked);
  };

  function renderMoviesSection() {
    if (errorMessage.length) {
      return <p className='search-form__message'>{errorMessage}</p>;
    }
    return (
      <Moviescardlist movies={movies} />
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
      />
      {renderMoviesSection()}
      <Footer />
    </>
  )
}

export default Savedmovies;

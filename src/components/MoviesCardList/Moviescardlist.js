import { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Moviescard from '../MoviesCard/Moviescard';
import useWindowSize from '../../hooks/useWindowSize';
import {
  mobileWidth,
  mobileCardsAmount,
  tabletWidth,
  tabletCardsAmount,
  defaultWidthSmall,
  defaultCardsSmall,
  defaultCardsAmount,
} from '../../utils/constants';

function Moviescardlist({ movies }) {

  const { pathname } = useLocation();
  const { savedMovies } = useContext(CurrentUserContext);
  const [amountToRender, setAmountToRender] = useState(0);
  const [showMoreState, setShowMoreState] = useState(false);
  const windowWidth = useWindowSize();

  useEffect(() => {
    if (windowWidth <= mobileWidth) {
      setAmountToRender(mobileCardsAmount);
    } else if (windowWidth <= tabletWidth) {
      setAmountToRender(tabletCardsAmount);
    } else if (windowWidth <= defaultWidthSmall) {
      setAmountToRender(defaultCardsSmall)
    } else {
      setAmountToRender(defaultCardsAmount);
  }
  }, [windowWidth])

  useEffect(() => {
    if (pathname === '/movies' && movies.length > amountToRender) {
      setShowMoreState(true);
    } else {
      setShowMoreState(false);
    }
  }, [movies, amountToRender, pathname]);

  function handleShowMore() {
    setAmountToRender((currentAmount) => {
      if (windowWidth < tabletWidth) {
        return currentAmount + 2
      } else if (windowWidth <= defaultWidthSmall) {
        return currentAmount + 3
      } else {
        return currentAmount + 4
      }
    })
  }

  function checkIsSaved(movie) {
    const targetMovie = savedMovies.find((film) => film.movieId === movie.movieId);
    return targetMovie
      ? { isSaved: true, id: targetMovie._id }
      : { isSaved: false, id: '' }
  };

  function renderMovieCards() {
    if (pathname === '/movies') {
      return movies.length ? movies.slice(0, amountToRender).map((movie) => (
        <Moviescard
          key={movie.movieId}
          movie={movie}
          saveStatus={checkIsSaved(movie)}
        />
      )) : '';
    } else {
      return movies.length ? movies.map((movie) => (
        <Moviescard
          key={movie.movieId}
          movie={movie}
          saveStatus={{ isSaved: true, id: movie._id }}
        />
      )) : '';
    }
  };

  return (
    <section className="movies">
      <ul className="movies__list">
        {renderMovieCards()}
      </ul>
      {showMoreState ?
          <button
            className='movies__button'
            type='button'
            onClick={handleShowMore}
          >
            Ещё
          </button> : ''}
    </section>
  )
}

export default Moviescardlist;

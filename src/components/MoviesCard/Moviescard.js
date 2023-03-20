import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';

function Moviescard({ movie, saveStatus }) {

  const { nameRU, nameEN, trailerLink, thumbnail, duration } = movie;
  const { pathname } = useLocation();
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [mainApiId, setMainApiId] = useState('');

  useEffect(() => {
    setIsSaved(saveStatus.isSaved);
    setMainApiId(saveStatus.id);
  }, [saveStatus]);


  function handleSaveMovie() {
    mainApi.saveMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  function handleDeleteMovie() {
    mainApi.deleteMovie(mainApiId)
      .then(() => {
        setSavedMovies(savedMovies.filter((data) => {
          return !(data._id === mainApiId);
        }));
        setIsSaved(false);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  function calcDuration(duration) {
    let hours = Math.trunc(duration/60);
    let minutes = duration % 60;

    return `${hours ? hours + 'ч ' + minutes + 'мин' : minutes + ' мин'}`
  }

  const buttonClassInMovies = `movie__button movie__button_default ${isSaved && pathname === '/movies' && 'movie__button_liked'}`;
  const buttonClassinSaved = `movie__button ${pathname === '/saved-movies' && 'movie__button_remove'}`;
  const movieDuration = calcDuration(duration);

  return (
    <li className="movie">
      <a href={trailerLink} className="movie__container movie__container_type_image" target="_blank" rel="noreferrer">
        <img src={thumbnail} alt="Обложка фильма" className="movie__image" />
      </a>
      <div className="movie__container movie__container_type_info">
        <h2 className="movie__title">{nameRU || nameEN}</h2>
          {(pathname === "/movies") && <button className={buttonClassInMovies} onClick={isSaved ? handleDeleteMovie : handleSaveMovie}></button>}
          {(pathname === "/saved-movies") && <button className={buttonClassinSaved} onClick={handleDeleteMovie}></button>}
      </div>
      <p className="movie__duration">{movieDuration}</p>
    </li>
  )
}

export default Moviescard;

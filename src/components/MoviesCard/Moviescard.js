import image from '../../images/cardimage.png';
import { useLocation } from 'react-router-dom';

function Moviescard({isLiked}) {

  const location = useLocation();

  const likeClassName = `movie__button ${isLiked ? 'movie__button_liked' : ''}`;

  return (
    <li className="movie">
      <div className="movie__container movie__container_type_image">
        <img src={image} alt="Обложка фильма" className="movie__image" />
      </div>
      <div className="movie__container movie__container_type_info">
        <h2 className="movie__title">В погоне за Бенкси</h2>
        {location.pathname === '/movies' && (
          <button type="button" className={likeClassName} />
        )}
        {location.pathname === '/saved-movies' && (
          <button type="button" className="movie__button movie__button_remove" />
        )}
      </div>
      <p className="movie__duration">1ч 42м</p>
    </li>
  )
}

export default Moviescard;

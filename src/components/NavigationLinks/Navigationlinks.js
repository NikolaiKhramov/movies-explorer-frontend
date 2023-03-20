import { NavLink } from "react-router-dom"

function Navigationlinks({ isMobile, onClose }) {

  return (
    <>
    <ul className="navigation__list">
      {isMobile ?
        <>
        <button className="navigation__close-icon" type="button" onClick={onClose}/>
        <li className="navigation__list-item">
          <NavLink to="/" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
            Главная
          </NavLink>
        </li>
        </> : null
      }
      <li className="navigation__list-item">
        <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
          Фильмы
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
          Сохранённые фильмы
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink to="/profile" className={({isActive}) => `navigation__link navigation__link_account ${isActive ? "navigation__link_active" : ""}`}>
          Аккаунт
          <div className="navigation__account-icon"/>
        </NavLink>
      </li>
    </ul>
    </>
  )
}

export default Navigationlinks;

import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({isLogged}) {

  const headerClass = `header ${isLogged ? 'header_type_logged' : 'header_type_default'}`;

  return (
    <header className={headerClass}>
      <div className="header__container">
        <Link to="/" className="header__link">
          <img src={logo} className="header__logo" alt="Логотип проекта" />
        </Link>
        <Navigation
          isLogged={isLogged}
        />
      </div>
    </header>
  )
}

export default Header;

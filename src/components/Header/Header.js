import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({isLogged}) {

  const headerClass = `header ${isLogged ? 'header_type_logged' : 'header_type_default'}`;

  return (
    <header className={headerClass}>
      <Link to="/" className="header__link">
        <img src={logo} className="header__logo" alt="Логотип проекта" />
      </Link>
        <Navigation
          isLogged={isLogged}
        />
    </header>
  )
}

export default Header;

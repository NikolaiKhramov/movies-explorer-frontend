import { Link } from "react-router-dom";
import Navigationlinks from "../NavigationLinks/Navigationlinks";
import Navigationmobile from "../NavigationMobile/Navigationmobile";

function Navigation({isLogged}) {

  const navClassName = `navigation ${isLogged ? 'navigation_type_logged' : 'navigation_type_default'}`;

  return (
    <div className="navigation-container">

      {isLogged &&
        <>
        <nav className={navClassName}>
          <Navigationlinks />
        </nav>
        <Navigationmobile />
        </>
      }

      {!isLogged &&
        <nav className={navClassName}>
          <Link to="/signup" className="navigation__signup">Регистрация</Link>
          <Link to="/signin" className="navigation__signin">Войти</Link>
        </nav>
      }

    </div>
  )
}

export default Navigation;

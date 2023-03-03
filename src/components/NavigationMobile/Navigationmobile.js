import { useState } from "react";
import Navigationlinks from "../NavigationLinks/Navigationlinks";

function Navigationmobile() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuState() {
    setIsMenuOpen(!isMenuOpen);
  }

  const visibilityState = isMenuOpen ? 'navigation__layout_active' : '';

  return (
    <nav className="navigation navigation_type_mobile">
      <div className="navigation__menu-icon"
        onClick={handleMenuState}
      />
      <div className={`navigation__layout ${visibilityState}`} />
      { isMenuOpen && <Navigationlinks isMobile={true} onClose={handleMenuState}/>}
    </nav>
  )
}

export default Navigationmobile;

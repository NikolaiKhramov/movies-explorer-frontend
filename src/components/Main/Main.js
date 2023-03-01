import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Navtab from "../NavTab/Navtab";
import Aboutproject from "../AboutProject/Aboutproject";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main({isLogged}) {
  return (
    <>
      <Header
        isLogged={isLogged}
      />
      <main className="main">
        <Promo />
        <Navtab />
        <Aboutproject />
        <Techs />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main;

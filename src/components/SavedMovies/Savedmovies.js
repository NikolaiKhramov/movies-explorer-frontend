import Header from "../Header/Header";
import Searchform from '../SearchForm/Searchform';
import Moviescardlist from '../MoviesCardList/Moviescardlist';
import Moviescard from '../MoviesCard/Moviescard';
import Footer from "../Footer/Footer";

function Savedmovies({ isLogged }) {
  return (
    <>
      <Header
        isLogged={!isLogged}
      />
      <Searchform />
      <Moviescardlist>
        <Moviescard
          isLiked={true}
        />
        <Moviescard />
      </Moviescardlist>
      <Footer />
    </>
  )
}

export default Savedmovies;

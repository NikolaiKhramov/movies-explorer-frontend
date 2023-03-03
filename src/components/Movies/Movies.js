import Header from '../Header/Header';
import Searchform from '../SearchForm/Searchform';
import Moviescardlist from '../MoviesCardList/Moviescardlist';
import Moviescard from '../MoviesCard/Moviescard';
import Footer from '../Footer/Footer';

function Movies({isLogged}) {
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
        <Moviescard />
        <Moviescard />
        <Moviescard />
      </Moviescardlist>
      <Footer />
    </>
  )
}

export default Movies;

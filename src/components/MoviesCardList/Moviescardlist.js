import { useLocation } from "react-router-dom";

function Moviescardlist({ children }) {

  const location = useLocation();

  return (
    <section className="movies">
      <ul className="movies__list">
        { children }
      </ul>
      {location.pathname === '/movies' && (
        <button type="button" className="movies__button">Ещё</button>
      )}

    </section>
  )
}

export default Moviescardlist;

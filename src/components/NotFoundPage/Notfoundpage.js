import { useNavigate } from "react-router-dom";

function Notfoundpage() {

  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <button
        type="button"
        className="not-found__button"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </div>
  )
}

export default Notfoundpage;



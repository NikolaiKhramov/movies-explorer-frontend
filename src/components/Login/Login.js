import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="authentication">
      <Link to="/" className="authentication__logo" />
      <h2 className="authentication__title">Рады видеть!</h2>
      <form className="authentication__form form">
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            className="form__input"
            placeholder="pochta@yandex.ru"
            required
          />
          <span className="form__error"></span>
        </fieldset>
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="password">Пароль</label>
          <input
            type="password"
            name="password"
            className="form__input"
            required
          />
          <span className="form__error"></span>
        </fieldset>
        <button
          type="submit"
          className="authentication__button authentication__button_type_signin"
        >
          Войти
        </button>
      </form>
      <span className="authentication__redirect">
        Ещё не зарегистрированы? <Link to="/signup" className="authentication__link">Регистрация</Link>
      </span>
    </div>
  )
}

export default Login;

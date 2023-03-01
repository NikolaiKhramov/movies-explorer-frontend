import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="authentication">
      <Link to="/" className="authentication__logo" />
      <h2 className="authentication__title">Добро пожаловать!</h2>
      <form className="authentication__form form">
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="username">Имя</label>
          <input
            type="text"
            name="username"
            className="form__input"
            placeholder="Виталий"
            required
          />
          <span className="form__error"></span>
        </fieldset>
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
            placeholder=""
            required
          />
          <span className="form__error">Что-то пошло не так...</span>
        </fieldset>
        <button
          type="submit"
          className="authentication__button authentication__button_type_signup"
        >
          Зарегистрироваться
        </button>
      </form>
      <span className="authentication__redirect">
        Уже зарегистрированы? <Link to="/signin" className="authentication__button_type_redirect">Войти</Link>
      </span>
    </div>
  )
}

export default Register;

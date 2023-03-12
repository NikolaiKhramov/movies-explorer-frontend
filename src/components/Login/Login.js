import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useValidation";
import { emailValidation } from "../../utils/ValidationConfigs";

function Login({ onLogin }) {

  const {
    values,
    handleChange,
    errors,
    isValid
  } = useFormWithValidation();

  const buttonClassname = `authentication__button authentication__button_type_signup ${isValid ? 'authentication__button_active' : ''}`

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(
      values.email,
      values.password
    )
  }

  return (
    <div className="authentication">
      <Link to="/" className="authentication__logo" />
      <h2 className="authentication__title">Рады видеть!</h2>
      <form className="authentication__form form" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="email">E-mail</label>
          <input
            onChange={handleChange}
            value={values.email || ''}
            type="email"
            name="email"
            className="form__input"
            placeholder="pochta@yandex.ru"
            required
            pattern={emailValidation.pattern}
          />
          <span className="form__error">{errors.email}</span>
        </fieldset>
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="password">Пароль</label>
          <input
            onChange={handleChange}
            value={values.password || ''}
            type="password"
            name="password"
            className="form__input"
            required
          />
          <span className="form__error">{errors.password}</span>
        </fieldset>
        <button
          type="submit"
          className={buttonClassname}
          disabled={!isValid}
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

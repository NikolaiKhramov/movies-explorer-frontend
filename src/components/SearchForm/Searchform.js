import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useValidation";
import { requestRequiredMessage } from "../../utils/constants";

function Searchform({ handleSubmitSearch, handleChangeCheckbox, showError, isLoading }) {

  const { pathname } = useLocation();

  const {
    values,
    setValues,
    handleChange,
    isValid,
    setIsValid,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    isValid ? handleSubmitSearch(values.keyWord) : showError(requestRequiredMessage);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const keyWordStoraged = localStorage.getItem('keyWordStoraged');
      keyWordStoraged && setValues({keyWord: keyWordStoraged});
      setIsValid(true);
    } else {
      setValues({keyWord: ''});
    }
  }, [pathname]);

  const buttonClass = `search-form__button ${isLoading ? 'search-form__button_disabled' : ''}`;

  const [isChecked, setIsChecked] = useState(false);

  function handleChangeCheck() {
    setIsChecked(!isChecked);
    handleChangeCheckbox(!isChecked);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const isShortStoraged = JSON.parse(localStorage.getItem('isShortStoraged'));
      isShortStoraged && setIsChecked(isShortStoraged);
    } else {
      setIsChecked(false);
    }
  }, []);

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="search-form__fieldset">
        <input
          onChange={handleChange}
          value={values.keyWord || ''}
          name="keyWord"
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          required
          disabled={isLoading}
        />
        <button className={buttonClass} type="submit" disabled={isLoading}/>
      </fieldset>
      <fieldset className="search-form__slider slider">
        <label className="slider__title" htmlFor="slider">Короткометражки</label>
        <input className="slider__button" type="checkbox" id="slider" onChange={handleChangeCheck} checked={isChecked}/>
      </fieldset>
    </form>
  )
}

export default Searchform;

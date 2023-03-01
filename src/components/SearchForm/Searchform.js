function Searchform() {
  return (
    <form className="search-form">
      <fieldset className="search-form__fieldset">
        <input
          type="text"
          className="search-form__input"
          placeholder="Фильм"
        />
        <button className="search-form__button" type="submit"/>
      </fieldset>
      <fieldset className="search-form__slider slider">
        <label className="slider__title" htmlFor="slider">Короткометражки</label>
        <input className="slider__button" type="checkbox" id="slider" />
      </fieldset>
    </form>
  )
}

export default Searchform;

import Header from '../Header/Header';

function Profile({ isLogged }) {
  return (
    <>
    <Header
      isLogged={!isLogged}
    />
    <div className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <fieldset className='profile__fieldset'>
          <label className='profile__label' htmlFor="username">Имя</label>
          <input
            type="text"
            name="username"
            className="profile__input"
            placeholder="Виталий"
            required
          />
        </fieldset>
        <fieldset className='profile__fieldset'>
          <label className='profile__label' htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            className="profile__input"
            placeholder="pochta@yandex.ru"
            required
          />
        </fieldset>
        <button type="submit" className='profile__submit'>Редактировать</button>
      </form>
      <button className="profile__signout" type="button">Выйти из аккаунта</button>
    </div>
    </>
  )
}

export default Profile;

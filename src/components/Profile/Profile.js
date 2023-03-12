import { useContext, useState } from 'react';
import Header from '../Header/Header';
import CurrentUserContext  from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useValidation';
import { usernameValidation, emailValidation} from "../../utils/ValidationConfigs";
import { mainApi } from '../../utils/MainApi';
import { successUpdateMessage, failMessage } from '../../utils/constants';


function Profile({ isLogged, signOut, setPopupSettings, setInfoPopupOpen }) {

  const userContext = useContext(CurrentUserContext);
  const [userData, setUserData] = useState(userContext.currentUser);

  const initialValues = {
    username: userData.name,
    email: userData.email,
  };

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation({ initialValues });


  function handleSubmit(e) {
    e.preventDefault();
    mainApi.editUserProfile({
      name: values.username,
      email: values.email,
    })
      .then((data) => {
        setPopupSettings({
          message: successUpdateMessage,
          isSuccess: true,
        });
        setInfoPopupOpen(true);
        setUserData({
          name: data.userUpdated.name,
          email: data.userUpdated.email,
        });
      })
      .catch((err) => {
        console.log(err);
        setPopupSettings({
          message: failMessage,
          isSuccess: false,
        })
        setInfoPopupOpen(true);
      })
  }

  const buttonState = isValid && (values.username !== initialValues.username || values.email !== initialValues.email);
  const buttonClassname = `profile__submit ${buttonState? 'profile__submit_active' : ''}`;

  return (
    <>
    <Header
      isLogged={isLogged}
    />
    <div className='profile'>
      <h2 className='profile__title'>{`Привет, ${userData.name}!`}</h2>
      <form className='profile__form' onSubmit={handleSubmit} name={`form-profile`}>
        <fieldset className='profile__fieldset'>
          <label className='profile__label' htmlFor="username">Имя</label>
          <input
            onChange={handleChange}
            value={values.username || ''}
            type="text"
            name="username"
            className="profile__input"
            placeholder="Имя пользователя"
            required
            minLength="2"
            maxLength="30"
            pattern={usernameValidation.pattern}
          />
          <span className="profile__error">{errors.username}</span>
        </fieldset>
        <fieldset className='profile__fieldset'>
          <label className='profile__label' htmlFor="email">E-mail</label>
          <input
            onChange={handleChange}
            value={values.email || ''}
            type="email"
            name="email"
            className="profile__input"
            placeholder="pochta@yandex.ru"
            required
            pattern={emailValidation.pattern}
          />
          <span className="profile__error">{errors.email}</span>
        </fieldset>
        <button
          type="submit"
          className={buttonClassname}
          disabled={!buttonState}
        >
          Редактировать
        </button>
      </form>
      <button className="profile__signout" type="button" onClick={signOut}>Выйти из аккаунта</button>
    </div>
    </>
  )
}

export default Profile;

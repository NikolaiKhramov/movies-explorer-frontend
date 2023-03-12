import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Notfoundpage from '../NotFoundPage/Notfoundpage';
import Movies from '../Movies/Movies';
import Savedmovies from '../SavedMovies/Savedmovies';
import { mainApi }from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoPopup from '../InfoPopup/InfoPopup';
import { failMessage } from '../../utils/constants';

function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      const token = localStorage.getItem("jwt");
      mainApi.setAuthToken(token);
      mainApi.getContent()
        .then(([userData, savedMovies]) => {
          setCurrentUser(userData.foundUser);
          setSavedMovies(savedMovies.filter((movie) => movie.owner === userData.foundUser._id));
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [isLogged]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi.checkToken(token)
        .then((data) => {
          setCurrentUser(data.foundUser);
          setIsLogged(true);
        })
        .catch((err) => {
          console.log(err);
          handleSignOut();
        });
    } else {
      setIsLogged(false);
    }
  }, [navigate]);

  function handleSignUp(username, email, password) {
    mainApi.signUp(username, email, password)
      .then(() => {
        handleSignIn(email, password);
      })
      .catch((err) => {
        console.log(err.status);
        setPopupSettings({
          message: failMessage,
          isSuccess: false,
        })
        setInfoPopupOpen(true);
      })
  }

  function handleSignIn(email, password) {
    mainApi.signIn(email, password)
      .then((data) => {
        if (!data.jwtToken) return;

        localStorage.setItem('jwt', data.jwtToken);
        setIsLogged(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err.status);
        setPopupSettings({
          message: failMessage,
          isSuccess: false,
        })
        setInfoPopupOpen(true);
      })
  }

  function handleSignOut() {
    localStorage.clear();
    setIsLogged(false);
    navigate('/');
  }

  const [popupSettings, setPopupSettings] = useState({
    message: '',
    isSuccess: false,
  });

  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);

  function closePopup() {
    setInfoPopupOpen(false);
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  useEffect(() => {
    function closeOnEsc(e) {
      if (e.key === 'Escape') {
        closePopup();
      }
    }

    if (isInfoPopupOpen) {
      document.addEventListener('keydown', closeOnEsc);
      return () => {
        document.removeEventListener('keydown', closeOnEsc);
      }
    }
  }, [isInfoPopupOpen]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, savedMovies, setSavedMovies }}>
      <div className="page">
        <Routes>
          <Route path="/signin" element={
            <Login
              onLogin={handleSignIn}
            />}
          />
          <Route path="/signup" element={
            <Register
              onRegister={handleSignUp}
            />}
          />
          <Route path="/" element={
            <Main
              isLogged={isLogged}
            />
            }
          />
          <Route path="/profile" element={
            <ProtectedRoute isLogged={isLogged}>
              <Profile
                isLogged={isLogged}
                signOut={handleSignOut}
                setPopupSettings={setPopupSettings}
                setInfoPopupOpen={setInfoPopupOpen}
              />
            </ProtectedRoute>
          }
          />
          <Route path="/movies" element={
            <ProtectedRoute isLogged={isLogged}>
              <Movies
                isLogged={isLogged}
              />
            </ProtectedRoute>
          }
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute isLogged={isLogged}>
              <Savedmovies
                isLogged={isLogged}
              />
            </ProtectedRoute>
            }
          />
          <Route path='/*' element={<Notfoundpage />} />
        </Routes>
        <InfoPopup
          isOpen={isInfoPopupOpen}
          onClose={closePopup}
          popupSettings={popupSettings}
          onOverlayClick={handleOverlayClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

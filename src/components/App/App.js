import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Notfoundpage from '../NotFoundPage/Notfoundpage';
import Movies from '../Movies/Movies';
import Savedmovies from '../SavedMovies/Savedmovies';


function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="page">
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={
          <Main
            loggedIn={isLogged}
          />}
        />
        <Route path="/profile" element={
          <Profile
            loggedIn={isLogged}
          />}
        />
        <Route path="/movies" element={
          <Movies
            loggedIn={isLogged}
          />}
        />
        <Route path="/saved-movies" element={
          <Savedmovies
            loggedIn={isLogged}
          />}
        />
        <Route path='/*' element={<Notfoundpage />} />
      </Routes>
    </div>
  );
}

export default App;

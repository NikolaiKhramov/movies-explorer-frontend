class MainApi {
  constructor(apiConfig) {
    this._baseUrl = apiConfig.baseUrl;
    this._headers = apiConfig.headers;
  }

  _request(url, options) {
    return fetch(url, options)
      .then(this._checkIfResIsOk)
  }

  _checkIfResIsOk(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res);
  }

  setAuthToken(jwt) {
    this._headers.Authorization = `Bearer ${jwt}`
  }

  checkToken(jwt) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
  }

  signUp(username, email, password) {
    return this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: username,
        email,
        password,
      })
    })
  }

  signIn(email, password) {
    return this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      })
    })
  }

  getCurrentUser() {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
  }

  editUserProfile(data) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
  }

  getSavedMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
    })
  }

  saveMovie(movie) {
    return this._request(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movie)
    })
  }

  deleteMovie(movieId) {
    return this._request(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    })
  }

  getContent() {
    return Promise.all([this.getCurrentUser(), this.getSavedMovies()]);
  }
}

export const mainApi = new MainApi({
  //baseUrl: "http://localhost:3003",
  baseUrl: "https://api.khramovnd.moviesapp.nomoredomains.work",
  headers: {
    "Content-Type": "application/json",
    Authorization: ''
  }
})

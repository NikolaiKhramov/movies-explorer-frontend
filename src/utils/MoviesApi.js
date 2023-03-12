class MoviesApi {
  constructor(apiConfig) {
    this._url = apiConfig.url;
  }

  _request(url, options) {
    return fetch(url, options)
      .then(this._checkIfResIsOk)
  }

  _checkIfResIsOk(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка ${res.status}`);
  }

  getAllMovies() {
    return this._request(`${this._url}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
})

export default moviesApi;

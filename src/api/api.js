const API_KEY = '398906a23627141e5b9ae222ef7b9f60';
const API_TOKEN_ACCESS =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTg5MDZhMjM2MjcxNDFlNWI5YWUyMjJlZjdiOWY2MCIsInN1YiI6IjYzNDViZTNmZjYyMWIyMDA3ZWQwNmI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0bQeBB-k3-AYtxaqu_60xQGj-EzUhI6kiH2n0s2NCEg';

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/';
const size = 'w500'; // You can choose the desired size, such as 'w185', 'w500', etc.

// const requestForFilmsList = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&page=1&language=en-US`;

class API {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  async getFilmsList() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&sort_by=release_date.desc&page=1&language=en-US`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  }
}

const api = new API(API_KEY);
export { api, API };

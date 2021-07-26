const API_KEY = '22656351-88e3bd1ab5f4acb4ac723e7f5';
const BASE_URL = 'https://pixabay.com/api';

function fetchImages(query, page) {
  const url = `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Oh no... We cant find ${query}`));
  });
}
const api = {
  fetchImages,
};

export default api;

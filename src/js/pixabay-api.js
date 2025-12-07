import axios from 'axios';

const API_KEY = '53588295-343522c470cf6eee7e060c944'; // ← вставь свой ключ
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get('', { params }).then(response => response.data);
}

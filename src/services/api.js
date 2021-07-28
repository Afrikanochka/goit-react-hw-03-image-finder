import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '22656351-88e3bd1ab5f4acb4ac723e7f5';

export const fetchImages = async (query = '', page = 1) => {
  try {
    const response = await axios.get(
      `/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

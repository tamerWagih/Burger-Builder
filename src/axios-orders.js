import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-38949.firebaseio.com/',
});

export default instance;
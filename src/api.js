import axios from 'axios';

// Создаем экземпляр Axios с базовым URL
const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Экспортируем его для использования в других частях приложения
export default api;

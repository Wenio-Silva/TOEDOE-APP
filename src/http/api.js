import axios from 'axios'
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;

const token = Cookies.get('XSRF-TOKEN'); // Obtém o valor do cookie 'XSRF-TOKEN'
axios.defaults.headers.common['X-XSRF-TOKEN'] = token;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default api
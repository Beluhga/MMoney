import axios from 'axios';

 export const api = axios.create({ // isso é um instancia do axios
    baseURL: 'http://localhost:3000/api',
    
})

/*

---------- Axios serve para interceptar
*/
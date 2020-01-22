import axios from 'axios';

const getImgs = () => 
  axios.get('https://jsonplaceholder.typicode.com/photos')
  .then((response) => {
    return response.data;
  })
  .catch(error => error);

export default getImgs;
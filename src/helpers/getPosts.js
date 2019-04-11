import axios from 'axios';

export const getPosts = () => {
  return axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts')
  .then(data => data.data)
  .catch(err => console.log(err))
}
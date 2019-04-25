import axios from 'axios';

export const getPosts = () => {
  return axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts')
  .then(data => {
    const results = data.data.map(post => {
      post.id = Math.random() * 10000
      return post
    })
    return results
  })
  .catch(err => console.log(err))
}
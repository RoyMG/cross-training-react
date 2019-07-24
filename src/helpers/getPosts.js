import axios from 'axios';

export const getPosts = () =>
  axios
    .get('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then(data => {
      const results = data.data.map(post => {
        post.id = post.title;
        return post;
      });
      return results;
    })
    .catch(err => console.log(err));

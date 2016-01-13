import _ from 'lodash';

const posts = ($http, API, $q) => {
  let allPosts = [];

  return {
    get () {
      return $http.get(`${API.url}/posts`)
        .then(resp => allPosts = resp.data);
    },

    getOne (id) {
      const post = _.find(allPosts, {id});

      if (post) {
        return $q.when(post);
      } else {
        return $http.get(`${API.url}/posts/${id}`)
          .then(resp => {
            allPosts.push(resp.data);
            return resp.data;
          });
      }
    },

    getState () {
      return allPosts;
    }
  };
};

posts.$inject = ['$http', 'API', '$q'];

export {posts};

export function configRouter (router) {
  // normal routes
  router.map({
    // basic route
    '/about': {
      component: require('./components/about.vue')
    },

    '/blogs': {
      component: require('./components/blogs.vue')
    },

    '/blog/categories/:categoryId': {
      component: require('./components/blog/categories.vue')
    },

    // nested route
    '/blog/:blogId': {
      component: require('./components/blog/index.vue'),
      subRoutes: {
        // matches /blog/:blogId/
        'post': {
          component: require('./components/blog/post.vue')
        }
      }
    }
  });

  router.beforeEach(transition => {
    transition.next();
  });
};

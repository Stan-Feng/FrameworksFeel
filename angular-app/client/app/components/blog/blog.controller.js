import _ from 'lodash';

class BlogController {
  constructor (Posts) {
    this.message = 'This is blog message.';

    this.Posts = Posts;
    this.getPosts();

    this.search = '';
  }

  getPosts () {
    this.Posts.get()
      .then(() => {
        this.posts = this.Posts.getState();
      });
  }
}

BlogController.$inject = ['Posts'];

export {BlogController};

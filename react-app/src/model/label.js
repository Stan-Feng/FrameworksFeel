import xhr from 'xhr';
import app from 'ampersand-app';
import Model from 'ampersand-model';

import githubMixin from '../helpers/github-mixin';

export default Model.extend(githubMixin,{
  idAttribute: 'name',

  props: {
    name: 'string',
    color: 'string'
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    },
    saved: {
      type: 'boolean',
      default: true
    }
  },

  isNew () {
    return !this.saved;
  },

  update (attributes) {
    const oldAttri = this.getAttributes({props: true, session: false});
    xhr({
      url: this.url() + '/' + oldAttri.name,
      json: attributes,
      method: 'PATCH',
      headers: {
        Authorization: 'token ' + app.me.token
      }
    }, (err, req, body) => {
      if(err){
        this.set(oldAttri);
        console.error(err);
        return;
      }
    });
    //Visually update right away.
    this.set(attributes);

  }
});
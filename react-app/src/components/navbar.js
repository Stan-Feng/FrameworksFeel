'use strict';
import React from 'react';
import app from 'ampersand-app';

export default React.createClass({
  displayName: 'Navbar',

  onClickHandler (evt) {
    if(evt.target && evt.target.href) {
      if(window.location.origin === evt.target.origin) {
        //Internal Navigation
        evt.preventDefault();
        app.router.history.navigate(evt.target.pathname);
      } else {
        //external navigation
        //TODO:
      }
    }
  },

  render () {
    return (
      <div {...this.props} onClick = {this.onClickHandler}>
        {this.props.children}
      </div>
    );
  }
});
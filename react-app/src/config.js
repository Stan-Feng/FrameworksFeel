const config = {
  'localhost': {
    authUrl: 'https://labelr-localhost.herokuapp.com/authenticate',
    clientId: 'f8dd69187841cdd22a26',
  },

  'stanfeng.surge.sh': {
    authUrl: 'https://labelr-localhost.herokuapp.com/authenticate',
    clientId: 'caaf905c3247e5c30cd5'
  }
}[window.location.hostname];

export default config;
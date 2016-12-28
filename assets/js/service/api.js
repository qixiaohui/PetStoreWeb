var axios = require('axios');
var baseUrl = 'https://petstoreweb.herokuapp.com'

var api = {
    get: (url, callback) => {
       axios.get(baseUrl+url, {headers:
           {'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Access-Control-Allow-Origin': '*'}})
           .then(function (response) {
           if (typeof callback === 'function') {
               callback(response);
           } else {
               throw new TypeError('callback needs to be function');
           }
       }).catch(function (e) {
           callback(e);
       });
    },

    post: (url, data, callback) => {
      axios.post(baseUrl+url, data).then(function (response) {
           if (typeof callback === 'function') {
               callback(response);
           }
       }).catch(function (e) {
            callback(e);
       });
    }
};

module.exports = api;
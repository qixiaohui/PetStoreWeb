var axios = require('axios');
var baseUrl = 'http://localhost:8000'

var api = {
    get: (url, callback) => {
       axios.get(baseUrl+url+'?format=json', {timeout: 25000}).then(function (response) {
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
      if(!data)
           data = {};
      data.timeout = 25000;
      axios.post(baseUrl+url+'?format=json', data).then(function (response) {
           if (typeof callback === 'function') {
               callback(response);
           }
       }).catch(function (e) {
            callback(e);
       });
    }
};

module.exports = api;
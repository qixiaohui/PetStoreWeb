var dispatcher = require('./dispatcher');
var constants = require('./constants');
var assign = require('object-assign');
var emitter = require('events').EventEmitter;

const EVENT = "LOAD";

var post = {};

function __setPost(post) {
    this.post = post;
}

function __getPost() {
    return this.post;
}

var appStore = {
    getPost: function() {
        return __getPost();
    },
    setPost: function(data) {
        return __setPost(data);
    },
    dispatcherIndex: dispatcher.register(function(payLoad){
        var action = payLoad.action;
        switch(action.actionType) {
            case constants.loadPost:
                __setPost(action.data)
                break;
        }
        return true;
    })
};

module.exports = appStore;
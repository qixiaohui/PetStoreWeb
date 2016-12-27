var constants = require('./constants');
var dispatcher = require('./dispatcher');

var appAction = {
    loadPost: function(post) {
        dispatcher.handleViewAction({
            actionType: constants.loadPost,
            data: post
        })
    }
};

module.exports = appAction;
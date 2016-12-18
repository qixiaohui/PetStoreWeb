var React = require('react');
var api = require('../../service/api');
var _ = require('underscore');

var posts = React.createClass({
    getInitialState: function() {
        return {
            posts: {}
        };
    },
    componentDidMount: function(){

    },
    componentDidUnMount: function(){

    },
    componentWillMount: function(){
        api.get('/api/post/list', (response) => {
            if(response instanceof Error) {
                console.error(response.message);
                return;
            }

            this.setState({posts: response.data.results});
        });
    },
    render: function() {
        return (
            <div>
                {_.map(this.state.posts, (post) => {
                    return (
                        <div key={post.id}>
                            <p>{post.content}</p>
                        </div>
                    );
                })}
            </div>
        );
    }

});

module.exports = posts;
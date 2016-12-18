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
            <div className="marketing" style={{marginTop: "100px", paddingLeft: "15px", paddingRight: "15px"}}>
                {_.map(this.state.posts, (post) => {
                    return (
                        <div className="row" style={{marginBottom: "40px"}}>
                            <div className="col-md-3" style={{marginTop: "10dp"}}>
                                {post.image === null?null:<img className="img-responsive" src={"http://localhost:8000"+post.image} />}
                            </div>
                            <div className="col-md-9" href="new.link">
                                <h4>{post.title}</h4>
                                <p style={{color: "#5d5f60"}}>{post.content}</p>
                                <p style={{float: "left", fontSize: "12px", color: "#a9abae"}} id="author">Post by: {post.user}</p>
                                <p style={{float: "right", fontSize: "12px", color: "#848a91"}}>{post.timestamp}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

});

module.exports = posts;
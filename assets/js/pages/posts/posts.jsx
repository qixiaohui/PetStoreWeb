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
                        <div className="row" style={{marginBottom: "40px", position: "relative"}}>
                            <div className="col-md-3" style={{marginTop: "10dp"}}>
                                <div className="post-list-image-holder">
                                    {post.image === null?null:<img className="img-responsive post-list-image " src={post.image} />}
                                </div>
                            </div>
                            <div className="col-md-9" href="new.link">
                                <h3>{post.title}</h3>
                                <div style={{color: "#5d5f60"}} dangerouslySetInnerHTML={{__html: post.content}}></div>
                            </div>
                            <p style={{float: "right", fontSize: "12px", color: "#848a91", position: "absolute", bottom: "5px", right: "10px"}}>Post by: {post.user}<br/>{post.timestamp}</p>
                            <div style={{height: '1px', width: '100%', backgroundColor: '#fefefe'}}></div>
                        </div>
                    );
                })}
            </div>
        );
    }

});

module.exports = posts;
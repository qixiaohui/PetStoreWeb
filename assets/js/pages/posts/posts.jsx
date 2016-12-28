var React = require('react');
var api = require('../../service/api');
var _ = require('underscore');
var browserHistory = require('react-router').browserHistory;


var posts = React.createClass({
    getInitialState: function() {
        return {
            posts: [],
        };
    },
    handleScroll: function () {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.getPosts();
        }
    },
    componentDidMount: function(){
        window.addEventListener("scroll", this.handleScroll);
    },
    componentDidUnMount: function(){
        window.removeEventListener("scroll", this.handleScroll);
    },
    getPosts: function() {
        var index = 1+Math.ceil(this.state.posts.length/20);
        api.get('/api/post/list/'+index, (response) => {
            if(response instanceof Error) {
                console.error(response.message);
                return;
            }

            if(this.state.posts.length === 0)
                this.setState({posts: response.data});
            else {
                this.state.posts = this.state.posts.concat(response.data);
                this.forceUpdate();
            }
        });
    },
    componentWillMount: function(){
        this.getPosts();
    },
    redirect: function(index) {
        //this.context.router.push('/#/post/'+index);
        //browserHistory.push('/#/post/'+index);
        window.location = 'http://petstorez.herokuapp.com/#/post/'+index;
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
                            <div className="col-md-9 post-div" href="new.link" onClick={this.redirect.bind(this, post.id)}>
                                <h3>{post.title}</h3>
                                <div style={{color: "#5d5f60"}} dangerouslySetInnerHTML={{__html: post.content}}></div>
                            </div>
                            <p style={{float: "right", fontSize: "12px", color: "#848a91", position: "absolute", bottom: "5px", right: "10px"}}>Post by: Tom<br/>{post.timestamp}</p>
                            {/*<div style={{height: '1px', width: '100%', backgroundColor: '#fefefe'}}></div>*/}
                        </div>
                    );
                })}
            </div>
        );
    }

});

module.exports = posts;
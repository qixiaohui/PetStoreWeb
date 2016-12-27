var React = require('react');
var base = require('./pages/base.jsx');
var posts = require('./pages/posts/posts.jsx');
var postCreate = require('./pages/posts/postCreate.jsx');
var postDetail = require('./pages/post_detail/postDetail.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;

module.exports = (
	<Router history={browserHistory}>
		<Route path='/' component={base}>
			<IndexRoute component={posts}></IndexRoute>
			<Route path="posts" component={posts} />
            <Route path="post/:index" component={postDetail} />
			<Route path="postsCreate" component={postCreate} />
			<Route path="*" component={posts} />
		</Route>
	</Router>
);
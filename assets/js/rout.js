var React = require('react');
var base = require('./pages/base.jsx');
var posts = require('./pages/posts/posts.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

module.exports = (
	<Router>
		<Route path='/' component={base}>
			<IndexRoute component={posts}></IndexRoute>
			<Route path="posts" component={posts} />
			<Route path="*" component={posts} />
		</Route>
	</Router>
);
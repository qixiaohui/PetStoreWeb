var React = require('react');
var Render = require('react-dom');
var Routes = require('./rout');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;

Render.render(<Router history={hashHistory} >{Routes}</Router>, document.getElementById('container'));


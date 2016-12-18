var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var base = React.createClass({
    getInitialState: function(){
        return {};
    },
    componentDidMount: function(){

    },
    componentDidUnMount: function(){

    },
    render: function(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = base;
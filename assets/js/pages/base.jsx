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
                <div className="header">
                  <div className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                      <div className="navbar-header">
                        <form  className="navbar-form" style={{float: "left"}}>
                          <button id="sidebarButton" type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-list" aria-hidden="true"></span>
                          </button>
                        </form>
                      </div>

                      <div className="collapse navbar-collapse" id="js-navbar-collapse">
                        <ul className="nav navbar-nav">
                          <li className="active"><a href="#/"><b>Petstore</b></a></li>
                        </ul>
                        <form className="navbar-form navbar-right" style={{float: "right"}} role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search topic" />
                            </div>
                            <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = base;
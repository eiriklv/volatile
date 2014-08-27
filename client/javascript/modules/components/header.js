/** @jsx React.DOM */

'use strict';

var React = require('react');
var ReactAsync = require('react-async');

module.exports = React.createClass({
    displayName: 'Header',

    shouldComponentUpdate: function() {
        return false;
    },

    render: function() {
        return (
            <div className="jumbotron text-center">
                <h1>
                    <a href="/">
                        <span className="fa-stack">
                            <i className="fa fa-ban fa-stack-2x text-success"></i>
                            <i className="fa fa-eye fa-stack-1x"></i>
                        </span> {this.props.title}
                    </a>
                </h1>
            </div>
        );
    }
});

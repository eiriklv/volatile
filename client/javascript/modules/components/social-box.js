/** @jsx React.DOM */

'use strict';

var React = require('react');
var ReactAsync = require('react-async');

module.exports = React.createClass({
    displayName: 'SocialBox',

    shouldComponentUpdate: function() {
        return false;
    },

    render: function() {
        return (
            <div className="jumbotron text-center">
                <div class="text-center center-block">
                    <a href="https://www.github.com/eiriklv"><i className="social fa fa-github-square fa-3x"></i></a>
                    <a href="https://twitter.com/eiriklv"><i className="social fa fa-twitter-square fa-3x social-tw"></i></a>
                    <a href="mailto:eirik@evconsult.no"><i className="social fa fa-envelope-square fa-3x social-em"></i></a>
                    <a href="http://www.evconsult.no"><i className="social fa fa-heart fa-3x social-gp"></i></a>
                </div>
            </div>
        );
    }
});

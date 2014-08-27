/**
 * @jsx React.DOM
 */
'use strict';

// config
var config = require('./config');

// dependencies
var React = require('react');
var ReactAsync = require('react-async');

// custom components
var Head = require('./modules/components/head');

// Main page component (this is asyncronous)
var NotFound = React.createClass({
    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function (callback) {
        callback(null, this.props);
    },

    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description}></Head>
                <body id="notfound">
                    <div className="container">
                        <div className="jumbotron text-center">
                            <h1 className="title"><span className="fa fa-cloud"></span> {this.state.title}</h1>

                            <p>You requested: {this.state.url}</p>

                            <a href="/" className="btn btn-success"><span className="fa fa-user"></span> Go back home</a>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = NotFound;

if (typeof window !== 'undefined') {
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function() {
        React.renderComponent(NotFound(), document);
    }
}

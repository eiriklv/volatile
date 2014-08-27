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
var ErrorPage = React.createClass({
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
                            <h1 className="title">
                                <a className="title-link" href="/">
                                    <span className="fa-stack">
                                        <i className="fa fa-ban fa-stack-2x text-success"></i>
                                        <i className="fa fa-eye fa-stack-1x"></i>
                                    </span> {this.state.title}
                                </a>
                            </h1>
                            <p>This resource does not exist - or an error occured</p>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = ErrorPage;

if (typeof window !== 'undefined') {
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function() {
        React.renderComponent(ErrorPage(), document);
    }
}

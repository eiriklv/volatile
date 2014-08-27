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
var Header = require('./modules/components/header');

// Main page component (this is asyncronous)
var Message = React.createClass({
    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function(callback) {
        callback(null, this.props);
    },

    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description}></Head>
                <body id="landing">
                    <div className="container">
                        <Header title={this.state.title} />
                        <div className="jumbotron text-center">
                            <p>Message follows below:</p>
                            <pre className="text-left message-field">{this.state.message}</pre>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = Message;

if (typeof window !== 'undefined') {
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function() {
        React.renderComponent(Message(), document);
    }
}

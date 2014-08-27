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
var Share = React.createClass({
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
                            <h1 className="title"><span className="fa fa-share"></span> Share the link</h1>
                            <p>Share this volatile message by giving the link to a friend</p>
                            <p>The message will self-destruct as soon as the receiver opens it!</p>
                            <input type="text" className="form-control text-center link-field" value={this.state.url} />
                        </div>
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = Share;

if (typeof window !== 'undefined') {
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function() {
        React.renderComponent(Share(), document);
    }
}

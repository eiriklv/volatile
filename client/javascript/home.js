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
var InputForm = require('./modules/components/input-form');
var Header = require('./modules/components/header');

// Main page component (this is asyncronous)
var Landing = React.createClass({
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
                            <p>Your message will self destruct as soon as it is opened by the receiver, or within 24h if not opened.</p>
                            <InputForm />
                        </div>
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = Landing;

if (typeof window !== 'undefined') {
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function() {
        React.renderComponent(Landing(), document);
    }
}

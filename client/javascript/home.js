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

// Main page component (this is asyncronous)
var Landing = React.createClass({
    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function(callback) {
        callback(null, this.props); // set the input props as state (equal to 'return this.props' in getInitialState, but async)
    },

    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description}></Head>
                <body id="landing">
                    <div className="container">
                        <div className="row jumbotron text-center">
                            <h1 className="title">
                                <span className="fa-stack">
                                    <i className="fa fa-ban fa-stack-2x text-success"></i>
                                    <i className="fa fa-eye fa-stack-1x"></i>
                                </span> {this.state.title}
                            </h1>
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

// If the file is processed by the browser, it should mount itself to the document and 'overtake' the markup from the server without rerendering
if (typeof window !== 'undefined') {
    // enable the react developer tools when developing (loads another 450k into the DOM..)
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function() {
        React.renderComponent(Landing(), document);
    }
}

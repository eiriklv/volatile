/** @jsx React.DOM */

'use strict';

var React = require('react');
var ReactAsync = require('react-async');

module.exports = React.createClass({
    displayName: 'Faq',

    shouldComponentUpdate: function() {
        return false;
    },

    render: function() {
        return (
            <div className="jumbotron text-center">
                <div class="text-left center-block">
                    <p>This whole thing is open source, so if you don't trust anyone else to host your data, then you're free do it yourself :-)</p>
                </div>
            </div>
        );
    }
});

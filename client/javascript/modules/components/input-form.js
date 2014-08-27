/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'InputForm',

    shouldComponentUpdate: function() {
        return false;
    },

    render: function() {
        return (
            <form className="form-horizontal" role="form" method="post" action="/share">
                <div className="form-group">
                    <div className="">
                        <textarea className="form-control large-font" rows="3" name="message" id="message" placeholder="Write your volatile message here"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Create</button>
                    </div>
                </div>
            </form>
        );
    }
});

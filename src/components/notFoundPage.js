"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({

	render: function(){
		return (
			   <div>
				<h1>Page Not Found</h1>
				<p><Link to="app">Go back</Link></p>
			   </div>	

			);
	}
});

module.exports = NotFoundPage;
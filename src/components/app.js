$ = jQuery = require('jquery');
var Header = require('./common/header');
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;


var App = React.createClass({
	render: function(){
		
		return (
			<div>
				<Header />
				<div className="container-fluid">
			 		<RouteHandler />
			 	</div>
			</div>
		);
		
	}
});

module.exports = App;
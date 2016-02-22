"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback){
			if (!confirm('You sure you want to see that?')){
				transition.about();
			} else {
				callback();
			}
		},
		willTransitionFrom: function(transition, component){
			if (!confirm('You sure you want to leave?')){
				transition.about();
			} 
		}
	},

	render: function(){
		return (
			   <div>
				<h1>About</h1>
					<p>
						This app uses this stuff:
						<ul>
							<li>React</li>
							<li>React Router</li>
							<li>Flux</li>
							<li>Other stuff</li>
						</ul>
					</p>
			   </div>	

			);
	}
});

module.exports = About;
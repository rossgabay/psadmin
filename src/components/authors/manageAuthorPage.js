"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	getInitialState: function(){
		return {
			author: {id:'', firstName:'', lastName: '' },
			errors: {}	
			};
	},

	setAuthorState: function(event){
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},

	authorFormIsValid: function(){
			var formIsValid = true;
			this.state.errors = {}; //clear previous errors

			if (this.state.author.firstName.length < 3){
				console.log('huh');
				this.state.errors.firstName = 'First name must be longer than 3 characters.';
				formIsValid = false;
			}

			if (this.state.author.lastName.length < 3){
				this.state.errors.lastName = 'Last name must be longer than 3 characters.';
				formIsValid = false;
			}
			console.log(formIsValid);
			this.setState({errors: this.state.errors});
			return formIsValid;
	},

	saveAuthor: function(event){
			event.preventDefault();

			if(!this.authorFormIsValid()){
				return;
			}

			AuthorApi.saveAuthor(this.state.author);
			toastr.success('You dun it');
			this.transitionTo('authors');
	},

	render: function(){
		return (
			<div>
			   	<AuthorForm 
			   		author={this.state.author} 
			   		onChange={this.setAuthorState}
			   		onSave={this.saveAuthor} 
			   		errors={this.state.errors}/>
			</div>
			);
	}
});

module.exports = ManageAuthorPage;
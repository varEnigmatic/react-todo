import React, { Component } from 'react';
import request from 'request';

export default class TodoForm extends Component {
	constructor(props){
		super(props);
		this.onSubmitClick = this.onSubmitClick.bind(this);
	}

	onSubmitClick(e){
		e.preventDefault();
		let inputValue = this.refs.inputbox.value;
		if(inputValue){
			let state = {
				title: inputValue,
				iscomplete: false
			};
			request.post('http://localhost:9000/api/todos', state);
		} else {
			alert('input is required to create a new todo');
		}
	}

	render(){
		return (
			// <form action="/api/todos" method="post">
			<form>
				<label>
					TodoForm:
					<input name="todoName" type="text" ref="inputbox"/>
				</label>
				<button onClick={this.onSubmitClick} type="submit">add new</button>
			</form>
		);
	}
}

import React, { Component } from 'react';

export default class TodoForm extends Component {
	render(){
		let input;
		return (
			// <form action="/api/todos" method="post">
			<form>
				<label>
					TodoForm:
					<input name="todoName" type="text" ref={(node) => {
						input = node;
					}} />
				</label>
				<button  type="submit" onClick={() => {
					this.props.addTodo(input.value);
					input.value = '';
				}}>
					add new
				</button>
			</form>
		);
	}
}

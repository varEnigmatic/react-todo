import React, { Component } from 'react';

export default class TodoForm extends Component {
	render(){
		return (
			<form action="/api/todos" method="post">
				<label>
					TodoForm:
					<input name="todoName" type="text" />
				</label>
				<button type="submit">add new</button>
			</form>
		);
	}
}

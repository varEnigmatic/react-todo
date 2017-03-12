import React, { Component } from 'react';

export default class TodoForm extends Component {
	render(){
		return (
			<form action="/api/posts" method="post">
				<label>
					TodoForm:
					<input name="todoName" type="text"></input>
				</label>
				<button type="submit">add new</button>
			</form>
		);
	}
}

import React, { Component } from 'react';
import request from 'request';

export default class TodoForm extends Component {
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

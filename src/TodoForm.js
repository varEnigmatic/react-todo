import React, { Component } from 'react';
import request from 'request';

export default class TodoForm extends Component {
	render(){
		return (
			<form>
				<label>
					TodoForm:
					<input name="todoName" type="text" ref="inputbox"/>
				</label>
				<button onClick={() => {this.props.addTodo(this.refs.inputbox.value)}}>
					add new
				</button>
			</form>
		);
	}
}

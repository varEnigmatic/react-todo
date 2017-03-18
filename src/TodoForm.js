import React, { Component } from 'react';

export default class TodoForm extends Component {
	render(){
		return (
			<div>
				<label>
					TodoForm:
					<input name="todoName" type="text" ref="inputbox"/>
				</label>
				<button onClick={() => {
					this.props.addTodo(this.refs.inputbox.value);
					this.refs.inputbox.value = '';
				}}>
					add new
				</button>
			</div>
		);
	}
}

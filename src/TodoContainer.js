import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class TodoContainer extends Component {
	render(){
		return (
			<div>
				<TodoForm />
				<TodoList />
			</div>
		);
	}
}

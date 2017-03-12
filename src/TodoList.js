import React, { Component } from 'react';
import request from 'request';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
	constructor(props){
		super(props);

		// initialize state to empty array
		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		const url = 'https://jsonplaceholder.typicode.com/todos';

		request.get(url, (error, response, body) => {

			// set state to list recieved from backend
			this.setState({
				todos: JSON.parse(body)
			});
		});
	}

	render(){
		let todoItems = this.state.todos.map((todo) => {
			return (
				<TodoItem title={todo.title} />
			);
		});

		return (
			<div>
				TodoList
				{todoItems}
			</div>
		);
	}
}

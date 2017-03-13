import React, { Component } from 'react';
import request from 'request';
import TodoItem from './TodoItem';
import _ from 'lodash';

export default class TodoList extends Component {
	constructor(props){
		super(props);

		// initialize state to empty array
		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		const url = 'http://localhost:9000/api/todos';
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
				<TodoItem title={todo.title} iscomplete={todo.iscomplete}/>
			);
		});

		function Todos(props){
			if(!_.isEmpty(props.todoList)) {
				return <div>{todoItems}</div>
			} else {
				return <div><p>you havent created any todos yet.</p></div>
			}
		}

		return (
			<div>
				TodoList:
				<Todos todoList={this.state.todos} />
			</div>
		);
	}
}

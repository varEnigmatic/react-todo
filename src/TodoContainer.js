import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import request from 'request';
var fetch = require('fetch').fetchUrl;

export default class TodoContainer extends Component {
	constructor(props){
		super(props);

		// initialize app state to empty array
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

	addTodo(title){
		if(title){
			const todo = {
				title: title,
				iscomplete: false
			};

			// const url = 'http://localhost:9000/api/todos';
			// const options = {
			// 	method: 'POST',
			// 	payload: todo
			// };
			// fetchUrl(url, options, (err, meta, body) => {
			// 	console.log(body);
			// 	this.state.todos.push(todo);
			// 	this.setState({ todos: this.state.todos });
			// });

			request.post('http://localhost:9000/api/todos').form(todo);
		} else {
			alert('input is required to create a new todo');
		}
	}

	deleteTodo(id){
		const remaining = this.state.todos.filter((todo) => {
			if(todo.id !== id){
				return todo;
			}
		});

		// Update state with filter
		request.delete(`http://localhost:9000/api/todos/${id}`);
		this.setState({ todos: remaining });
	}

	completeTodo({id, title}){
		//should remove element from array matching the id
		const todo = {
			id: id,
			title: title,
			iscomplete: true
		};

		this.state.todos[id] = todo;
		this.setState({ todos: this.state.todos });
		request.put(`http://localhost:9000/api/todos/${id}`).form(todo);
	}

	//note when using react functions are defined above and passed down to child components for use
	render(){
		return (
			<div>
				<label>{this.state.todos.length}</label>
				<TodoForm addTodo={this.addTodo.bind(this)}/>
				<TodoList
					todos={this.state.todos}
					remove={this.deleteTodo.bind(this)}
					complete={this.completeTodo.bind(this)}
				/>
			</div>
		);
	}
}

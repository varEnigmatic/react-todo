import React, { Component } from 'react';
import update from 'react-addons-update'; // ES6 immutability update helper
import shortid from 'shortid';
import _ from 'lodash';
import 'whatwg-fetch'; //fetch

import TodoForm from './TodoForm';
import TodoList from './TodoList';

let uid;
export default class TodoContainer extends Component {
	constructor(props){
		super(props);

		// initialize app state to empty array
		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		fetch('/api/todos')
			.then((response) => {
				return response.json();
			})
			.then((text) => {
				// set state to list received from backend
				this.setState({
					todos: text
				});
			})
			.catch((error) => {
				throw error;
			});
	}

	addTodo(title){
		if(title){
			uid = shortid.generate();
			const todo = {
				id: uid,
				title: title,
				iscomplete: false
			};

			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(todo)
			};

			fetch('/api/todos', options)
				.then(() => {
					let updatedTodos = this.state.todos.map(item => item);
					updatedTodos.push(todo);
					this.setState({ todos: updatedTodos });
				})
				.catch((error) => {
					throw error;
				});
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
		fetch(`/api/todos/${id}`, { method: 'DELETE' })
			.then(() => {
				this.setState({ todos: remaining });
			})
			.catch((error) => {
				throw error;
			});
	}

	//make into toggle?
	completeTodo({id, title, iscomplete}){
		let status = iscomplete ? false : true
		const todo = {
			id: id,
			title: title,
			iscomplete: status
		};
		const options = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(todo)
		};

		fetch(`/api/todos/${id}`, options)
			.then(() => {
				let index = _.findIndex(this.state.todos, (todo) => todo.id === id );

				//[index] used to look up clicked element by its key and change its is complete value
				this.setState({
					todos: update(this.state.todos, {[index]: {iscomplete: {$set: status}}})
				});
			})
			.catch((error) => {
				throw error;
			});
	}

	// note: when using react functions are defined above and passed down to child components for use
	// this way they can modify the state of the outer component
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

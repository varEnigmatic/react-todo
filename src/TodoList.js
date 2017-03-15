import React, { Component } from 'react';
import request from 'request';
import TodoItem from './TodoItem';
import _ from 'lodash';

export default class TodoList extends Component {
	render(){
		let todoItems = this.state.todos.map((todo) => {
			return (
				<TodoItem id={todo.id} title={todo.title} iscomplete={todo.iscomplete} />
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

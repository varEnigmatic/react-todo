import React, { Component } from 'react';
import request from 'request';
import TodoItem from './TodoItem';
import _ from 'lodash';

export default class TodoList extends Component {
	render(){
		let todoItems = this.props.todos.map((todo) => {
			return (
				<TodoItem
					id={todo.id}
					title={todo.title}
					iscomplete={todo.iscomplete}
					remove={this.props.remove}
					complete={this.props.complete}
				/>
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
				<Todos todoList={this.props.todos} />
			</div>
		);
	}
}

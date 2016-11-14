require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <TodoContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {

};

//top-most component, holds other components
class TodoContainer extends React.Component {
	render() {
		const todos = ['groceries', 'laundry'];

		return (
			<div className='todoContainer'>
				<Banner/>
				<TodoBox/>
				<TodoList todos={this.todos}></TodoList>
			</div>
		)
	}
}

//UI banner component
class Banner extends React.Component {
	render() {
		return (
			<div className='banner'>
				<h1>Todo List</h1>
			</div>
		)
	}
}

//a UI component for the user to enter a new todo
class TodoBox extends React.Component {
	render() {
		return (
			<div>
				<input type='text' placeholder='type in a new todo...'></input>
				<button type='button'>+</button>
			</div>
		)
	}
}

class TodoList extends React.Component {
	render() {
		const todos = this.props.todos;
		let rows = [];

		todos.forEach(function(todo){
			rows.push((
				<Todo name={todo}></Todo>
			))
		});
		return (
			<table>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}

class Todo extends React.Component {
	render() {
		return (
			<tr>Todo me</tr>
		)
	}
}

export default AppComponent;

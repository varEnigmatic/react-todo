require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
const EventEmitter = require('events');
var events = new EventEmitter();

class AppComponent extends React.Component {
    render() {
        return (
            <div className="index">
                <img src={yeomanImage} alt="Yeoman Generator" />
                <div className="notice">
                    Please edit <code>src/components/Main.js</code> to get started!
                </div>
                <TodoContainer />
            </div>
        );
    }
}

AppComponent.defaultProps = {};

//top-most component, holds other components
class TodoContainer extends React.Component {
    render() {
        const todos = [
            {id: 1, name: 'groceries'},
            {id: 2, name: 'laundry'},
            {id: 3, name: 'trash'}
        ];

        return (
            <div className='todoContainer'>
                <Banner/>
                <TodoBox/>
                <TodoList todos={todos}></TodoList>
            </div>
        );
    }
}

//UI banner component
class Banner extends React.Component {
    render() {
        return (
            <div className='banner'>
                <h1>Todo List</h1>
            </div>
        );
    }
}

//a UI component for the user to enter a new todo
class TodoBox extends React.Component {
    addTodo() {
        events.emit('new-todo', 'something');
    }
    render() {
        return (
        <div>
            <input type='text' placeholder='type in a new todo...'></input>
            <button type='button' onClick={this.addTodo}>+</button>
        </div>
        );
    }
}

class TodoList extends React.Component {
    constructor() {
        super();
        events.on('new-todo', (state) => {
            console.log('creating a new todo');
            console.log(state);
            // this.setState({name: 'my new value'});
        });
    }
    render() {
        let rows = [];

        this.props.todos.forEach(function(todo){
            rows.push((
                <Todo name={todo.name}></Todo>
            ));
        });
        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {isComplete: false};
    }
    removeTodo(e) {
        console.log(this.state.isComplete);
        // this.setState({ isComplete: true })
        console.log(this.state.isComplete);
    }
    render() {
        return (
            <tr>
                {this.props.name} | isComplete: {this.state.isComplete}
                <button type='button' onClick={this.removeTodo()}>x</button>
            </tr>
        );
    }
}

export default AppComponent;

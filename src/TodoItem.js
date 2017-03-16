import React, { Component } from 'react';
import request from 'request';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = this.props;
	}

	onCompleteClick(e){
		e.preventDefault();
		//should remove element from array matching the id
		console.log(this.state);

		this.setState(this.state);
		request.put(`http://localhost:9000/api/todos/${this.state.id}`).form(this.state);
	}

	render(){
		function TodoTitle(props) {
			return props.iscomplete ?
				<span><strike>{props.title}</strike></span> :
				<span>{props.title}</span>
		}

		return (
			<div>
				<TodoTitle title={this.state.title} iscomplete={this.state.iscomplete} />
				<button onClick={this.onCompleteClick.bind(this)}>complete</button>
				<button onClick={this.props.remove(this.state.id)}>delete</button>
			</div>
		);
	}
}

import React, { Component } from 'react';
import request from 'request';

export default class TodoItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			id: this.props.id,
			title: this.props.title,
			iscomplete: this.props.iscomplete
		}

		this.onCompleteClick = this.onCompleteClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	onCompleteClick(e){
		e.preventDefault();

		let state = {
			id: this.state.id,
			title: this.state.title,
			iscomplete: true
		};

		this.setState(state);
		request.put(`http://localhost:9000/api/todos/${this.state.id}`).form(state);
	}

	onDeleteClick(e){
		e.preventDefault();

		request.delete(`http://localhost:9000/api/todos/${this.state.id}`);
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
				<button onClick={this.onCompleteClick}>complete</button>
				<button onClick={this.onDeleteClick}>delete</button>
			</div>
		);
	}
}

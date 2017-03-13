import React, { Component } from 'react';

export default class TodoItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			iscomplete: this.props.iscomplete
		}

		this.onCompleteClick = this.onCompleteClick.bind(this);
	}

	onCompleteClick(e){
		e.preventDefault();

		this.setState({
			iscomplete: true
		});
	}

	render(){
		function TodoTitle(props) {
			if(!props.iscomplete) {
				return <span>{props.title}</span>
			} else {
				return <span><strike>{props.title}</strike></span>
			}
		}

		return (
			<div>
				<TodoTitle title={this.props.title} iscomplete={this.state.iscomplete} />
				<button onClick={this.onCompleteClick}></button>
				<button>delete</button>
			</div>
		);
	}
}

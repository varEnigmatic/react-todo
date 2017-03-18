import React, { Component } from 'react';

export default class TodoItem extends Component {
	render(){
		function TodoTitle(props) {
			return props.iscomplete ?
				<span><strike>{props.title}</strike></span> :
				<span>{props.title}</span>
		}

		return (
			<div>
				<button onClick={() => {this.props.complete(this.props)}}>{this.props.iscomplete ? 'incomplete' : 'complete'}</button>
				<TodoTitle title={this.props.title} iscomplete={this.props.iscomplete} />
				<button onClick={() => {this.props.remove(this.props.id)}}>delete</button>
			</div>
		);
	}
}

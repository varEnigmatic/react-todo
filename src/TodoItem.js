import React, { Component } from 'react';

export default class TodoItem extends Component {
	render(){
		return (
			<div>
				{this.props.title}
				<button>complete</button>
				<button>delete</button>
			</div>
		);
	}
}

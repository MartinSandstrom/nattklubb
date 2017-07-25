import React from 'react';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={`aside-box ${this.props.choosenClub === this.props.title ? 'active-aside-box' : ''}`} onMouseEnter={() => this.props.onHoverEnter(this.props.title)}>
				<h4>{this.props.title}</h4>
			</div>
		);
	}
}
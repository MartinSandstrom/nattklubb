import React from 'react';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	isActive = () => this.props.hoveredClub === this.props.title || this.props.clickedClub === this.props.title;

	render() {
		return (
			<div className={`aside-box ${this.isActive() ? 'active-aside-box' : ''}`} onMouseEnter={() => this.props.onHoverEnter(this.props.title)} onClick={() => this.props.onClubClick(this.props.title)}>
				<h4>{this.props.title}</h4>
			</div>
		);
	}
}
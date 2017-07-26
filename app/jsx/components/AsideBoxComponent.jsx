import React from 'react';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	isActive = () => this.props.hoveredClub === this.props.title || this.props.clickedClub === this.props.title;

	handleClick = () => {
		this.props.setNewCenter(this.props.lat, this.props.lng);
		this.props.handleClubClick(this.props.title);
	}

	render() {
		return (
			<div className={`aside-box pointer ${this.isActive() ? 'active-aside-box' : ''}`} onMouseEnter={() => this.props.handleHoverEnter(this.props.title)} onClick={this.handleClick}>
				<h5>{this.props.title}</h5>
				<p>
					<em>{this.props.address}</em>
				</p>
			</div>
		);
	}
}
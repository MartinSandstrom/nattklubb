import React from 'react';
import Popover from './PopoverComponent.jsx';
import OpenHours from './OpenHoursComponent.jsx';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showInformation: false
		};
	}

	toggleInformation = () => this.setState({
		showInformation: !this.state.showInformation
	});

	close = () => {
		this.props.onClubClick('');
		this.setState({showInformation: false});
	}

	renderPopover = () => {
		if (this.state.showInformation || (this.props.clickedClub === this.props.name)) {
			return (
				<Popover title={this.props.name} close={this.close}>
					<p>
						Här kommer lite information om det här stället
					</p>
					<OpenHours></OpenHours>
				</Popover>
			);
		}
	}

	render() {
		return (
			<div>
				<i id={this.props.name} onMouseEnter={() => this.props.onHoverEnter(this.props.name)} onClick={this.toggleInformation} className={`fa fa-map-marker fa-3x pointer club-marker ${this.props.hoveredClub === this.props.name ? 'active-club' : ''}`}></i>
				{this.renderPopover()}
			</div>
		);
	}
}
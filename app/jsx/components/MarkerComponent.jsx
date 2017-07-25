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

	toggleInformation = () => this.setState({showInformation: !this.state.showInformation})

	renderPopover = () => {
		if (this.state.showInformation) {
			return (
				<Popover title={this.props.name} close={this.toggleInformation}>
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
				<i id={this.props.name} onClick={this.toggleInformation} className="fa fa-map-marker fa-3x pointer"></i>
				{this.renderPopover()}
			</div>
		);
	}
}
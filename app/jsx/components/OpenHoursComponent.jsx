import React from 'react';

const swedishDays = {
	1: 'Måndag',
	2: 'Tisdag',
	3: 'Onsdag',
	4: 'Torsdag',
	5: 'Fredag',
	6: 'Lördag',
	7: 'Söndag'
};

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	z
	formatHours = (hour) => `${hour.open} : ${hour.close} `;

	render() {
		let openHoursElements = this.props.openHours.map((hour, index) => (
			<div key={index}>{swedishDays[hour.id]} {this.formatHours(hour)}</div>
		));
		return (
			<div className="">
				{openHoursElements}
			</div>
		);
	}
}
import React from 'react';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	showInformation = (name) => {
		console.info('hifrom : ', name);
	}

	render() {
		return (
			<div style={{
				cursor: 'pointer'
			}} onClick={() => this.showInformation(this.props.name)}>
				<i className="fa fa-map-marker fa-3x"></i>
			</div>
		);
	}
}
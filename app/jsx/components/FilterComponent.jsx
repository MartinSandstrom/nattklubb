import React from 'react';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="filters">
                <input type="text" onChange={this.props.handleFilterChange} name="name" value={this.props.filterName}></input>
			</div>
		);
	}
}
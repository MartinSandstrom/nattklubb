import React from 'react';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="filters">
                <label className="control-label" htmlFor="filterName">Namn</label>
				<div className="form-group">
					<input id="filterName" type="text" onChange={this.props.handleFilterChange} name="name" value={this.props.filterName}></input>
				</div>
			</div>
		);
	}
}
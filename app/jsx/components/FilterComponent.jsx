import React from 'react';
import {Collapse} from 'reactstrap';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	toggle = () => this.setState({
		isOpen: !this.state.isOpen
	});

	renderChevron = () => this.state.isOpen ? <i className="fa fa-chevron-up pull-right"></i> : <i className="fa fa-chevron-down pull-right"></i>;

	render() {
		return (
			<div className="filters">
				<h5 onClick={this.toggle} className="pointer">Filtrera {this.renderChevron()}</h5>
				<Collapse isOpen={this.state.isOpen}>
					<label className="control-label" htmlFor="filterName">Namn</label>
					<div className="form-group">
						<input id="filterName" type="text" onChange={this.props.handleFilterChange} name="name" value={this.props.filterValues.name} className="form-control"></input>
					</div>
					<label className="control-label" htmlFor="filterAddress">Adress</label>
					<div className="form-group">
						<input id="filterAddress" type="text" onChange={this.props.handleFilterChange} name="address" value={this.props.filterValues.address} className="form-control"></input>
					</div>
				</Collapse>
			</div>
		);
	}
}
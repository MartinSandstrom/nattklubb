import React from 'react';
import {Collapse} from 'react-bootstrap';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<label className="control-label" htmlFor="filterName">Namn</label>
				<div className="form-group">
					<input id="filterName" type="text" onChange={this.props.handleFilterChange} name="name" value={this.props.filterValues.name} className="form-control"></input>
				</div>
				<label className="control-label" htmlFor="filterAddress">Adress</label>
				<div className="form-group">
					<input id="filterAddress" type="text" onChange={this.props.handleFilterChange} name="address" value={this.props.filterValues.address} className="form-control"></input>
				</div>
				<div className="row">
					<div className="col-xs-6">
						<label className="control-label" htmlFor="filterClub">Klubbar</label>
						<div className="form-group">
							<input type="checkbox" id="filterClub" onChange={() => this.props.handleFilterCheckbox('club')} checked={this.props.filterValues.club} className="form-control"></input>
						</div>
					</div>
					<div className="col-xs-6">
						<label className="control-label" htmlFor="filterBar">Bar</label>
						<div className="form-group">
							<input type="checkbox" id="filterBar" onChange={() => this.props.handleFilterCheckbox('bar')} checked={this.props.filterValues.bar} className="form-control"></input>
						</div>
					</div>
					<div className="col-xs-6">
						<label className="control-label" htmlFor="filterStudentNation">Studentnationer</label>
						<div className="form-group">
							<input type="checkbox" id="filterStudentNation" onChange={() => this.props.handleFilterCheckbox('studentNation')} checked={this.props.filterValues.studentNation} className="form-control"></input>
						</div>
					</div>
					<div className="col-xs-6">
						<label className="control-label" htmlFor="filterEntrenceFee">Gratis inträde</label>
						<i className="fa fa-question-circle" title="Detta innebär klubbarj ao"></i>
						<div className="form-group">
							<input type="checkbox" id="filterEntrenceFee" onChange={() => this.props.handleFilterCheckbox('freeEntrence')} checked={this.props.filterValues.freeEntrence} className="form-control"></input>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

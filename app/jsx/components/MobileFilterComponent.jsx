import React from 'react';
import FilterComponent from './FilterComponent.jsx';
import {Modal} from 'react-bootstrap';
import FilterFieldsComponent from './FilterFieldsComponent.jsx'


export default class MobileFilterComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showFilters: false
		};
	}

	toggle = () => {
		console.log('tja');
		this.setState({
			showFilters: !this.state.showFilters
		});
	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.toggle} className="navbar-toggle collapsed">
					<span className="sr-only"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<Modal show={this.state.showFilters} onHide={this.toggle}>
					<Modal.Header closeButton>Filter</Modal.Header>
					<Modal.Body>
						<FilterFieldsComponent handleFilterCheckbox={this.props.handleFilterCheckbox} filterValues={this.props.filterValues} handleFilterChange={this.props.handleFilterChange}></FilterFieldsComponent>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

import React from 'react';
import {Collapse} from 'react-bootstrap';
import FilterFieldsComponent from './FilterFieldsComponent.jsx'

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true
		};
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	renderChevron = () => this.state.isOpen ? <i className="fa fa-chevron-up pull-right"></i> : <i className="fa fa-chevron-down pull-right"></i>;

	render() {
		return (
			<div className="filters">
				<h5 onClick={this.toggle} className="pointer">Filtrera {this.renderChevron()}</h5>
				<Collapse in={this.state.isOpen}>
					<div>
						<FilterFieldsComponent handleFilterCheckbox={this.props.handleFilterCheckbox} filterValues={this.props.filterValues} handleFilterChange={this.props.handleFilterChange}></FilterFieldsComponent>
					</div>
				</Collapse>
			</div>
		);
	}
}

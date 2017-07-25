import React from 'react';

class PaymentTemplate extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="panel panel-default" style={{minWidth: '200px'}}>
				<div className="panel-heading">Panel heading without title <i className="pull-right fa fa-times fa-x1" onClick={this.props.close}></i></div>
				<div className="panel-body">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default PaymentTemplate;

import React from 'react';

class PaymentTemplate extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="panel panel-default info-popover">
				<div className="panel-heading">
					{this.props.title}
					<i className="pull-right fa fa-times pointer" onClick={this.props.close}></i>
				</div>
				<div className="panel-body">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default PaymentTemplate;

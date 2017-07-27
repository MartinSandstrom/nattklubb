import React from 'react';

class PaymentTemplate extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="panel panel-default info-popover">
				<div className="panel-heading">
					<p className="no-margin">
						<span className="popover-title-text">{this.props.title}</span>
						<i className="pull-right fa fa-2x fa-times pointer" onClick={this.props.close}></i>
					</p>
				</div>
				<div className="panel-body">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default PaymentTemplate;

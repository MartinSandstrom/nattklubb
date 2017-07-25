import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MarkerComponent.jsx';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static defaultProps = {
		center: {
			lat: 59.334591,
			lng: 18.063240
		},
		zoom: 13
	};

	render() {
		return (
			<div className="map-container">
				<GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyAEgBo9VxEFnxjfSjywJEQAJCYQat7SvJs'}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
					<Marker name="Oxid" lat={59.334591} lng={18.063240}></Marker>
					<Marker name="Nått" lat={59.334591} lng={18.093240}></Marker>
					<Marker name="Annat" lat={59.334591} lng={18.033240}></Marker>
					<Marker name="Ställe" lat={59.344591} lng={18.063240}></Marker>
				</GoogleMapReact>
			</div>
		);
	}
}
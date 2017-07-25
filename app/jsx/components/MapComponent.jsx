import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MarkerComponent.jsx';
import {clubs} from '../clubs.js';

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
		let clubsElements = clubs.map((club, index) => (
			<Marker key={index} name={club.name} lat={club.lat} lng={club.lng}></Marker>
		));
		return (
			<div className="row">
				<div className="map-container col-sm-9">
					<GoogleMapReact bootstrapURLKeys={{
						key: 'AIzaSyAEgBo9VxEFnxjfSjywJEQAJCYQat7SvJs'
					}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>

						{clubsElements}

					</GoogleMapReact>
				</div>
				<div className="col-sm-3">
					<h3>List with all places</h3>
				</div>
			</div>
		);
	}
}
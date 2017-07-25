import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MarkerComponent.jsx';
import AsideBox from './AsideBoxComponent.jsx';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hoveredClub: '',
			clickedClub: ''
		};
	}

	static defaultProps = {
		center: {
			lat: 59.334591,
			lng: 18.063240
		},
		zoom: 13
	};

	onHoverEnter = (name) => this.setState({hoveredClub: name});

	onClubClick = (name) => this.setState({clickedClub: name});

	render() {
		let clubsElements = this.props.clubs.map((club, index) => (
			<Marker onClubClick={this.onClubClick} clickedClub={this.state.clickedClub} hoveredClub={this.state.hoveredClub} onHoverEnter={this.onHoverEnter} key={index} name={club.name} lat={club.lat} lng={club.lng}></Marker>
		));
		let asideElements = this.props.clubs.map((club, index) => (
			<AsideBox onClubClick={this.onClubClick} clickedClub={this.state.clickedClub} hoveredClub={this.state.hoveredClub} onHoverEnter={this.onHoverEnter} key={index} title={club.name}></AsideBox>
		));
		return (
			<div className="row">
				<div className="map-container col-sm-9 no-padding">
					<GoogleMapReact bootstrapURLKeys={{
						key: 'AIzaSyAEgBo9VxEFnxjfSjywJEQAJCYQat7SvJs'
					}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
						{clubsElements}
					</GoogleMapReact>
				</div>
				<div className="col-sm-3 no-padding">
					<h3 className="text-center">Nattklubbar</h3>
					<div className="aside-list-container">
						{asideElements}
					</div>
				</div>
			</div>
		);
	}
}
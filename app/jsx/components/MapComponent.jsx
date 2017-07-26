import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MarkerComponent.jsx';
import AsideBox from './AsideBoxComponent.jsx';
import Filter from './FilterComponent.jsx';

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hoveredClub: '',
			clickedClub: '',
			filters: {
				name: ''
			},
			center: {
				lat: 59.334591,
				lng: 18.063240
			}
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

	setNewCenter = (lat, lng) => {
		let center = {
			lat,
			lng
		};
		this.setState({center});
	}

	isInFilter = (club) => {
		if (this.state.filters.name && this.isMissingInNameFilter(club.name)) {
			return false;
		}
		// TODO add more filters here.
		return true;
	}

	handleFilterChange = (e) => {
		let name = e.target.name;
		let filters = this.state.filters;
		filters[name] = e.target.value;
		this.setState({filters});
	}

	isMissingInNameFilter = (clubName) => clubName.toLowerCase().indexOf(this.state.filters.name.toLowerCase()) === -1;

	render() {
		let clubsElements = [];
		let asideElements = [];
		this.props.clubs.forEach((club, index) => {
			if (this.isInFilter(club)) {
				clubsElements.push(
					<Marker openHours={club.openHours} onClubClick={this.onClubClick} clickedClub={this.state.clickedClub} hoveredClub={this.state.hoveredClub} onHoverEnter={this.onHoverEnter} key={index} name={club.name} lat={club.lat} lng={club.lng}></Marker>
				);
				asideElements.push(
					<AsideBox setNewCenter={this.setNewCenter} onClubClick={this.onClubClick} clickedClub={this.state.clickedClub} hoveredClub={this.state.hoveredClub} onHoverEnter={this.onHoverEnter} key={index} title={club.name} address={club.address} lat={club.lat} lng={club.lng}></AsideBox>
				);
			}
		});
		return (
			<div className="row">
				<div className="map-container col-sm-9 no-padding">
					<GoogleMapReact bootstrapURLKeys={{
						key: 'AIzaSyAEgBo9VxEFnxjfSjywJEQAJCYQat7SvJs'
					}} zoom={13} center={this.state.center}>
						{clubsElements}
					</GoogleMapReact>
				</div>
				<div className="col-sm-3 no-padding hidden-xs">
					<Filter filterName={this.state.filters.name} handleFilterChange={this.handleFilterChange}></Filter>

					<div className="aside-list-container">
						{asideElements}
					</div>
				</div>
			</div>
		);
	}
}
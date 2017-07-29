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
				name: '',
				address: '',
				club: false,
				bar: false,
				studentNation: false
			},
			center: {
				lat: 59.334591,
				lng: 18.063240
			}
		};
	}

	// TODO removed because why. You probably dont want to see clubs where you are at the moment and it made the map jump.
	// componentDidMount = () => navigator.geolocation ? navigator.geolocation.getCurrentPosition(this.showPosition) : false;
	// showPosition = (position) => this.setNewCenter(position.coords.latitude, position.coords.longitude);

	handleHoverEnter = (name) => this.setState({hoveredClub: name});

	handleClubClick = (name) => this.setState({clickedClub: name});

	setNewCenter = (lat, lng) => {
		let center = {
			lat,
			lng
		};
		this.setState({center});
	}

	isInFilter = (club) => {
		if (this.state.filters.name && this.isMissingInFilter(club.name, 'name')) {
			return false;
		} else if (this.state.filters.address && this.isMissingInFilter(club.address, 'address')) {
			// TODO add more filters here.
			return false;
		} else if (this.state.filters.club && !this.hasKeyword(club.keyWord, 'club')) {
			return false;
		} else if (this.state.filters.bar && !this.hasKeyword(club.keyWord, 'bar')) {
			return false;
		} else if (this.state.filters.studentNation && !this.hasKeyword(club.keyWord, 'studentNation')) {
			return false;
		}
		return true;
	}

	handleFilterChange = (e) => {
		let filters = this.state.filters;
		filters[e.target.name] = e.target.value;
		this.setState({filters});
	}

	handleFilterCheckbox = (name) => {
		let filters = this.state.filters;
		filters[name] = !filters[name];
		this.setState({filters});
	}

	hasKeyword = (keywords, name) => keywords.some((key) => key === name);

	isMissingInFilter = (value, property) => value.toLowerCase().indexOf(this.state.filters[property].toLowerCase()) === -1;

	render() {
		let clubsElements = [];
		let asideElements = [];
		this.props.clubs.forEach((club, index) => {
			if (this.isInFilter(club)) {
				clubsElements.push(
					<Marker openHours={club.openHours} handleClubClick={this.handleClubClick} clickedClub={this.state.clickedClub} hoveredClub={this.state.hoveredClub} handleHoverEnter={this.handleHoverEnter} key={index} name={club.name} lat={club.lat} lng={club.lng}></Marker>
				);
				asideElements.push(
					<AsideBox setNewCenter={this.setNewCenter} handleClubClick={this.handleClubClick} clickedClub={this.state.clickedClub} hoveredClub={this.state.hoveredClub} handleHoverEnter={this.handleHoverEnter} key={index} title={club.name} address={club.address} lat={club.lat} lng={club.lng}></AsideBox>
				);
			}
		});
		let filters = this.state.filters;
		return (
			<div>
				<div className="map-container col-sm-9 no-padding">
					<GoogleMapReact bootstrapURLKeys={{
						key: 'AIzaSyAEgBo9VxEFnxjfSjywJEQAJCYQat7SvJs'
					}} zoom={13} center={this.state.center}>
						{clubsElements}
					</GoogleMapReact>
				</div>
				<div className="col-sm-3 no-padding hidden-xs aside">
					<Filter handleFilterCheckbox={this.handleFilterCheckbox} filterValues={filters} handleFilterChange={this.handleFilterChange}></Filter>
					<div className="aside-list-container">
						{asideElements}
					</div>
				</div>
			</div>
		);
	}
}
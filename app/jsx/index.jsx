import React from 'react';
import {render} from 'react-dom';
import TestComponent from './components/TestComponent.jsx';
import MapComponent from './components/MapComponent.jsx';
import {clubs} from './clubs.js';

import Marker from './components/MarkerComponent.jsx';

let test = document.getElementById('test');
if (test) {
	render(
		<TestComponent></TestComponent>, test);
}

let marker = document.getElementById('marker');
if (marker) {
	render(
		<Marker></Marker>, marker);
}

let map = document.getElementById('map');
if (map) {
	render(
		<MapComponent clubs={clubs}></MapComponent>, map);
}
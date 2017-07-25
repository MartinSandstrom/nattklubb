import React from 'react';
import {render} from 'react-dom';
import TestComponent from './components/TestComponent.jsx';
import MapComponent from './components/MapComponent.jsx';

let test = document.getElementById('test');
if (test) {
	render(
		<TestComponent></TestComponent>, test);
}

let map = document.getElementById('map');
if (map) {
	render(
		<MapComponent></MapComponent>, map);
}